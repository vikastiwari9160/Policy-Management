import { createPool } from '@vercel/postgres'
import { POSTGRES_URL } from '$env/static/private'

export async function load() {
    const db = createPool({ connectionString: POSTGRES_URL })
    try {
        const { rows: users } = await db.query('SELECT * FROM users')
        return {
            users: users,
        }
    } catch (error) {
        await seed();
        const { rows: users } = await db.query('SELECT * FROM users')
        return {
            users: users
        }
    }
}