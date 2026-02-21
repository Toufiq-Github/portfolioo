import { pgTable, text, serial, timestamp, json, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Messages from Contact Form
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Projects
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  techStack: json("tech_stack").$type<string[]>().notNull(),
  imageUrl: text("image_url"),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  order: serial("order"),
});

// Skills
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // e.g., 'Frontend', 'Backend', 'Tools'
  icon: text("icon"), // CSS class for icon
  proficiency: text("proficiency"), // e.g., '90%'
  order: serial("order"),
});

// Experience & Education
export const timeline = pgTable("timeline", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // Job title or Degree
  organization: text("organization").notNull(), // Company or Institution
  period: text("period").notNull(), // e.g., '2020 - 2023'
  description: text("description"),
  type: varchar("type", { length: 20 }).notNull(), // 'experience' or 'education'
  order: serial("order"),
});

export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true, order: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true, order: true });
export const insertTimelineSchema = createInsertSchema(timeline).omit({ id: true, order: true });

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type TimelineItem = typeof timeline.$inferSelect;
export type InsertTimelineItem = z.infer<typeof insertTimelineSchema>;
