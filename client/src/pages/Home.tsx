import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useSkills, useProjects, useEducation } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, GraduationCap, Code2, Rocket, Brain, Trophy, Zap, Heart, CheckCircle2, MapPin, Phone } from "lucide-react";

export default function Home() {
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: education } = useEducation();

  const mimiPhoto = "/assets/madi_cheima.png";
  const cvLink = "/assets/MADI_CHEIMA_CV.pdf";

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-zinc-900 shadow-2xl">
                <img 
                  src={mimiPhoto} 
                  alt="Madi Cheima" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-[#050505] shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold mb-8 text-cyan-400 tracking-[0.2em] uppercase">
              <Rocket size={16} />
              <span>Mimi Dev • Software Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-300% animate-gradient">Madi Cheima</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-zinc-400 mb-12 leading-relaxed font-light">
              Highly motivated <span className="text-white font-medium">Computer Science Student</span>. 
              Specializing in <span className="text-white italic">Full-stack Development</span> and <span className="text-white">AI Technologies</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <a 
                href={cvLink}
                download
                className="px-10 py-5 bg-zinc-900 border-2 border-white/10 text-white rounded-full font-bold text-xl hover:bg-zinc-800 hover:border-white/30 transition-all duration-300 flex items-center gap-3 group"
              >
                <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-black">Explore</span>
          <ArrowDown size={20} className="text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-[#0a0a0a]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-4xl font-black flex items-center gap-4">
                <Brain className="text-purple-400" size={40} />
                Student & Creative
              </h3>
              <p className="text-2xl text-zinc-300 leading-relaxed font-light">
                Passionate about applying innovative technologies to solve real-world problems. Currently a <span className="text-cyan-400 font-bold underline decoration-2 underline-offset-4">Top Student</span> in my cohort, focusing on Software Engineering at Constantine 2.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                My journey is defined by constant learning and building. Whether it's complex UML architectures or sleek React interfaces, I strive for excellence in every line of code.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all group shadow-xl">
                <Trophy className="text-purple-400 mb-4 group-hover:scale-125 transition-transform" size={48} />
                <div className="text-3xl font-black text-white mb-2">9th / 393</div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest leading-tight">Current Academic Rank</p>
              </div>
              <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group shadow-xl mt-12">
                <Zap className="text-cyan-400 mb-4 group-hover:scale-125 transition-transform" size={48} />
                <div className="text-3xl font-black text-white mb-2">L3 GL</div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest leading-tight">Software Engineering</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-widest text-zinc-600 mb-8">Academic Journey</h3>
            {education?.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12 border-l-4 border-zinc-800 py-6 group"
              >
                <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-zinc-900 border-4 border-zinc-800 rounded-full group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all" />
                <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all">
                  <span className="text-cyan-400 font-black text-xs tracking-[0.3em] uppercase mb-2 block">{item.period}</span>
                  <h4 className="text-2xl font-black text-white mb-2">{item.degree}</h4>
                  <p className="text-zinc-400 font-bold mb-4">{item.institution}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.description || "Excelling in core computer science modules including Data Structures, Algorithms, and Software Design."}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects" subtitle="Working applications built with modern stacks" className="bg-[#050505]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects?.map((project, index) => (
            <ProjectCard 
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              link={project.liveDemo || project.link}
              githubLink={project.githubLink === '#' ? undefined : project.githubLink}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal" subtitle="Tools and languages I've mastered" className="bg-[#0a0a0a]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills?.map((skill, index) => (
            <motion.div 
              key={skill.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-8 bg-zinc-900/80 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="text-lg font-black text-white mb-4 uppercase tracking-widest">{skill.name}</div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-200% animate-gradient" 
                  />
                </div>
                <div className="mt-2 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">{skill.proficiency}% Mastery</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Hire Me" subtitle="Available for internships, freelance, and junior roles">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white">Let's build your next big idea together</h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a specific project in mind or just want to discuss tech, I'm just a message away!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 group hover:border-cyan-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                    <a href="mailto:cheima.madi@univ-constantine2.dz" className="text-white font-bold hover:text-cyan-400 transition-colors break-all">cheima.madi@univ-constantine2.dz</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 group hover:border-purple-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white font-bold">+213 776 404 617</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-3xl border border-white/5 group hover:border-pink-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-bold">Constantine, Algeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="p-10 bg-zinc-900/50 backdrop-blur-xl rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Mail size={200} />
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
