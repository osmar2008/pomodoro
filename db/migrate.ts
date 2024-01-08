import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as dotenv from "dotenv";

dotenv.config();

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "pomodoro",
  password: "pomodoro",
  database: "pomodoro",
});

export const db = drizzle(client);
