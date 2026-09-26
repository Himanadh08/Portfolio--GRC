import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Shield, Code, Terminal, Scale, BrainCircuit, Flag, Globe2 } from 'lucide-react';
import { skills } from '../data';

const CATEGORY_ICONS: Record<string, ReactNode> = {
  'GRC Frameworks': <Scale className="w-5 h-5" />,
  'AI Governance': <BrainCircuit className="w-5 h-5" />,
  'India Regulations': <Flag className="w-5 h-5" />,
  'EU / Global Regulations': <Globe2 className="w-5 h-5" />,
  Cybersecurity: <Shield className="w-5 h-5" />,
  Technical: <Code className="w-5 h-5" />,
  Cloud: <BrainCircuit className="w-5 h-5" />,
  Tools: <Terminal className="w-5 h-5" />,
};

const BORDER_COLORS = [
  'var(--color-neon-pink)',
  'var(--color-neon-cyan)',
  'var(--color-neon-yellow)',
  'var(--color-neon-purple)',
  'var(--color-neon-green)',
];

const GLOW_RGBA: Record<string, string> = {
  'var(--color-neon-pink)': 'rgba(255,0,60,0.3)',
  'var(--color-neon-cyan)': 'rgba(0,240,255,0.3)',
  'var(--color-neon-yellow)': 'rgba(252,238,10,0.3)',
  'var(--color-neon-purple)': 'rgba(176,38,255,0.3)',
  'var(--color-neon-green)': 'rgba(0,255,65,0.3)',
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-4 border-dashed border-[var(--color-outline)]">

      {/* ORIGINAL: Glitch textual background */}
      <div className="absolute left-[-5%] top-[50%] -translate-y-1/2 font-display font-black text-[15vw] text-white opacity-[0.03] select-none pointer-events-none rotate-90 md:rotate-0 tracking-tighter">
        ARSENAL
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-cyan)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
            WEAPONRY LOADOUT
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            <span className="text-[var(--color-neon-cyan)]">SKILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, i) => {
            const color = BORDER_COLORS[i % BORDER_COLORS.length];
            const glow = GLOW_RGBA[color] ?? 'rgba(0,240,255,0.3)';
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (i % 4) * 0.1 }}
                className={`p-6 ${isEven ? 'cyber-clip' : 'cyber-clip-reverse'} bg-[var(--color-surface-container-low)] border-2 hover:bg-white/5 transition-all duration-300 relative group min-h-[300px]`}
                style={{ borderColor: color }}
              >
                <div
                  className={`absolute top-4 left-4 w-10 h-10 ${isEven ? 'cyber-clip-reverse' : 'cyber-clip'} flex items-center justify-center text-black group-hover:scale-110 transition-transform`}
                  style={{ backgroundColor: color, boxShadow: `0 0 15px ${glow}` }}
                >
                  {CATEGORY_ICONS[group.category]}
                </div>

                <h3 className="text-lg font-display font-black text-white tracking-widest uppercase mt-14 mb-6 text-right group-hover:text-white">
                  {group.category}
                </h3>

                <div className="flex flex-col gap-2">
                  {group.items.map((skill) => (
                    <div
                      key={skill}
                      className="font-mono text-xs text-[var(--color-on-surface-variant)] flex items-center justify-between border-b border-[var(--color-outline)] pb-1 group/skill"
                    >
                      <span className="group-hover/skill:text-white transition-colors">{skill}</span>
                      <span
                        className="w-2 h-2 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                        style={{ backgroundColor: color }}
                      ></span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
