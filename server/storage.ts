import { db } from "./db";
import {
  messages,
  projects,
  skills,
  timeline,
  type InsertMessage,
  type Message,
  type Project,
  type Skill,
  type TimelineItem
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getTimeline(): Promise<TimelineItem[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [msg] = await db.insert(messages).values(insertMessage).returning();
    return msg;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.order);
  }

  async getTimeline(): Promise<TimelineItem[]> {
    return await db.select().from(timeline).orderBy(timeline.order);
  }
}

export const storage = new DatabaseStorage();
