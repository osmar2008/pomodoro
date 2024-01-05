import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "pomodoro",
  password: "pomodoro",
  database: "pomodoro",
});

export const db = drizzle(client);
// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: "./" });

// Don't forget to close the connection, otherwise the script will hang
await client.end();
