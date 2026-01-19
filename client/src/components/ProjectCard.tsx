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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-zinc-900 rounded-[40px] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-700 shadow-2xl"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent z-10" />
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        
        {/* Floating Action Button */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <a 
            href={link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 bg-cyan-500 text-black rounded-full font-black text-lg shadow-2xl shadow-cyan-500/40 hover:scale-110 active:scale-95 transition-all flex items-center gap-3"
          >
            Live Demo
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 pt-0 relative z-20 -mt-12">
        <div className="bg-zinc-800/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] shadow-2xl group-hover:border-cyan-500/20 transition-all">
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all"
              >
                <Github size={20} />
              </a>
            )}
          </div>
          
          <p className="text-zinc-400 mb-8 font-medium leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-black/30 text-cyan-400 rounded-full border border-cyan-500/20"
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
