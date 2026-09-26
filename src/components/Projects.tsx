import { motion } from 'framer-motion';
import { Github, Fingerprint } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--color-surface)]">

      {/* ORIGINAL: Background glitchy scanlines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMjU1LCAwLCA2MCwgMC4wNSkiLz48L3N2Zz4=')] opacity-30 select-none pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center justify-center bg-[var(--color-neon-yellow)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(252,238,10,0.6)]">
              SECURITY ARCHITECTURES
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase relative">
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-neon-cyan)' }}>PROJECTS</span>
            </h2>
          </div>
          <div className="hidden md:block w-32 h-2 bg-gradient-to-r from-[var(--color-neon-cyan)] to-transparent cyber-clip mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 2) * 0.15 }}
              className="relative group flex flex-col min-h-[400px]"
            >
              {/* ORIGINAL: Cyber Card Backgrounds & Borders */}
              <div className={`absolute inset-0 bg-[var(--color-surface-container-low)] ${i % 2 === 0 ? 'cyber-clip' : 'cyber-clip-reverse'} group-hover:bg-[var(--color-surface-container-high)] transition-all duration-300`}></div>
              <div className={`absolute inset-[-2px] border-2 bg-transparent pointer-events-none ${i % 2 === 0 ? 'cyber-clip border-[var(--color-neon-pink)]' : 'cyber-clip-reverse border-[var(--color-neon-cyan)]'} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full flex-1">
                <div className="flex justify-between items-start mb-8 border-b border-dashed border-[var(--color-outline)] pb-6 gap-4">
                  <div
                    className={`w-14 h-14 bg-black flex items-center justify-center border shadow-[0_0_15px_rgba(0,0,0,0.5)] ${i % 2 === 0 ? 'cyber-clip-reverse' : 'cyber-clip'}`}
                    style={{ borderColor: p.color }}
                  >
                    <Fingerprint className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <div className={`px-4 py-1 bg-black text-white text-[10px] uppercase tracking-wider font-bold border-b-2`} style={{ borderColor: p.color }}>
                    {p.date} // {p.tech}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-6 uppercase tracking-wider" style={{ textShadow: `0 0 10px ${p.color}` }}>
                    {p.title}
                  </h3>

                  <div className="space-y-4 mb-10 flex-1">
                    {p.desc.map((d, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm font-body text-[var(--color-on-surface-variant)] leading-relaxed bg-black/40 p-3 border-l-2" style={{ borderColor: p.color }}>
                        <p>{d}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-[var(--color-outline)] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 animate-ping" style={{ backgroundColor: p.color }}></span>
                      <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">{p.status}</span>
                    </div>

                    {/* GitHub button — only rendered when a repository actually exists */}
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        title="View on GitHub"
                        className="flex items-center justify-center px-6 py-3 bg-[var(--color-surface-container-highest)] border border-[var(--color-outline)] text-white hover:bg-white hover:text-black transition-all duration-300 cyber-clip uppercase font-bold text-xs"
                      >
                        Access Data <Github className="w-4 h-4 ml-2" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
