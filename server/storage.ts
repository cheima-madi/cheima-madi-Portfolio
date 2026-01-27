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
        period: "2025 – 2026",
        description: "Focusing on Software Architecture, Distributed Systems, and Advanced Engineering. Ranked top of cohort."
      },
      {
        degree: "License 2 – Computer Science",
        institution: "University of Constantine 2 Abdelhamid Mehri",
        period: "2024 – 2025",
        description: "Specialized in Object-Oriented Design, Database Systems, and Algorithms."
      },
      {
        degree: "License 1 – New Technology",
        institution: "University of Constantine 2 Abdelhamid Mehri",
        period: "2023 – 2024",
        description: "Foundation in Programming Logic, Computer Systems, and Mathematics."
      },
      {
        degree: "Baccalaureate (Mathematics Specialty)",
        institution: "Constantine, Algeria",
        period: "2023",
        description: "Obtained with distinction in Mathematics."
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
        title: "Aura Luxe – Premium Beauty & Skincare",
        description: "Luxury e-commerce experience for high-end skincare products with elegant visual design.",
        imageUrl: "/attached_assets/aura-luxe.png",
        techStack: ["React", "Tailwind CSS", "Framer Motion"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Neon Drift Pro",
        description: "High-octane synthwave racing game featuring futuristic neon aesthetics and smooth mechanics.",
        imageUrl: "/attached_assets/neon-drift-pro.png",
        techStack: ["JavaScript", "HTML5 Canvas", "Game Design"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Lumina Gradient Studio",
        description: "A professional tool for designers to create and export stunning CSS gradients effortlessly.",
        imageUrl: "/attached_assets/lumina-gradient-studio.png",
        techStack: ["TypeScript", "React", "CSS Engine"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Lucky Spin Wheel Pro",
        description: "Interactive engagement tool with high-quality 3D animations and particle effects.",
        imageUrl: "/attached_assets/lucky-spin-wheel-pro.png",
        techStack: ["JavaScript", "CSS3 Animations", "UI/UX"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Evopet – Idle Evolution",
        description: "Charming idle game where players evolve unique digital creatures through multiple stages.",
        imageUrl: "/attached_assets/evopet-idle-evolution.png",
        techStack: ["React", "Game Logic", "State Management"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Purr-fect Moods",
        description: "Adorable mood tracking application with cat-themed illustrations and personalized insights.",
        imageUrl: "/attached_assets/purr-fect-moods.png",
        techStack: ["React Native", "Firebase", "Illustration"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Cozy Habit Garden",
        description: "Productivity meets relaxation in this habit tracker where habits grow your virtual garden.",
        imageUrl: "/attached_assets/cozy-habit-garden.png",
        techStack: ["React", "D3.js", "Local Storage"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Skycast Mini",
        description: "Sleek and lightweight weather application providing real-time updates with a minimalist UI.",
        imageUrl: "/attached_assets/skycast-mini.png",
        techStack: ["Weather API", "JavaScript", "Responsive Design"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "SuccessCorner Management System",
        description: "Comprehensive enterprise-grade management dashboard for business operations and analytics.",
        imageUrl: "/attached_assets/successcorner.png",
        techStack: ["PostgreSQL", "Express", "React", "Node.js"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Neon Mind Tic-Tac-Toe",
        description: "A futuristic take on the classic game with glowing neon visuals and smart AI opponents.",
        imageUrl: "/attached_assets/neon-mind-tic-tac-toe.png",
        techStack: ["JavaScript", "Animations", "AI Logic"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "FocusFlow Pomodoro Pro",
        description: "Enhanced productivity timer designed for deep work sessions with customizable flows.",
        imageUrl: "/attached_assets/focusflow-pomodoro.png",
        techStack: ["TypeScript", "Audio API", "Productivity Tech"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "Flip & Find",
        description: "Polished memory matching game with vibrant themes and progressive difficulty levels.",
        imageUrl: "/attached_assets/flip-find.png",
        techStack: ["JavaScript", "Game Logic", "CSS Grid"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      },
      {
        title: "AR Smart Retail – Visionary Furniture",
        description: "Augmented Reality application allowing users to visualize furniture in their space before buying.",
        imageUrl: "/attached_assets/ar-smart-retail.png",
        techStack: ["AR.js", "Three.js", "Mobile Web"],
        link: "#",
        githubLink: "#",
        type: "project",
        liveDemo: "#"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
