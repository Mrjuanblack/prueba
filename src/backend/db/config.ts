import { Pool } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "./schema";

// Change USER and PASSWORD based on your database credentials
// DATABASENAME is the name of the database you created

//postgresql://USER:PASSWORD@localhost:5432/DATABASENAME?schema=public
const pool = new Pool({
    connectionString: "postgresql://postgres:admin@localhost:5432/prueba?schema=public",
});

const db = drizzle(pool, { schema });

export { db };