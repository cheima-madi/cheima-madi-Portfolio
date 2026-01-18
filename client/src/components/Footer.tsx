import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} MimiDev. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
