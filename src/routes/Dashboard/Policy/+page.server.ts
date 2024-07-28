import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
    if (!locals.authUser) throw redirect(302, '/Login');

    const db = createPool({ connectionString: POSTGRES_URL })
    const user = locals.authUser;
    try {
        const { rows: policy } = await db.query(`SELECT * FROM policy where user_id= ${user.id}`)
        return {
            policy: policy,
        }
    } catch (error) {
        await seed()
        const { rows: policy } = await db.query(`SELECT * FROM policy where user_id= ${user.id}`)
        return {
            policy: policy
        }
    }
}

async function seed() {
    const db = createPool({ connectionString: POSTGRES_URL })
    const client = await db.connect();
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS policy  (
        policy_id INT PRIMARY KEY,
        user_id INT ,
        provider VARCHAR(255) ,
        coverage INT ,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
    return {
        createTable,
    }
}

export const actions = {
    create: async ({ request, locals }) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const policy_id = data.get('policy_id');
        const provider = data.get('provider');
        const coverage = data.get('coverage');
        const user_id = locals.authUser.id;

        const createpolicy = await client.sql`
      INSERT INTO policy (policy_id,user_id, provider, coverage)
      VALUES (${policy_id},${user_id}, ${provider}, ${coverage})
      ON CONFLICT (policy_id) DO NOTHING;
    `
        return { success: true };
    }
};


