// drizzle/seed.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from './schema';
import * as bcrypt from "bcryptjs";

async function main() {
    const pool = new Pool({
        connectionString: process.env.AUTH_DRIZZLE_URL!
    });
    const db = drizzle(pool, { schema });

    const hashedPassword = await bcrypt.hash(process.env.AUTH_ADMIN_PSW!, 10);

    // Inserisci manualmente l'utente admin
    await db.insert(schema.users).values({
        id: "1",
        name: process.env.AUTH_ADMIN_NAME!,
        email: process.env.AUTH_ADMIN_EMAIL!,
        hashedPassword,
        role: "admin",
        emailVerified: new Date(),
        image: "none"
    });

    console.log("Seed completato!");
    await pool.end();
}

main().catch(console.error);