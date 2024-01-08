import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "pomodoro",
  password: "pomodoro",
  database: "pomodoro",
});
