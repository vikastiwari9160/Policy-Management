import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const paymail = data.get('paymail');

        try {
            const createuser = await client.sql`
            INSERT INTO users (name, email, password, paymail)
            VALUES (${name}, ${email}, ${password},${paymail})
            ON CONFLICT (email) DO NOTHING;
            `
            return { success: "true" };
        }
        catch (err) {
            await createUserTable()
            const createuser = await client.sql`
            INSERT INTO users (name, email, password, paymail)
            VALUES (${name}, ${email}, ${password},${paymail})
            ON CONFLICT (email) DO NOTHING;
            `
            return { success: "true" };
        }
    }
};

async function createUserTable() {
    const db = createPool({ connectionString: POSTGRES_URL })
    const client = await db.connect();
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      paymail VARCHAR(255) NOT NULL,
      issuperuser VARCHAR(255) DEFAULT 'false',
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
    const dummyuser = await client.sql`INSERT INTO users (name, email, password, paymail)
        VALUES ('Dummy','Dummy@gmail.com','Dummy','Dummy@dev.neucron.io')
        ON CONFLICT (email) DO NOTHING;
    `
    return { createTable, dummyuser }
}