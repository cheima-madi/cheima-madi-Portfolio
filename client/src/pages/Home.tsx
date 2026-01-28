import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useSkills, useProjects, useEducation } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, GraduationCap, Code2, Rocket, Brain, Trophy, Zap, MapPin, Phone } from "lucide-react";

import profile_jpg from "@assets/profile.jpg.png";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: education } = useEducation();

  const mimiPhoto = "/attached_assets/profile.jpg_1768927635725.png";
  const cvLink = "/assets/MADI_CHEIMA_CV.pdf";

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_60%)]" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-amber-600/10 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-orange-600/10 blur-[120px] rounded-full" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:text-left text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl flex-1 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-black mb-6 text-orange-400 tracking-[0.2em] uppercase shadow-2xl">
                <Rocket size={12} />
                <span>Passionate Software Engineering Student</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-300% animate-gradient">Madi Cheima</span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed font-light max-w-xl lg:mx-0 mx-auto">
                Passionate about <span className="text-white font-bold italic underline decoration-orange-400 decoration-4 underline-offset-8">coding and innovation</span>, I enjoy creating digital experiences that combine <span className="text-white">creativity</span> and <span className="text-white">logic</span>.
                <br />
                <span className="text-zinc-400 text-base md:text-lg font-medium italic">Always learning, always improving.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
                <a 
                  href={cvLink}
                  download
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border-2 border-white/10 text-white rounded-full font-black text-lg hover:bg-zinc-800 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-3 group shadow-2xl"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                  Get My CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative order-1 lg:order-2"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dashed border-amber-500/20 rounded-full scale-110"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dotted border-orange-500/20 rounded-full scale-[1.25]"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-20 h-20 bg-amber-500/20 blur-2xl rounded-full"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"
                />
              </div>

              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] relative group z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-amber-500/30 rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                
                {/* Layered Rings */}
                <div className="absolute inset-[-15px] border-2 border-amber-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-30px] border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/10 bg-zinc-900 shadow-[0_0_80px_rgba(245,158,11,0.3)]">
                  <img 
                    src={profile_jpg} 
                    alt="Madi Cheima" 
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 pt-[0px] pb-[0px] pl-[0px] pr-[0px]"
                  />
                </div>
                
                {/* Floating Tech Shapes */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 -right-4 w-12 h-12 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl"
                >
                  <Code2 size={24} className="text-amber-400" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-20 -left-6 w-14 h-14 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl"
                >
                  <Rocket size={24} className="text-orange-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <Section id="about" title="About Me" className="bg-[#050505]">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-5xl font-black flex items-center gap-6 text-white tracking-tighter">
                <Brain className="text-orange-500" size={56} />
                Driven by Passion
              </h3>
              <p className="text-2xl text-zinc-300 leading-relaxed font-light">
                I'm a highly motivated and ambitious <span className="text-white font-bold italic underline decoration-orange-400 decoration-4 underline-offset-8">Software Engineering student</span> with strong academic achievements. 
                I believe that <span className="text-orange-400 font-black">Artificial Intelligence</span> has the potential to transform education forever.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                I'm not just a student; I'm a <span className="text-white">problem solver</span> and a <span className="text-white">leader</span>. 
                As the founder of my own educational support center, I've learned that technology is best when it empowers people.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl font-black uppercase tracking-[0.4em] text-zinc-700 mb-12">Academic Journey</h3>
            {education?.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-14 border-l-4 border-zinc-800 py-8 group"
              >
                <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-zinc-950 border-4 border-zinc-800 rounded-full group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-500" />
                <div className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-[32px] border border-white/5 group-hover:border-white/10 transition-all duration-500 shadow-2xl">
                  <span className="text-orange-400 font-black text-xs tracking-[0.4em] uppercase mb-4 block">{item.period}</span>
                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-orange-400 transition-colors">{item.degree}</h4>
                  <p className="text-zinc-400 font-bold mb-6 text-sm">{item.institution}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed italic opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal" subtitle="Categorized mastery of modern software engineering" className="bg-[#050505]">
        <div className="space-y-24">
          {['language', 'web', 'software_engineering', 'tool'].map((category) => (
            <div key={category} className="space-y-12">
              <h4 className="text-sm font-black uppercase tracking-[0.6em] text-zinc-600 flex items-center gap-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                {category.replace('_', ' ')}s
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                {skills?.filter(s => s.category === category).map((skill, index) => (
                  <motion.div 
                    key={skill.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 sm:p-8 md:p-10 bg-zinc-900/60 backdrop-blur-xl rounded-[24px] sm:rounded-[32px] border border-white/5 hover:border-orange-500/40 transition-all text-center group relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="text-xl font-black text-white mb-6 uppercase tracking-widest transition-colors group-hover:text-orange-400">{skill.name}</div>
                      <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-200% animate-gradient" 
                        />
                      </div>
                      <div className="mt-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{skill.proficiency}% Expertise</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="A showcase of creativity, logic, and technical ability" className="bg-[#0a0a0a]">
        <div className="space-y-20">
          {/* Category: E-Commerce & Retail */}
          <div className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600 flex items-center gap-6">
              <div className="h-px w-12 bg-orange-500/50" />
              E-Commerce & Retail
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
              {projects?.filter(p => p.title.toLowerCase().includes('clothing') || p.title.toLowerCase().includes('luxe') || p.title.toLowerCase().includes('retail')).map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  index={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  techStack={project.techStack}
                  link={project.liveDemo as string | null}
                  githubLink={project.githubLink as string | null}
                />
              ))}
            </div>
          </div>

          {/* Category: Games & Interactive */}
          <div className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600 flex items-center gap-6">
              <div className="h-px w-12 bg-orange-500/50" />
              Games & Interactive
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
              {projects?.filter(p => !p.title.toLowerCase().includes('clothing') && !p.title.toLowerCase().includes('luxe') && !p.title.toLowerCase().includes('retail') && (p.title.toLowerCase().includes('drift') || p.title.toLowerCase().includes('spin') || p.title.toLowerCase().includes('pet') || p.title.toLowerCase().includes('tic-tac') || p.title.toLowerCase().includes('find'))).map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  index={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  techStack={project.techStack}
                  link={project.liveDemo as string | null}
                  githubLink={project.githubLink as string | null}
                />
              ))}
            </div>
          </div>

          {/* Category: Tools & Productivity */}
          <div className="space-y-10">
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-zinc-600 flex items-center gap-6">
              <div className="h-px w-12 bg-orange-500/50" />
              Tools & Productivity
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
              {projects?.filter(p => !p.title.toLowerCase().includes('clothing') && !p.title.toLowerCase().includes('luxe') && !p.title.toLowerCase().includes('retail') && !p.title.toLowerCase().includes('drift') && !p.title.toLowerCase().includes('spin') && !p.title.toLowerCase().includes('pet') && !p.title.toLowerCase().includes('tic-tac') && !p.title.toLowerCase().includes('find')).map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  index={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  techStack={project.techStack}
                  link={project.liveDemo as string | null}
                  githubLink={project.githubLink as string | null}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* Contact Section */}
      <Section id="contact" title="Reach Out" subtitle="Let's build your next digital revolution together" className="pb-0">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white tracking-tighter leading-tight">Ready to collaborate on something amazing?</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                I'm currently seeking internships and professional opportunities where I can apply my passion for <span className="text-white underline decoration-orange-500 underline-offset-8">innovation</span> and <span className="text-white underline decoration-orange-400 underline-offset-8">AI</span>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 p-6 bg-zinc-900/60 rounded-[24px] border border-white/5 group hover:border-orange-500/40 transition-all shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Email</p>
                    <a href="mailto:cheima.madi@univ-constantine2.dz" className="text-white font-black hover:text-orange-400 transition-colors break-all text-xs tracking-tight">cheima.madi@univ-constantine2.dz</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-zinc-900/60 rounded-[24px] border border-white/5 group hover:border-orange-500/40 transition-all shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Phone</p>
                    <p className="text-white font-black text-sm">+213 776 404 617</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-zinc-900/60 rounded-[24px] border border-white/5 group hover:border-orange-500/40 transition-all shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="text-white font-black text-sm">Constantine, Algeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="p-8 md:p-12 bg-zinc-900/40 backdrop-blur-2xl rounded-[48px] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 p-8 opacity-5">
                  <Rocket size={300} />
               </div>
               <ContactForm />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
