import "dotenv/config";
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const dbCredentialsSchema = z.object({
  host: z.string(),
  user: z.string(),
  password: z.string(),
  database: z.string(),
});

export default {
  schema: "../schemas/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: dbCredentialsSchema.parse({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }),
} satisfies Config;
