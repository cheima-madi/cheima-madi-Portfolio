import { Github, Linkedin, Heart, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-400 transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:cheima.madi@univ-constantine2.dz" className="text-muted-foreground hover:text-pink-400 transition-colors hover:scale-110 transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Made with ❤️ by Madi Cheima
        </p>
      </div>
    </footer>
  );
}
