import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";

export async function GET() {
    const db = createPool({ connectionString: POSTGRES_URL });
    const { rows: res } = await db.query('SELECT * FROM claims');
    return new Response(JSON.stringify({ status: 200, claims: res }))
}