import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects, skills, timeline } from "@shared/schema";

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "Word Dictionary (C++)",
        description: "Menu-based dictionary using binary search tree",
        techStack: ["C++", "Data Structures", "BST"],
        githubUrl: "https://github.com/Toufiq-Github/Mini-Projects/tree/main/Word%20Dictionary%20-%20Algorithm/Dictionary",
        order: 1
      },
      {
        title: "Retinal Disease Detection",
        description: "Using a Hybrid Deep Learning Model with Explainable AI (XAI)",
        techStack: ["Python", "Deep Learning", "TensorFlow", "XAI"],
        githubUrl: "https://github.com/Toufiq-Github/Retina_Disease_Classifiaction",
        order: 2
      },
      {
        title: "E-commerce Website",
        description: "Full-featured e-commerce platform",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/Toufiq-Github/E-commerce-Website",
        order: 3
      }
    ]);
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await db.insert(skills).values([
      { name: "C++", category: "Technical Skills", icon: "C++", order: 1 },
      { name: "Java", category: "Technical Skills", icon: "Java", order: 2 },
      { name: "Python", category: "Technical Skills", icon: "Python", order: 3 },
      { name: "JavaScript", category: "Technical Skills", icon: "JavaScript", order: 4 },
      { name: "React", category: "Technical Skills", icon: "React", order: 5 },
      { name: "Node.js", category: "Technical Skills", icon: "Node.js", order: 6 },
      { name: "TensorFlow", category: "Technical Skills", icon: "TensorFlow", order: 7 }
    ]);
  }

  const existingTimeline = await storage.getTimeline();
  if (existingTimeline.length === 0) {
    await db.insert(timeline).values([
      {
        title: "Bachelor of Science, Computer Science & Engineering",
        organization: "EAST WEST UNIVERSITY – Dhaka, Bangladesh",
        period: "Oct 2021 – Feb 2026 (Expected)",
        type: "education",
        order: 1
      },
      {
        title: "Research Assistant",
        organization: "East West University",
        period: "2023 - Present",
        type: "experience",
        order: 2
      }
    ]);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed DB data on startup
  seedDatabase().catch(console.error);

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const msg = await storage.createMessage(input);
      res.status(201).json(msg);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  app.get(api.projects.list.path, async (req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.timeline.list.path, async (req, res) => {
    const data = await storage.getTimeline();
    res.json(data);
  });

  return httpServer;
}
