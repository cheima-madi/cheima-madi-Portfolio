import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string | null;
  githubLink: string | null;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  techStack, 
  link, 
  githubLink,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Image Container */}
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        />
      </div>

      {/* Content */}
      <div className="p-8 relative z-20 -mt-20">
        <div className="bg-card/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex gap-3">
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <Github size={20} />
                </a>
              )}
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6 line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
