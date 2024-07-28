import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'
import { setuser } from '../../services/auth';
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const actions = {
    Login: async ({ request, cookies }: RequestEvent) => {
        const data = await request.formData();
        const db = createPool({ connectionString: POSTGRES_URL })
        const client = await db.connect();

        const email = data.get('email');
        const password = data.get('password');

        if (email == "" || password == "") {
            return { error: true, msg: "Both fields are required!" }
        }
        try {
            const { rows: users } = await client.sql`
            Select * from users where email = ${email} AND password=${password};
            `
            const user = users[0];
            if (!user) { return { error: true, msg: "User Not Found!" } }
            let token = await setuser(user);
            cookies.set('authtoken', token, { path: '/' });
        } finally {
            redirect(302, '/');
        }
    }
};