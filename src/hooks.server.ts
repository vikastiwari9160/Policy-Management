import { getuser } from "./services/auth";
import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'
import { islogedin } from "./store/loginStore";

/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
    const token = event.cookies.get("authtoken");
    try {
        if (!token) { event.locals.authUser = undefined; }
        const claims = getuser(token);
        if (!claims) { event.locals.authUser = undefined; }
        if (token && claims) {
            const db = createPool({ connectionString: POSTGRES_URL })
            const client = await db.connect();
            const { rows: FullUser } = await client.sql`Select * from users where email = ${claims.email} `
            if (!FullUser) { event.locals.authUser = undefined; }
            const { password, ...user } = FullUser[0];
            event.locals.authUser = user;
            islogedin.set(true);
        }
    } finally {
        const responce = await resolve(event);
        return responce;
    }
}