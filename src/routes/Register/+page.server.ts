import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'
import type { RequestEvent } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
    create: async ({ request }: RequestEvent) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const name = data.get('name');
        const email = data.get('email');
        const password = data.get('password');
        const paymail = data.get('paymail');

        if (!name || !email || !password || !paymail) { return { error: true, msg: "All fields are required!" } }
        try {
            const createuser = await client.sql`
            INSERT INTO users (name, email, password, paymail)
            VALUES (${name}, ${email}, ${password},${paymail})
            ON CONFLICT (email) DO NOTHING;
            `
            redirect(302, '/Login');
        }
        catch (err) {
            await createUserTable()
            const createuser = await client.sql`
            INSERT INTO users (name, email, password, paymail)
            VALUES (${name}, ${email}, ${password},${paymail})
            ON CONFLICT (email) DO NOTHING;
            `
            redirect(302, '/Login');
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
    return { createTable }
}