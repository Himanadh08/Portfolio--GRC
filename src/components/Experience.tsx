import { motion } from 'framer-motion';
import { timeline, type MilestoneStatus } from '../data';

const STATUS_META: Record<
  MilestoneStatus,
  { label: string; node: string; text: string; border: string; glow: string }
> = {
  completed: {
    label: 'COMPLETED',
    node: 'bg-[var(--color-neon-green)] shadow-[0_0_10px_var(--color-neon-green)]',
    text: 'text-[var(--color-neon-green)]',
    border: 'border-[var(--color-neon-green)]',
    glow: 'rgba(0,255,65,0.3)',
  },
  current: {
    label: 'CURRENT',
    node: 'bg-[var(--color-neon-cyan)] shadow-[0_0_10px_var(--color-neon-cyan)]',
    text: 'text-[var(--color-neon-cyan)]',
    border: 'border-[var(--color-neon-cyan)]',
    glow: 'rgba(0,240,255,0.3)',
  },
  upcoming: {
    label: 'UPCOMING',
    node: 'bg-[var(--color-neon-yellow)] shadow-[0_0_10px_var(--color-neon-yellow)]',
    text: 'text-[var(--color-neon-yellow)]',
    border: 'border-[var(--color-neon-yellow)]',
    glow: 'rgba(252,238,10,0.3)',
  },
  target: {
    label: 'TARGET',
    node: 'bg-[var(--color-neon-purple)] shadow-[0_0_10px_var(--color-neon-purple)]',
    text: 'text-[var(--color-neon-purple)]',
    border: 'border-[var(--color-neon-purple)]',
    glow: 'rgba(176,38,255,0.3)',
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-2 border-[var(--color-neon-purple)]">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 relative"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-purple)] text-white px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(176,38,255,0.6)]">
            FIELD DEPLOYMENT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-black text-white tracking-tighter uppercase">
            CAREER <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-neon-purple)' }}>TIMELINE</span>
          </h2>
        </motion.div>

        {/* Legend — original chip style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {(Object.keys(STATUS_META) as MilestoneStatus[]).map((key) => (
            <span
              key={key}
              className={`text-[10px] font-display font-black uppercase text-black px-4 py-1.5 cyber-clip ${STATUS_META[key].text}`}
              style={{ backgroundColor: 'transparent' }}
            >
              <span className={`inline-block w-2 h-2 rounded-full mr-2 align-middle ${STATUS_META[key].node.split(' ')[0]}`}></span>
              <span className="text-white/80">{STATUS_META[key].label}</span>
            </span>
          ))}
        </motion.div>

        <div className="relative px-4 md:px-0 max-w-4xl mx-auto">
          {/* ORIGINAL: Cyber Timeline Line */}
          <div className="absolute left-[15px] md:left-[39px] top-6 bottom-6 w-1 bg-[var(--color-outline)]">
            <div className="absolute top-0 w-full h-1/2 bg-[var(--color-neon-cyan)] animate-pulse shadow-[0_0_10px_var(--color-neon-cyan)]"></div>
          </div>

          <div className="space-y-8">
            {timeline.map((item) => {
              const meta = STATUS_META[item.status];
              return (
                <motion.div
                  key={`${item.date}-${item.event}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative pl-12 md:pl-24"
                >
                  {/* ORIGINAL: Glowing Timeline Node */}
                  <div className={`absolute left-[-2px] md:left-[22px] top-[40px] w-9 h-9 bg-black border-2 flex items-center justify-center z-10 cyber-clip transform -translate-y-1/2 ${meta.border}`}>
                    <span className={`w-3 h-3 ${meta.node}`}></span>
                  </div>

                  {/* ORIGINAL: Cyber Card */}
                  <div className={`cyber-clip-reverse bg-[var(--color-surface-container-low)] p-6 md:p-8 border-l-4 hover:bg-[var(--color-surface-container-high)] transition-all duration-500 group relative ${meta.border}`}>

                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl to-transparent opacity-20 group-hover:opacity-50 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom left, ${meta.glow}, transparent)` }}></div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 relative z-10 border-b border-[var(--color-outline)] pb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-display font-black text-white tracking-wider uppercase mb-2">
                          {item.event}
                        </h3>
                      </div>
                      <div className={`${meta.text} px-4 py-2 cyber-clip flex items-center justify-center min-w-[120px]`} style={{ backgroundColor: 'black', border: `1px solid ${meta.glow}` }}>
                        <span className="text-xs font-bold tracking-wider uppercase font-mono">
                          {item.date} · {meta.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
