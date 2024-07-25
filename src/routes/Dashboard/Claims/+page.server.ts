import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'

// export async function load({ fetch }) {
//     try {
//         const fetchClaims = async () => {
//             const res = await fetch('/api/claims');
//             const data = res.json();
//             console.log(data);
//             return data.claims;
//         }
//         return {
//             claims: fetchClaims()
//         }

//     } catch (error) {
//         console.log(
//             'Table does not exist, creating and seeding it with dummy data now...'
//         )
//         // // Table is not 0created yet
//         // await seed();
//         // const { rows: claims } = await db.query('SELECT * FROM claims')
//         // return {
//         //     claims: claims
//         // }
//     }
// }


export async function load() {
    const db = createPool({ connectionString: POSTGRES_URL })
    try {
        const { rows: claims } = await db.query('SELECT * FROM claims')
        return {
            claims: claims,
        }
    } catch (error) {
        console.log(
            'Table does not exist, creating and seeding it with dummy data now...'
        )
        // Table is not 0created yet
        await seed();
        const { rows: claims } = await db.query('SELECT * FROM claims')
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
        amount INT NOT NULL,
        description VARCHAR(255),
        bill VARCHAR(255) NOT NULL,
        status VARCHAR(255) DEFAULT 'Under Process',
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
    console.log(`Created "claims" table`)

    console.log("Seed runing");
    const claims = await Promise.all([
        client.sql`
          INSERT INTO claims (Claim_id,Amount,Description,Bill)
          VALUES ('1', 100000 , '', 'https://www.myopd.in/blog/wp-content/uploads/2023/01/Provisional-Hospital-Bill.png')
          ON CONFLICT (Claim_id) DO NOTHING;
      `,
        client.sql`
          INSERT INTO claims (Claim_id,Amount,Description,Bill)
          VALUES ('1', 150000 , '', 'https://www.myopd.in/blog/wp-content/uploads/2023/01/Provisional-Hospital-Bill.png')
          ON CONFLICT (Claim_id) DO NOTHING;
      `,
        client.sql`
          INSERT INTO claims (Claim_id,Amount,Description,Bill)
          VALUES ('1', 220000 , '', 'https://www.myopd.in/blog/wp-content/uploads/2023/01/Provisional-Hospital-Bill.png')
          ON CONFLICT (Claim_id) DO NOTHING;
      `,
    ])
    console.log(`Seeded ${claims.length} users`)

    return {
        createTable,
        claims,
    }
}

export const actions = {

    create: async ({ request }) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const claim_id = data.get('claim_id');
        const amount = data.get('amount');
        const desc = data.get('desc');
        const bill = data.get('bill');

        const createUser = await client.sql`
      INSERT INTO claims (claim_id,amount,description,bill)
      VALUES (${claim_id},${amount},${desc}, ${bill})
      ON CONFLICT (claim_id) DO NOTHING;
    `
        return { success: true };
    }
};



