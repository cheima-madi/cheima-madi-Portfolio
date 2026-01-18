import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useSkills, useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6 text-primary tracking-wide">
              FULLSTACK DEVELOPER
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-display tracking-tighter mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">Digital</span>
              <br /> Experiences.
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm <span className="text-foreground font-semibold">MimiDev</span>. I craft accessible, pixel-perfect, and performant web applications with a focus on modern aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-muted-foreground w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello! My name is Mimi, and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was fun!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building software for diverse clients. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              When I'm not at the computer, I'm usually hanging out with my cat, reading, or running around Hyrule searching for Korok seeds.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            {/* Using a placeholder image from Unsplash for the profile */}
            {/* coding setup minimal dark */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square">
               <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop" 
                alt="Coding Setup" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Tech Stack" subtitle="The tools I use to bring ideas to life">
        {skillsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-card/50 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.map((skill, index) => (
              <SkillCard 
                key={skill.id}
                index={index}
                name={skill.name}
                category={skill.category}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="A collection of my recent work">
        {projectsLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
             {[1, 2].map(i => (
              <div key={i} className="h-96 bg-card/50 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects?.map((project, index) => (
              <ProjectCard 
                key={project.id}
                index={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
                link={project.link}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Have a project in mind? Let's talk.">
        <ContactForm />
      </Section>

      <Footer />
    </div>
  );
}
