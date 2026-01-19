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
      className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        
        {/* Floating Icons/Badges */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
           {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              >
                <Github size={18} />
              </a>
            )}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-cyan-500 backdrop-blur-md border border-white/10 flex items-center justify-center text-black hover:bg-white transition-all"
              >
                <ExternalLink size={18} />
              </a>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-0 relative z-20 -mt-10">
        <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl group-hover:border-cyan-500/20 transition-all">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-zinc-400 mb-6 line-clamp-2 font-medium leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 text-zinc-400 rounded-lg border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-300 transition-all"
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
