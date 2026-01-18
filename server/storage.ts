import { db } from "./db";
import {
  skills, projects, contactMessages, education, experience,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type InsertContactMessage, type ContactMessage,
  type Education, type Experience
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  getEducation(): Promise<Education[]>;
  getExperience(): Promise<Experience[]>;
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

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async seedData(): Promise<void> {
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      await db.insert(skills).values([
        { name: "Java", category: "backend", proficiency: 85 },
        { name: "Python", category: "backend", proficiency: 80 },
        { name: "JavaScript", category: "frontend", proficiency: 75 },
        { name: "React", category: "frontend", proficiency: 70 },
        { name: "Spring Boot", category: "backend", proficiency: 65 },
        { name: "SQL", category: "backend", proficiency: 80 },
        { name: "HTML5 & CSS3", category: "frontend", proficiency: 90 },
        { name: "PHP", category: "backend", proficiency: 70 },
        { name: "UI/UX Design", category: "tools", proficiency: 85 },
      ]);
    }

    const existingEducation = await this.getEducation();
    if (existingEducation.length === 0) {
      await db.insert(education).values([
        {
          degree: "Bachelor of Software and Information Systems Technology and Engineering",
          institution: "University of Constantine 2 Abdelhamid Mehri, Algeria",
          period: "September 2023 – June 2026 (Expected)",
          description: "Relevant Coursework: Advanced Programming, Software Engineering, Data Structures, Web Development, Database Management, UI/UX Design, Project Management"
        },
        {
          degree: "Baccalaureate in Mathematics",
          institution: "Scientific Specialty",
          period: "June 2023",
          description: ""
        }
      ]);
    }

    const existingExperience = await this.getExperience();
    if (existingExperience.length === 0) {
      await db.insert(experience).values([
        {
          role: "Founder & Manager",
          company: "Private Educational Support Center",
          period: "2023 – Present",
          description: "Founded and manage an educational support center providing tutoring services for children and adults. Supervise teaching staff and maintain quality educational standards."
        }
      ]);
    }

    const existingProjects = await this.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "E-Commerce Clothing Store",
          description: "A fully functional online shopping platform with product catalog, shopping cart, and checkout features.",
          imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
          techStack: ["React", "Software Engineering", "UI/UX Design"],
          link: "#",
          githubLink: "#",
          type: "project"
        },
        {
          title: "JavaFX Desktop App",
          description: "Developed desktop application using JavaFX with sophisticated graphical user interface and concurrent programming.",
          imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
          techStack: ["Java", "JavaFX", "Design Patterns"],
          link: "#",
          githubLink: "#",
          type: "project"
        },
        {
          title: "Pomodoro Timer",
          description: "An interactive focus tool to help manage study sessions using the Pomodoro technique.",
          imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
          techStack: ["React", "State Management"],
          link: "/tools/pomodoro",
          githubLink: "#",
          type: "tool"
        },
        {
          title: "To-Do List Manager",
          description: "Simple yet powerful task manager to stay organized.",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
          techStack: ["React", "LocalStorage"],
          link: "/tools/todo",
          githubLink: "#",
          type: "tool"
        },
        {
          title: "Memory Match Game",
          description: "A fun and simple game to test your memory skills.",
          imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
          techStack: ["React", "Game Logic"],
          link: "/games/memory",
          githubLink: "#",
          type: "game"
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
