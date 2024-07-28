import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'
import { redirect } from '@sveltejs/kit';


export async function load({ locals }) {
    if (!locals.authUser) throw redirect(302, '/Login');
    const db = createPool({ connectionString: POSTGRES_URL })
    const user = locals.authUser;
    try {
        const { rows: claims } = await db.query(`SELECT * FROM claims where user_id= ${user.id}`)
        return {
            claims: claims,
        }
    } catch (error) {
        await seed();
        const { rows: claims } = await db.query(`SELECT * FROM claims where user_id= ${user.id}`)
        return {
            claims: claims
        }
    }
}

async function seed() {
    const db = createPool({ connectionString: POSTGRES_URL })
    const client = await db.connect();
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS claims (
        claim_id INT PRIMARY KEY,
        user_id INT NOT NULL,
        amount INT NOT NULL,
        description VARCHAR(255),
        bill VARCHAR(255) NOT NULL,
        status VARCHAR(255) DEFAULT 'Under Process',
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
    return {
        createTable
    }
}

export const actions = {

    create: async ({ request, locals }) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const claim_id = data.get('claim_id');
        const amount = data.get('amount');
        const desc = data.get('desc');
        const bill = data.get('bill');
        const user_id = locals.authUser.id;

        const { rows: policy } = await client.sql`Select * from policy where policy_id = ${claim_id} AND user_id= ${user_id}
        `
        if (!policy) { return { error: true, msg: "Policy with the above ID does not exist!" } }

        const createUser = await client.sql`
      INSERT INTO claims (claim_id,user_id,amount,description,bill)
      VALUES (${claim_id},${user_id},${amount},${desc}, ${bill})
      ON CONFLICT (claim_id) DO NOTHING;
    `
        return { success: true };
    }
};



