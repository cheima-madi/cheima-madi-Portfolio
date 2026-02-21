import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
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
      const offset = 100;
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
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled
        ? "bg-black/40 backdrop-blur-2xl border-b border-white/5 py-3"
        : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-3xl font-black tracking-tighter hover:scale-105 transition-transform group"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center text-white shadow-2xl shadow-red-900/20 group-hover:rotate-12 transition-transform">
            <Terminal size={28} />
          </div>
          <span className="text-white">cheima<span className="text-red-500">.dev</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.3em] relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 rounded-full bg-white text-black hover:bg-red-600 hover:scale-110 transition-all duration-500 font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-white/5"
          >
            Reach Out
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-3 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-[88px] bg-black/95 backdrop-blur-3xl md:hidden z-[90] p-12"
          >
            <div className="flex flex-col gap-10 items-center text-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-4xl font-black text-white hover:text-red-500 transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </button>
              ))}
              <div className="w-24 h-1 bg-white/10 rounded-full" />
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full py-6 rounded-full bg-red-700 text-black font-black text-xl uppercase tracking-widest"
              >
                Reach Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
