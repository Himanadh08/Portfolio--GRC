import { motion } from 'framer-motion';
import { GraduationCap, Target, Globe2 } from 'lucide-react';
import { education, careerGoals } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t border-dashed border-[var(--color-neon-cyan)]">

      {/* Glitch textual background — original style */}
      <div className="absolute left-[-5%] top-[50%] -translate-y-1/2 font-display font-black text-[15vw] text-white opacity-[0.03] select-none pointer-events-none rotate-90 md:rotate-0 tracking-tighter">
        ACADEMICS
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Original-style heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-cyan)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
            KNOWLEDGE_BASE
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            EDU<span className="text-[var(--color-neon-cyan)]">CATION</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Degree card — original cyber-clip card style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 cyber-clip bg-[var(--color-surface-container-low)] border-2 border-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)]/10 transition-all duration-300 relative group min-h-[320px]"
          >
            <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-neon-cyan)] cyber-clip-reverse flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>

            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-6 text-right group-hover:text-[var(--color-neon-cyan)]">
              BTech_CSE.deg
            </h3>

            <div className="flex flex-col gap-3 font-mono text-sm">
              <div className="flex items-center justify-between border-b border-[var(--color-outline)] pb-1">
                <span className="text-[var(--color-on-surface-variant)]">University</span>
                <span className="text-white font-bold text-right">{education.university}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--color-outline)] pb-1">
                <span className="text-[var(--color-on-surface-variant)]">Location</span>
                <span className="text-white font-bold text-right">{education.location}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--color-outline)] pb-1">
                <span className="text-[var(--color-on-surface-variant)]">Duration</span>
                <span className="text-[var(--color-neon-green)] font-bold text-right">{education.duration}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[var(--color-outline)] pb-1">
                <span className="text-[var(--color-on-surface-variant)]">Degree</span>
                <span className="text-white font-bold text-right">B.Tech — CSE</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-end">
              {education.specialization.map((s) => (
                <span
                  key={s}
                  className="text-xs font-display font-black uppercase text-black bg-[var(--color-neon-yellow)] cyber-clip px-4 py-1.5 shadow-[0_0_10px_rgba(252,238,10,0.3)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Career direction card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="p-8 cyber-clip-reverse bg-[var(--color-surface-container-low)] border-2 border-[var(--color-neon-purple)] hover:bg-[var(--color-neon-purple)]/10 transition-all duration-300 relative group min-h-[320px]"
          >
            <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-neon-purple)] cyber-clip flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5" />
            </div>

            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-6 text-right group-hover:text-[var(--color-neon-purple)]">
              Mission_Path
            </h3>

            <div className="flex flex-col gap-3 font-mono text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-outline)] pb-2">
                <span className="text-[var(--color-on-surface-variant)] shrink-0">Short term</span>
                <span className="text-[var(--color-neon-cyan)] font-bold text-right">{careerGoals.shortTerm}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-outline)] pb-2">
                <span className="text-[var(--color-on-surface-variant)] shrink-0">Medium term</span>
                <span className="text-white font-bold text-right">{careerGoals.mediumTerm}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-outline)] pb-2">
                <span className="text-[var(--color-on-surface-variant)] shrink-0">Long term</span>
                <span className="text-[var(--color-neon-pink)] font-bold text-right">{careerGoals.longTerm}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-outline)] pb-2">
                <span className="text-[var(--color-on-surface-variant)] shrink-0">Industry</span>
                <span className="text-white font-bold text-right">{careerGoals.industryFocus}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-[var(--color-on-surface-variant)] shrink-0 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[var(--color-neon-purple)]" /> Global
                </span>
                <span className="text-[var(--color-neon-yellow)] font-bold text-right">{careerGoals.internationalTargets}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
