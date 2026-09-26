import { motion } from 'framer-motion';
import { Diamond, Target, Send } from 'lucide-react';
import { freelanceServices, profile, socials } from '../data';

const Freelance = () => {
  const fiverr = socials.find((s) => s.label === 'Fiverr');

  return (
    <section id="freelance" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-2 border-[var(--color-neon-pink)]">

      {/* ORIGINAL: Background radial overlays */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-pink)]/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[var(--color-neon-pink)] text-white px-6 py-2 cyber-clip-reverse font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_25px_rgba(255,0,60,0.6)] animate-pulse">
            OPEN_FOR_OPS
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase relative select-none">
            <span className="absolute left-[50%] top-[4px] -translate-x-[50%] text-transparent opacity-50 w-full whitespace-nowrap hidden md:block" style={{ WebkitTextStroke: '2px var(--color-neon-pink)' }}>
              FREELANCE SERVICES
            </span>
            FREELANCE SERVICES
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Availability panel — original card style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 cyber-clip bg-black/60 border border-[var(--color-outline)] p-8 hover:bg-[var(--color-surface-container-high)] transition-all duration-300 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity cyber-clip"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#002200] border border-[#00ff41]/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2.5 h-2.5 bg-[#00ff41] rounded-full animate-ping shadow-[0_0_10px_#00ff41]"></span>
                <span className="text-[#00ff41] font-mono text-xs font-bold tracking-widest uppercase">
                  {profile.availability}
                </span>
              </div>

              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed font-body border-l-2 border-[var(--color-neon-pink)] pl-4 bg-black/40 p-3">
                {profile.freelanceTagline}
              </p>

              {/* Fiverr contact button */}
              <a
                href={fiverr?.href ?? '#'}
                onClick={(e) => { if (!fiverr || fiverr.href === '#') e.preventDefault(); }}
                target={fiverr && !fiverr.href.startsWith('#') ? '_blank' : undefined}
                rel="noreferrer"
                className={`mt-8 w-full flex items-center justify-center gap-3 py-4 border font-mono tracking-widest text-sm transition-all group/fiverr ${
                  fiverr && fiverr.href !== '#'
                    ? 'border-[var(--color-neon-pink)] text-[var(--color-neon-pink)] hover:bg-[var(--color-neon-pink)] hover:text-black hover:shadow-[0_0_20px_rgba(255,0,60,0.5)]'
                    : 'border-[var(--color-outline)] text-[var(--color-on-surface-variant)] cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5 group-hover/fiverr:translate-x-1 transition-transform" />
                {fiverr && fiverr.href !== '#' ? 'HIRE_ON_FIVERR' : 'FIVERR_LINK_PENDING'}
              </a>
            </div>
          </motion.div>

          {/* Services list — original role-card style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            {freelanceServices.map((service, i) => (
              <div
                key={service}
                className="cyber-clip-reverse bg-black/40 border border-[var(--color-outline)] p-5 flex items-start gap-4 hover:bg-[var(--color-surface-container-low)] transition-all duration-300 group relative"
              >
                <div className="w-10 h-10 shrink-0 cyber-clip bg-[var(--color-neon-pink)]/10 border border-[var(--color-neon-pink)]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-4 h-4 text-[var(--color-neon-pink)]" />
                </div>

                <div className="flex-1">
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed font-body text-sm flex items-start gap-2">
                    <Diamond className="w-3 h-3 mt-1 shrink-0 text-[var(--color-neon-pink)]" />
                    <span className="flex-1 text-white/90">{service}</span>
                  </p>
                </div>

                <span className="font-mono text-[10px] text-[var(--color-outline)] tracking-widest uppercase shrink-0 mt-1">
                  SVC_{String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
