import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useSkills, useProjects, useEducation } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, GraduationCap, Code2, Rocket, Brain, Trophy, Zap, Clock, ListTodo, HelpCircle, Calculator as CalcIcon, Heart, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// --- Lab Components ---

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i: number) {
    if (winner || board[i]) return;
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? "X" : "O";
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all">
      <div className="grid grid-cols-3 gap-2">
        {board.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center text-2xl font-bold text-white hover:bg-zinc-700 transition-colors shadow-inner"
          >
            <span className={val === 'X' ? 'text-cyan-400' : 'text-purple-400'}>{val}</span>
          </button>
        ))}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-cyan-400 animate-pulse">
        {winner ? `Winner: ${winner}` : `Next: ${isXNext ? "X" : "O"}`}
      </div>
      <Button onClick={reset} variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">Reset Game</Button>
    </div>
  );
}

function calculateWinner(squares: any[]) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
          } else {
            setMinutes(m => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(s => s - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all">
      <div className="text-5xl font-mono font-bold text-white tracking-tighter shadow-cyan-500/20 drop-shadow-lg">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-2 w-full">
        <Button onClick={() => setIsActive(!isActive)} className="flex-1 bg-cyan-500 text-black font-bold hover:bg-white transition-all shadow-lg shadow-cyan-500/20">
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button onClick={() => { setIsActive(false); setMinutes(25); setSeconds(0); }} variant="outline" className="border-white/10">Reset</Button>
      </div>
      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Focus Mode</span>
    </div>
  );
}

function Calculator() {
  const [val, setVal] = useState("");
  const ops = ["/", "*", "+", "-", "."];
  
  const update = (v: string) => {
    if (ops.includes(v) && (val === "" || ops.includes(val.slice(-1)))) return;
    setVal(val + v);
  };

  const calculate = () => {
    try {
      setVal(eval(val).toString());
    } catch {
      setVal("Error");
    }
  };
  const clear = () => setVal("");

  return (
    <div className="p-4 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 w-full hover:border-cyan-500/20 transition-all">
      <div className="bg-black/40 p-4 rounded-lg mb-4 text-right text-2xl font-mono text-cyan-400 overflow-hidden min-h-[64px] flex items-center justify-end shadow-inner">{val || "0"}</div>
      <div className="grid grid-cols-4 gap-2">
        {["7","8","9","/"].map(v => <Button key={v} onClick={() => update(v)} variant="secondary" size="sm" className="bg-zinc-800/50 border-white/5 hover:bg-zinc-700">{v}</Button>)}
        {["4","5","6","*"].map(v => <Button key={v} onClick={() => update(v)} variant="secondary" size="sm" className="bg-zinc-800/50 border-white/5 hover:bg-zinc-700">{v}</Button>)}
        {["1","2","3","+"].map(v => <Button key={v} onClick={() => update(v)} variant="secondary" size="sm" className="bg-zinc-800/50 border-white/5 hover:bg-zinc-700">{v}</Button>)}
        <Button onClick={clear} variant="destructive" size="sm" className="bg-red-500/20 border-red-500/20 hover:bg-red-500/40 text-red-500">C</Button>
        <Button onClick={() => update("0")} variant="secondary" size="sm" className="bg-zinc-800/50 border-white/5">0</Button>
        <Button onClick={calculate} className="col-span-2 bg-cyan-500 text-black font-bold">=</Button>
      </div>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState<{id: number, text: string, completed: boolean}[]>(() => {
    const saved = localStorage.getItem('mimi_todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem('mimi_todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all w-full">
      <div className="flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="New task..."
          className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 text-sm text-white focus:outline-none focus:border-cyan-500/50"
        />
        <Button onClick={addTodo} size="sm" className="bg-cyan-500 text-black">+</Button>
      </div>
      <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg group">
            <button onClick={() => toggleTodo(todo.id)} className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${todo.completed ? 'bg-cyan-500 border-cyan-500' : 'border-white/20'}`}>
              {todo.completed && <CheckCircle2 size={10} className="text-black" />}
            </button>
            <span className={`text-sm flex-1 ${todo.completed ? 'text-zinc-500 line-through' : 'text-zinc-300'}`}>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BikiniQuiz() {
  const questions = [
    { q: "Who lives in a pineapple under the sea?", a: "SpongeBob" },
    { q: "What color is Patrick Star?", a: "Pink" },
    { q: "Where does Sandy Cheeks come from?", a: "Texas" }
  ];
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAns = (ans: string) => {
    if (ans === questions[idx].a) setScore(score + 1);
    if (idx + 1 < questions.length) setIdx(idx + 1);
    else setShowScore(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-all w-full min-h-[220px] justify-center text-center">
      {!showScore ? (
        <>
          <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">Question {idx + 1}</p>
          <p className="text-lg font-bold text-white mb-4">{questions[idx].q}</p>
          <div className="grid grid-cols-2 gap-2 w-full">
            {idx === 0 ? ["SpongeBob", "Patrick"].map(o => <Button key={o} onClick={() => handleAns(o)} variant="outline" size="sm">{o}</Button>) :
             idx === 1 ? ["Blue", "Pink"].map(o => <Button key={o} onClick={() => handleAns(o)} variant="outline" size="sm">{o}</Button>) :
             ["Texas", "Alaska"].map(o => <Button key={o} onClick={() => handleAns(o)} variant="outline" size="sm">{o}</Button>)}
          </div>
        </>
      ) : (
        <>
          <Trophy className="text-yellow-500 animate-bounce" size={40} />
          <p className="text-xl font-bold text-white">Quiz Completed!</p>
          <p className="text-cyan-400 font-bold">Score: {score}/{questions.length}</p>
          <Button onClick={() => { setIdx(0); setScore(0); setShowScore(false); }} variant="outline" size="sm">Try Again</Button>
        </>
      )}
    </div>
  );
}

// --- Main Page ---

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          
          {/* Decorative Code */}
          <div className="absolute top-1/4 right-[5%] opacity-5 font-mono text-xs hidden lg:block select-none leading-relaxed">
            {"class MimiDev {"}<br/>
            {"  constructor() {"}<br/>
            {"    this.passion = 'AI & SE';"}<br/>
            {"    this.vibe = 'Energetic';"}<br/>
            {"  }"}<br/>
            {"}"}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium mb-6 text-cyan-400 tracking-wider uppercase">
                <Rocket size={16} />
                <span>Mimi Dev • Creating with Passion</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-[0.9]">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-300% animate-gradient">Madi</span>
                <br /> 
                <span className="text-white">Cheima.</span>
              </h1>
              <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed font-light">
                Engineering <span className="text-white font-medium italic">vibrant</span> software experiences. Student at Constantine 2 University, focused on AI and education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => document.getElementById('lab')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                >
                  <span className="relative z-10">Enter The Lab</span>
                  <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <a 
                  href={cvLink}
                  download
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-3xl blur-[80px] opacity-20 animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-zinc-900 group shadow-2xl">
                  <img 
                    src={mimiPhoto} 
                    alt="Madi Cheima" 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex items-center gap-2">
                       <Heart size={16} className="text-pink-500 fill-pink-500" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-white">Livable Creative</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="The Journey" className="bg-[#0a0a0a]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold flex items-center gap-3">
                <Brain className="text-purple-400" />
                Student & Entrepreneur
              </h3>
              <p className="text-xl text-zinc-400 leading-relaxed font-light italic">
                "I believe code is a language of expression."
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Currently finishing my 3rd year at the Faculty of Software & Information Systems (Constantine 2). I bridge the gap between rigorous engineering and creative problem solving. In 2023, I launched my own educational center to empower others through knowledge.
              </p>
            </div>
            
            <div className="space-y-6">
              {education?.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l border-zinc-800 py-2 group">
                  <div className="absolute left-[-5px] top-4 w-[9px] h-[9px] bg-zinc-700 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />
                  <span className="text-cyan-400/60 group-hover:text-cyan-400 font-bold text-[10px] tracking-widest uppercase transition-colors">{item.period}</span>
                  <h4 className="text-lg font-bold mt-1 text-white">{item.degree}</h4>
                  <p className="text-zinc-500 text-sm">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group flex flex-col justify-between aspect-square">
              <Trophy className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <div className="text-3xl font-bold text-white mb-1">Founder</div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest leading-tight">Educational Support Center</p>
              </div>
            </div>
            <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group flex flex-col justify-between aspect-square mt-8">
              <Zap className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <div>
                <div className="text-3xl font-bold text-white mb-1">3rd Year</div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest leading-tight">University Constantine 2</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lab Section */}
      <Section id="lab" title="The Mimi Lab" subtitle="Where theory meets interactive experimentation" className="bg-[#050505]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <Clock size={14} className="text-cyan-400" /> Focus Timer
            </h4>
            <Pomodoro />
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <CalcIcon size={14} className="text-purple-400" /> Mathematics
            </h4>
            <Calculator />
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <Code2 size={14} className="text-pink-400" /> Game Engine
            </h4>
            <TicTacToe />
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <ListTodo size={14} className="text-green-400" /> Task Manager
            </h4>
            <TodoList />
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <HelpCircle size={14} className="text-orange-400" /> Knowledge Quiz
            </h4>
            <BikiniQuiz />
          </div>
          <div className="p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/10 flex flex-col items-center justify-center text-center group hover:bg-cyan-500/10 transition-all">
            <Rocket className="text-cyan-400 mb-4 group-hover:rotate-45 transition-transform" size={40} />
            <h4 className="text-white font-bold mb-2">More Labs Coming</h4>
            <p className="text-xs text-zinc-500 italic">Exploring AI and Cloud integrations next.</p>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section id="projects" title="Portfolio" subtitle="End-to-end applications and research projects" className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects?.filter(p => p.type === 'project').map((project, index) => (
            <ProjectCard 
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              techStack={project.techStack}
              link={project.link === '#' ? undefined : project.link}
              githubLink={project.githubLink === '#' ? undefined : project.githubLink}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Tech Stack" subtitle="Broad range of engineering tools">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills?.map((skill, index) => (
            <motion.div 
              key={skill.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-4 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all text-center group"
            >
              <div className="text-xs font-bold text-zinc-400 group-hover:text-white mb-2 transition-colors uppercase tracking-widest">{skill.name}</div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Open for global opportunities and local collaborations">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 flex items-center gap-4 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</p>
                <a href="mailto:cheima.madi@univ-constantine2.dz" className="text-sm text-zinc-300 hover:text-white transition-colors break-all">cheima.madi@univ-constantine2.dz</a>
              </div>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 flex items-center gap-4 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Rocket size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Phone</p>
                <p className="text-sm text-zinc-300 font-medium">+213 776 404 617</p>
              </div>
            </div>
            <div className="p-6 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 flex items-center gap-4 hover:border-pink-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Location</p>
                <p className="text-sm text-zinc-300 font-medium">Constantine, Algeria</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Availability</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-zinc-400 font-medium">Available for freelance & internships</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
