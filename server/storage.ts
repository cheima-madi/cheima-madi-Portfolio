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
    // Clear existing to re-seed with full CV data
    await db.delete(skills);
    await db.delete(projects);
    await db.delete(education);
    await db.delete(experience);

    await db.insert(skills).values([
      // Languages
      { name: "Java", category: "language", proficiency: 90 },
      { name: "Python", category: "language", proficiency: 85 },
      { name: "C/C++", category: "language", proficiency: 80 },
      { name: "JavaScript", category: "language", proficiency: 85 },
      { name: "PHP", category: "language", proficiency: 75 },
      { name: "SQL", category: "language", proficiency: 85 },
      { name: "Assembly", category: "language", proficiency: 60 },
      // Web Development
      { name: "HTML5/CSS3", category: "web", proficiency: 95 },
      { name: "React", category: "web", proficiency: 80 },
      { name: "Spring Boot", category: "web", proficiency: 70 },
      { name: "Responsive Design", category: "web", proficiency: 90 },
      // Databases
      { name: "MySQL", category: "database", proficiency: 85 },
      { name: "MySQL Workbench", category: "database", proficiency: 80 },
      { name: "Database Design", category: "database", proficiency: 85 },
      // Software Engineering
      { name: "UML Diagrams", category: "software_engineering", proficiency: 90 },
      { name: "SDLC", category: "software_engineering", proficiency: 85 },
      { name: "Agile Methodologies", category: "software_engineering", proficiency: 85 },
      { name: "UI/UX Design (Figma, Canva)", category: "software_engineering", proficiency: 80 },
      // Tools
      { name: "Git", category: "tool", proficiency: 75 },
      { name: "MS Project", category: "tool", proficiency: 80 },
      { name: "Linux", category: "tool", proficiency: 70 }
    ]);

    await db.insert(education).values([
      {
        degree: "Bachelor of Software and Information Systems Technology and Engineering",
        institution: "University of Constantine 2 Abdelhamid Mehri, Algeria",
        period: "September 2023 – June 2026 (Expected)",
        description: "Currently in final year (Licence 3). Advanced Programming, Software Engineering, Data Structures, Web Development, Database Management, UI/UX Design, Project Management."
      },
      {
        degree: "Baccalaureate in Mathematics",
        institution: "Scientific Specialty",
        period: "June 2023",
        description: ""
      }
    ]);

    await db.insert(experience).values([
      {
        role: "Founder & Manager",
        company: "Private Educational Support Center",
        period: "2023 – Present",
        description: "Founded and manage an educational support center providing tutoring services for children and adults. Developed strong leadership, time management, planning, and communication skills."
      }
    ]);

    await db.insert(projects).values([
      {
        title: "E-Commerce Clothing Store",
        description: "Full functional online shopping platform with product catalog, cart, and checkout. Applied UI/UX principles and Agile management.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        techStack: ["React", "UI/UX", "Agile"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "/projects/clothing-store"
      },
      {
        title: "Desktop Application with Advanced GUI",
        description: "JavaFX application with sophisticated UI, concurrent programming, and software design patterns.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        techStack: ["Java", "JavaFX", "Design Patterns"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Tic-Tac-Toe Game",
        description: "Classic interactive game with a clean, modern interface.",
        imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
        techStack: ["React", "Game Logic"],
        link: "#",
        githubLink: "#",
        type: "game",
        liveDemo: "/games/tictactoe"
      },
      {
        title: "Pomodoro Focus Timer",
        description: "Passionate study tool with focus/break cycles and customizable intervals.",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        techStack: ["React", "Hooks"],
        link: "#",
        githubLink: "#",
        type: "tool",
        liveDemo: "/tools/pomodoro"
      },
      {
        title: "Bikini Bottom High Quiz",
        description: "Fun quiz game inspired by Bikini Bottom, testing your knowledge!",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        techStack: ["React", "Animations"],
        link: "#",
        githubLink: "#",
        type: "game",
        liveDemo: "/games/bikini-bottom"
      },
      {
        title: "Modern Calculator",
        description: "Sleek, responsive calculator with advanced mathematical operations.",
        imageUrl: "https://images.unsplash.com/photo-1587145820266-a5951ee6f677?w=800&q=80",
        techStack: ["React", "Math.js"],
        link: "#",
        githubLink: "#",
        type: "tool",
        liveDemo: "/tools/calculator"
      },
      {
        title: "ToDoList Manager",
        description: "Professional task management tool with persistence and categories.",
        imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        techStack: ["React", "LocalStorage"],
        link: "#",
        githubLink: "#",
        type: "tool",
        liveDemo: "/tools/todo"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
