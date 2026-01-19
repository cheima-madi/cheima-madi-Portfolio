import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Code2, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Lab", href: "#lab" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-2xl font-bold tracking-tighter hover:scale-105 transition-transform group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="text-white">mimi<span className="text-cyan-400">dev</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
             <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2.5 rounded-full bg-cyan-500 text-black hover:bg-white hover:scale-105 transition-all duration-300 font-bold text-xs uppercase tracking-widest"
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl md:hidden z-[90]"
          >
            <div className="container px-6 py-12 flex flex-col gap-8 items-center text-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </button>
              ))}
              <div className="w-full h-px bg-white/10 my-4" />
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"><Github size={20}/></a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"><Linkedin size={20}/></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
