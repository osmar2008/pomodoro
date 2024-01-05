import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
