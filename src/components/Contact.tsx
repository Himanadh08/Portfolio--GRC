import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, MapPin } from 'lucide-react';
import { profile, socials } from '../data';

const CONTACT_ICONS: Record<string, ReactNode> = {
  Email: <Mail className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  GitHub: <Github className="w-5 h-5" />,
  Fiverr: <Briefcase className="w-5 h-5" />,
};

const CONTACT_COLORS: Record<string, string> = {
  Email: 'var(--color-neon-pink)',
  LinkedIn: 'var(--color-neon-cyan)',
  GitHub: 'var(--color-neon-yellow)',
  Fiverr: 'var(--color-neon-purple)',
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-surface)] pb-32">

      {/* ORIGINAL: Intense Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBvbHlsaW5lIHBvaW50cz0iNTAsMCAwLDAgMCw1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI0MCwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[#00ff41] text-black px-6 py-2 cyber-clip font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_20px_rgba(0,255,65,0.6)] animate-pulse">
            COMMUNICATION PROTOCOL
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase mb-4 relative">
            SECURE <span className="glitch text-glow-pink" data-text="">TRANSMISSION</span>
          </h2>
          <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-mono text-sm tracking-widest px-4 border-l-2 border-r-2 border-[var(--color-neon-cyan)] py-2">
            INITIALIZE CONNECTION // CHANNELS BELOW
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('#') ? undefined : '_blank'}
              rel="noreferrer"
              onClick={(e) => { if (s.href === '#') e.preventDefault(); }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`cyber-clip bg-[var(--color-surface-container-low)] p-6 group flex items-start gap-4 hover:bg-[var(--color-surface-container-high)] border border-[var(--color-outline)] transition-all duration-300 relative overflow-hidden ${
                s.pending ? 'opacity-70' : ''
              }`}
            >
              <div
                className="absolute inset-x-0 bottom-0 h-1 cyber-clip opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: CONTACT_COLORS[s.label], filter: `drop-shadow(0 0 10px ${CONTACT_COLORS[s.label]})` }}
              ></div>
              <div
                className="w-12 h-12 cyber-clip-reverse bg-black border flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform"
                style={{ borderColor: CONTACT_COLORS[s.label], color: CONTACT_COLORS[s.label] }}
              >
                {CONTACT_ICONS[s.label]}
              </div>
              <div className="min-w-0">
                <h3 className="font-mono text-xs font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-1 group-hover:text-white transition-colors">
                  {s.label}
                </h3>
                <p
                  className="font-display font-bold text-white text-lg group-hover:tracking-wider transition-all truncate"
                  style={{ textShadow: `0 0 10px ${CONTACT_COLORS[s.label]}` }}
                >
                  {s.display}
                </p>
                {s.pending && (
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-neon-yellow)] mt-1">
                    // LINK PENDING
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location strip — original detail style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 cyber-clip-reverse bg-black/40 border border-[var(--color-outline)] px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
        >
          <MapPin className="w-4 h-4 text-[var(--color-neon-pink)]" />
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)]">
            BASE: {profile.currentCity}
          </span>
          <span className="hidden sm:inline text-[var(--color-outline)]">//</span>
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--color-on-surface-variant)]">
            HOME: {profile.homeCity}
          </span>
        </motion.div>

        <p className="font-mono text-[11px] text-[var(--color-outline)] mt-8 text-center">
          // RESUME / CV LINK STILL PENDING — ALL OTHER CHANNELS ARE LIVE.
        </p>
      </div>
    </section>
  );
};

export default Contact;
