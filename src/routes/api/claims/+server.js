import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";

export const GET = async () => {
    const db = createPool({ connectionString: POSTGRES_URL });
    // const claims = await db.query('SELECT * FROM claims');
    const { rows: res } = await db.query('SELECT * FROM claims');
    const data = { claims: res };
    console.log(data)
    return new Response(JSON.stringify(data));
}