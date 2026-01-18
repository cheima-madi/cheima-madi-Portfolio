import { db } from "./db";
import {
  skills, projects, contactMessages,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type InsertContactMessage, type ContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      await db.insert(skills).values([
        { name: "React", category: "frontend", proficiency: 90 },
        { name: "TypeScript", category: "frontend", proficiency: 85 },
        { name: "Node.js", category: "backend", proficiency: 80 },
        { name: "PostgreSQL", category: "backend", proficiency: 75 },
        { name: "Tailwind CSS", category: "frontend", proficiency: 95 },
        { name: "Python", category: "backend", proficiency: 70 },
        { name: "Docker", category: "tools", proficiency: 60 },
        { name: "GraphQL", category: "backend", proficiency: 70 },
      ]);
    }

    const existingProjects = await this.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution with payments and inventory management.",
          imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
          link: "https://example.com",
          githubLink: "https://github.com/mimidev/ecommerce"
        },
        {
          title: "Task Management App",
          description: "Real-time task collaboration tool with drag-and-drop interface.",
          imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
          techStack: ["React", "Firebase", "Tailwind CSS"],
          link: "https://example.com",
          githubLink: "https://github.com/mimidev/taskapp"
        },
        {
          title: "Social Media Dashboard",
          description: "Analytics dashboard for tracking social media performance.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
          techStack: ["Vue.js", "D3.js", "Express"],
          link: "https://example.com",
          githubLink: "https://github.com/mimidev/dashboard"
        },
        {
          title: "AI Chatbot",
          description: "Customer support chatbot powered by OpenAI.",
          imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
          techStack: ["Python", "OpenAI API", "Flask"],
          link: "https://example.com",
          githubLink: "https://github.com/mimidev/chatbot"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
