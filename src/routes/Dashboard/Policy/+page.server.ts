import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'

export async function load() {
    const db = createPool({ connectionString: POSTGRES_URL })

    try {
        const { rows: policy } = await db.query('SELECT * FROM policy')
        return {
            policy: policy,
        }
    } catch (error) {
        await seed()
        const { rows: policy } = await db.query('SELECT * FROM policy')
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
      provider VARCHAR(255) ,
      coverage INT ,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
    const policy = await Promise.all([
        client.sql`
          INSERT INTO policy (policy_id, provider,coverage)
          VALUES (1, 'Vikas', 40)
          ON CONFLICT (policy_id) DO NOTHING;
      `,
        client.sql`
          INSERT INTO policy (policy_id, provider,coverage)
          VALUES (2, 'Jay', 30)
          ON CONFLICT (policy_id) DO NOTHING;
      `,
        client.sql`
          INSERT INTO policy (policy_id, provider,coverage)
          VALUES (3, 'Aditya', 25)
          ON CONFLICT (policy_id) DO NOTHING;
      `,
    ])
    console.log(`Seeded ${policy.length} users`)

    return {
        createTable,
        policy,
    }
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const policy_id = data.get('policy_id');
        const provider = data.get('provider');
        const coverage = data.get('coverage');

        const createpolicy = await client.sql`
      INSERT INTO policy (policy_id, provider, coverage)
      VALUES (${policy_id}, ${provider}, ${coverage})
      ON CONFLICT (policy_id) DO NOTHING;
    `
        return { success: true };
    }
};


