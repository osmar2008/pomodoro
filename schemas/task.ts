import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { users } from "./user.js";

export const tasks = pgTable("tasks", {
  taskId: serial("taskId").primaryKey(),
  name: varchar("email").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  userId: serial("user_id").references(() => users.id),
});
