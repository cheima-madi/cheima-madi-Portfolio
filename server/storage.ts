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
    await db.delete(skills);
    await db.delete(projects);
    await db.delete(education);
    await db.delete(experience);

    await db.insert(skills).values([
      // Languages
      { name: "Java", category: "language", proficiency: 95 },
      { name: "Python", category: "language", proficiency: 90 },
      { name: "C / C++", category: "language", proficiency: 85 },
      { name: "JavaScript", category: "language", proficiency: 90 },
      { name: "PHP", category: "language", proficiency: 80 },
      { name: "SQL", category: "language", proficiency: 90 },
      { name: "C#", category: "language", proficiency: 75 },
      { name: "TypeScript", category: "language", proficiency: 85 },
      
      // Core CS & Logic
      { name: "Algorithms", category: "software_engineering", proficiency: 95 },
      { name: "Data Structures", category: "software_engineering", proficiency: 95 },
      { name: "OOP Principles", category: "software_engineering", proficiency: 95 },
      { name: "Problem Solving", category: "software_engineering", proficiency: 95 },
      { name: "Mathematical Logic", category: "software_engineering", proficiency: 90 },
      { name: "System Design", category: "software_engineering", proficiency: 85 },
      { name: "Design Patterns", category: "software_engineering", proficiency: 88 },
      
      // Web & Frontend
      { name: "React", category: "web", proficiency: 90 },
      { name: "Spring Boot", category: "web", proficiency: 85 },
      { name: "HTML5/CSS3", category: "web", proficiency: 95 },
      { name: "Next.js", category: "web", proficiency: 80 },
      { name: "Node.js", category: "web", proficiency: 85 },
      { name: "Express.js", category: "web", proficiency: 88 },
      { name: "RESTful APIs", category: "web", proficiency: 92 },
      { name: "Responsive Design", category: "web", proficiency: 95 },
      
      // Engineering & Tools
      { name: "Git & GitHub", category: "tool", proficiency: 95 },
      { name: "PostgreSQL", category: "tool", proficiency: 90 },
      { name: "Docker", category: "tool", proficiency: 80 },
      { name: "Linux / Bash", category: "tool", proficiency: 85 },
      { name: "UML Design", category: "tool", proficiency: 95 },
      { name: "VS Code", category: "tool", proficiency: 98 },
      { name: "IntelliJ IDEA", category: "tool", proficiency: 92 },
      { name: "Agile / Scrum", category: "tool", proficiency: 90 },
      { name: "Postman", category: "tool", proficiency: 95 }
    ]);

    await db.insert(education).values([
      {
        degree: "License 3 – Software Engineering",
        institution: "University of Constantine 2 Abdelhamid Mehri",
        period: "2024 – 2025",
        description: "Currently focusing on Advanced Web Development, Concurrent Programming, and Software Quality Systems. Ranked top of cohort."
      },
      {
        degree: "License 2 – Computer Science",
        institution: "University of Constantine 2 Abdelhamid Mehri",
        period: "2023 – 2024",
        description: "Core modules in Algorithms, OOP, and Database Design."
      },
      {
        degree: "License 1 – New Technology",
        institution: "University of Constantine 2 Abdelhamid Mehri",
        period: "2022 – 2023",
        description: "Foundation in Computer Architecture, Mathematics, and Logic."
      },
      {
        degree: "Baccalaureate (Mathematics Specialty)",
        institution: "Constantine, Algeria",
        period: "2022",
        description: "Obtained with distinction."
      }
    ]);

    await db.insert(experience).values([
      {
        role: "Founder & Manager",
        company: "Private Educational Support Center",
        period: "2023 – Present",
        description: "Coordinated curriculum, managed administrative operations, and supervised teaching staff. Inspired by AI to create personalized learning tools."
      }
    ]);

    await db.insert(projects).values([
      {
        title: "E-Commerce Clothing Store",
        description: "Fully functional online platform with catalog, cart, and checkout. Built using React and Spring Boot.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        techStack: ["React", "Spring Boot", "MySQL", "UI/UX"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Advanced JavaFX Desktop App",
        description: "Desktop application with sophisticated GUI, concurrent programming, and software design patterns.",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        techStack: ["Java", "JavaFX", "Concurrent Programming"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Nebula Text Analyzer",
        description: "Web-based analysis tool for statistics, reading time, and character counting.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        techStack: ["JavaScript", "HTML", "CSS"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Tic-Tac-Toe Game",
        description: "Interactive game with modern pink-themed design and smooth animations.",
        imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
        techStack: ["JavaScript", "HTML", "CSS"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Bikini Bottom Dash",
        description: "SpongeBob-themed runner game with engaging mechanics and underwater graphics.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        techStack: ["JavaScript", "HTML5 Canvas"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Pomodoro Focus Timer",
        description: "Productivity app with task management and customizable study sessions.",
        imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
        techStack: ["JavaScript", "HTML", "CSS"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Modern Multi-OS Calculator",
        description: "Feature-rich calculator supporting advanced mathematical operations.",
        imageUrl: "https://images.unsplash.com/photo-1587145820266-a5951ee6f677?w=800&q=80",
        techStack: ["JavaScript", "HTML", "CSS"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
