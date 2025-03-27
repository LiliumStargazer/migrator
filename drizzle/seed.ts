import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import * as schema from './schema.ts';
import * as bcrypt from "bcryptjs";

async function main() {
    const db = drizzle(process.env.AUTH_DRIZZLE_URL!);
    const hashedPassword = await bcrypt.hash(process.env.AUTH_DRIZZLE_ADMIN_PSW, 10);
    await seed(db, schema).refine(() => ({
        users: {
            count: 1,
            columns: {
                id: () => "1", // Puoi cambiare l'ID se necessario
                name: () => process.env.AUTH_ADMIN_NAME,
                email: () => process.env.AUTH_ADMIN_EMAIL,
                hashedPassword: () => hashedPassword, // Assicurati di usare una password hashata
                role: () => "admin",
                emailVerified: () => new Date(),
                image: () => "none" // Puoi cambiare il percorso dell'immagine se necessario
            }
        }
    }));
}

main();
