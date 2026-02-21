export const portfolioData = {
    skills: [
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
    ],
    education: [
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
    ],
    projects: [
        {
            id: 1,
            title: "Aura Luxe – Premium Beauty & Skincare",
            description: "Luxury e-commerce experience for high-end skincare products with elegant visual design.",
            imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
            techStack: ["React", "Tailwind CSS", "Framer Motion"],
            liveDemo: "https://cheima-madi.github.io/aura-luxe-beauty-andskincare/",
            githubLink: "https://github.com/cheima-madi/aura-luxe-beauty-andskincare"
        },
        {
            id: 2,
            title: "Lumina Gradient Studio",
            description: "A professional tool for designers to create and export stunning CSS gradients effortlessly.",
            imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
            techStack: ["TypeScript", "React", "CSS Engine"],
            liveDemo: "https://cheima-madi.github.io/lumina-gradient-studio/",
            githubLink: "https://github.com/cheima-madi/lumina-gradient-studio"
        },
        {
            id: 3,
            title: "Evopet – Idle Evolution",
            description: "Charming idle game where players evolve unique digital creatures through multiple stages.",
            imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
            techStack: ["React", "Game Logic", "State Management"],
            liveDemo: "https://cheima-madi.github.io/evopet-idle-evolution/",
            githubLink: "https://github.com/cheima-madi/evopet-idle-evolution"
        },
        {
            id: 4,
            title: "Purr-fect Moods",
            description: "Adorable mood tracking application with cat-themed illustrations and personalized insights.",
            imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
            techStack: ["React Native", "Firebase", "Illustration"],
            liveDemo: "https://cheima-madi.github.io/purr-fect-moods/",
            githubLink: "https://github.com/cheima-madi/purr-fect-moods"
        },
        {
            id: 5,
            title: "Cozy Habit Garden",
            description: "Productivity meets relaxation in this habit tracker where habits grow your virtual garden.",
            imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
            techStack: ["React", "D3.js", "Local Storage"],
            liveDemo: "https://cheima-madi.github.io/Cozy-Habit-Garden/",
            githubLink: "https://github.com/cheima-madi/Cozy-Habit-Garden"
        },
        {
            id: 6,
            title: "SuccessCorner Management System",
            description: "Comprehensive enterprise-grade management dashboard for business operations and analytics.",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
            techStack: ["PostgreSQL", "Express", "React", "Node.js"],
            liveDemo: "https://cheima-madi.github.io/successcorner-management-system/",
            githubLink: "https://github.com/cheima-madi/successcorner-management-system"
        },
        {
            id: 7,
            title: "Neon Mind Tic-Tac-Toe",
            description: "A futuristic take on the classic game with glowing neon visuals and smart AI opponents.",
            imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
            techStack: ["JavaScript", "Animations", "AI Logic"],
            liveDemo: "https://cheima-madi.github.io/neon-mind-tic-tac-toe/",
            githubLink: "https://github.com/cheima-madi/neon-mind-tic-tac-toe"
        },
        {
            id: 8,
            title: "FocusFlow Pomodoro Pro",
            description: "Enhanced productivity timer designed for deep work sessions with customizable flows.",
            imageUrl: "https://images.unsplash.com/photo-1493934558415-9ca19e0b39fa?q=80&w=1200&auto=format&fit=crop",
            techStack: ["TypeScript", "Audio API", "Productivity Tech"],
            liveDemo: "https://cheima-madi.github.io/focusflow-pomodoro-pro/",
            githubLink: "https://github.com/cheima-madi/focusflow-pomodoro-pro"
        },
        {
            id: 9,
            title: "Flip & Find",
            description: "Polished memory matching game with vibrant themes and progressive difficulty levels.",
            imageUrl: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1200&auto=format&fit=crop",
            techStack: ["JavaScript", "Game Logic", "CSS Grid"],
            liveDemo: "https://cheima-madi.github.io/flip-find-/",
            githubLink: "https://github.com/cheima-madi/flip-find-"
        },
        {
            id: 10,
            title: "AR Smart Retail – Visionary Furniture",
            description: "Augmented Reality application allowing users to visualize furniture in their space before buying.",
            imageUrl: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1200&auto=format&fit=crop",
            techStack: ["AR.js", "Three.js", "Mobile Web"],
            liveDemo: "https://cheima-madi.github.io/visionary-furniture/",
            githubLink: "https://github.com/cheima-madi/visionary-furniture"
        }
    ],
    experience: [
        {
            role: "Founder & Manager",
            company: "Private Educational Support Center",
            period: "2023 – Present",
            description: "Coordinated curriculum, managed administrative operations, and supervised teaching staff. Inspired by technology to create personalized learning tools."
        }
    ]
};
