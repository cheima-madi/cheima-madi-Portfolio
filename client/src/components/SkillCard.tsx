import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  category: string;
  proficiency: number;
  index: number;
}

export function SkillCard({ name, category, proficiency, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-card/40 border border-white/5 rounded-2xl p-6 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
          <span className="text-xs uppercase tracking-wider text-muted-foreground bg-white/5 px-2 py-1 rounded mt-2 inline-block">
            {category}
          </span>
        </div>
        <span className="text-2xl font-bold text-white/10 group-hover:text-primary/20 transition-colors">
          {proficiency}%
        </span>
      </div>
      
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-purple-400"
        />
      </div>
    </motion.div>
  );
}
