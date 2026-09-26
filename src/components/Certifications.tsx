import { motion } from 'framer-motion';
import { Award, BadgeCheck, Clock, ExternalLink } from 'lucide-react';
import { completedCertifications, upcomingCertifications } from '../data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t border-dashed border-[var(--color-neon-cyan)]">

      {/* ORIGINAL: Huge subtle text */}
      <h2 className="absolute top-[20%] left-[-2%] text-[20vw] font-display font-black text-transparent opacity-20 pointer-events-none tracking-tighter" style={{ WebkitTextStroke: '2px var(--color-surface-container-highest)' }}>
        CREDENTIALS
      </h2>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24 flex flex-col items-end"
        >
          <div className="inline-block bg-[var(--color-neon-yellow)] text-black px-4 py-1 cyber-clip-reverse font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(252,238,10,0.6)] animate-pulse">
            VERIFIED CLEARANCES
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            CERTIF<span className="text-[var(--color-neon-yellow)]">ICATES</span>
          </h2>
        </motion.div>

        {/* COMPLETED — original card design */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <BadgeCheck className="w-5 h-5 text-[var(--color-neon-green)]" />
          <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-neon-green)]">Completed</h3>
          <span className="font-mono text-[11px] text-[var(--color-on-surface-variant)]">({completedCertifications.length})</span>
          <div className="flex-1 h-px bg-[var(--color-outline)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {completedCertifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="relative group h-full flex flex-col"
            >
              <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-[var(--color-outline)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="cyber-clip bg-[var(--color-surface-container-low)] border border-[var(--color-outline)] p-8 hover:bg-[var(--color-surface-container-high)] hover:border-[var(--color-neon-yellow)] transition-all duration-300 flex-1 flex flex-col relative overflow-hidden">

                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl"></div>

                <div className="w-12 h-12 flex items-center justify-center mb-6 bg-black border" style={{ borderColor: cert.color }}>
                  <Award className="w-6 h-6" style={{ color: cert.color }} />
                </div>

                <h3 className="text-lg font-display font-black text-white mb-2 uppercase tracking-wide leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-[var(--color-on-surface-variant)] text-sm mb-6 pb-6 border-b border-dashed border-[var(--color-outline)]">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00ff41] font-bold px-2 py-1 bg-black border border-[#00ff41]/50">
                    {cert.date}
                  </span>

                  {/* Credly badge button — only when a verified link exists; never shows the raw URL */}
                  {cert.credly ? (
                    <a
                      href={cert.credly}
                      target="_blank"
                      rel="noreferrer"
                      title="View verified badge on Credly"
                      className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border transition-all"
                      style={{
                        color: cert.color,
                        borderColor: cert.color,
                        boxShadow: `0 0 10px ${cert.color}22`,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = cert.color; e.currentTarget.style.color = '#000'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = cert.color; }}
                    >
                      VIEW_BADGE <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : cert.note ? (
                    <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)] uppercase tracking-widest" title={cert.note}>
                      {cert.note}
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IN PROGRESS / UPCOMING — clearly separated, dashed styling, no fake links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Clock className="w-5 h-5 text-[var(--color-neon-yellow)]" />
          <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-neon-yellow)]">
            In Progress / Upcoming
          </h3>
          <span className="font-mono text-[11px] text-[var(--color-on-surface-variant)]">({upcomingCertifications.length})</span>
          <div className="flex-1 h-px bg-[var(--color-outline)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingCertifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="relative group h-full flex flex-col"
            >
              <div className="cyber-clip-reverse bg-black/40 border border-dashed border-[var(--color-neon-yellow)]/40 p-6 hover:bg-[var(--color-surface-container-low)] hover:border-[var(--color-neon-yellow)] transition-all duration-300 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-4 h-4 text-[var(--color-neon-yellow)]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-neon-yellow)] px-2 py-1 bg-black border border-[var(--color-neon-yellow)]/40">
                    {cert.exam}
                  </span>
                </div>
                <h4 className="font-display font-black text-white text-sm uppercase tracking-wide leading-snug">
                  {cert.title}
                </h4>
                <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)] mt-2">{cert.issuer}</p>
                {cert.note && (
                  <p className="font-mono text-[10px] text-[var(--color-on-surface-variant)]/70 mt-3 leading-relaxed">{cert.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
