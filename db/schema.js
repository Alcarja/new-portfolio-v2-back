import { pgTable, serial, text, integer, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  year: integer("year").notNull(),
  technology: text("technology").array().notNull(),
  url: varchar("url", { length: 255 }),
  imageUrl: varchar("image_url", { length: 255 }),
});
