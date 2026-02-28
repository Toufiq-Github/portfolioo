import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects, skills, timeline } from "@shared/schema";

async function seedDatabase() {
  // Clear existing data to re-seed
  await db.delete(projects);
  await db.delete(skills);
  await db.delete(timeline);

  await db.insert(projects).values([
    {
      title: "Ecommerce Web App",
      description: "A full-featured ecommerce platform with advanced filtering, cart management, and secure checkout process.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      imageUrl: "Ecommerce.png",
      githubUrl: "https://github.com/Toufiq-Github/E-commerce-Website",
      liveUrl: "https://ecommerce-demo.com",
      order: 1
    },
    {
      title: "Retinal Disease Detection",
      description: "Advanced deep learning system for automated detection of retinal diseases using a Hybrid Deep Learning Model with Explainable AI (XAI) for clinical transparency.",
      techStack: ["Python", "Deep Learning", "TensorFlow", "OpenCV", "XAI"],
      imageUrl: "retina.png",
      githubUrl: "https://github.com/Toufiq-Github/Retina_Disease_Classifiaction",
      order: 2
    },
    {
      title: "Word Dictionary",
      description: "A efficient dictionary application built using C++ with custom binary search tree implementation for fast word retrieval and management.",
      techStack: ["C++", "Data Structures", "BST"],
      imageUrl: "word.png",
      githubUrl: "https://github.com/Toufiq-Github/Mini-Projects/tree/main/Word%20Dictionary%20-%20Algorithm/Dictionary",
      liveUrl: "https://word-dictionary-demo.com",
      order: 3
    }
  ]);

  await db.insert(skills).values([
    { name: "C++", category: "Technical Skills", icon: "C++", order: 1 },
    { name: "Java", category: "Technical Skills", icon: "Java", order: 2 },
    { name: "Python", category: "Technical Skills", icon: "SiPython", order: 3 },
    { name: "JavaScript", category: "Technical Skills", icon: "SiJavascript", order: 4 },
    { name: "React", category: "Technical Skills", icon: "SiReact", order: 5 },
    { name: "Node.js", category: "Technical Skills", icon: "SiNodedotjs", order: 6 },
    { name: "ExpressJS", category: "Technical Skills", icon: "ExpressJS", order: 7 },
    { name: "MongoDB", category: "Technical Skills", icon: "MongoDB", order: 8 },
    { name: "MySQL", category: "Technical Skills", icon: "MySQL", order: 9 },
    { name: "Oracle", category: "Technical Skills", icon: "Oracle", order: 10 },
    { name: "Linux", category: "Technical Skills", icon: "Linux", order: 11 },
    { name: "Git", category: "Technical Skills", icon: "SiGit", order: 12 },
    { name: "TensorFlow", category: "Technical Skills", icon: "TensorFlow", order: 13 }
  ]);

  await db.insert(timeline).values([
    {
      title: "Bachelor of Science, Computer Science & Engineering",
      organization: "EAST WEST UNIVERSITY – Dhaka, Bangladesh",
      period: "Oct 2021 – April 2026",
      type: "education",
      order: 1
    }
  ]);
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
