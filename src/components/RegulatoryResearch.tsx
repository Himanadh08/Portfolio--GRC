import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { regulatoryResearch } from '../data';

const REGION_STYLES: Record<string, { chip: string; glow: string }> = {
  India: {
    chip: 'text-[var(--color-neon-green)] border-[var(--color-neon-green)]/50 bg-black',
    glow: 'rgba(0,255,65,0.3)',
  },
  EU: {
    chip: 'text-[var(--color-neon-cyan)] border-[var(--color-neon-cyan)]/50 bg-black',
    glow: 'rgba(0,240,255,0.3)',
  },
  Global: {
    chip: 'text-[var(--color-neon-purple)] border-[var(--color-neon-purple)]/50 bg-black',
    glow: 'rgba(176,38,255,0.3)',
  },
};

const CARD_BORDERS = [
  'var(--color-neon-cyan)',
  'var(--color-neon-green)',
  'var(--color-neon-yellow)',
  'var(--color-neon-purple)',
  'var(--color-neon-pink)',
];

const RegulatoryResearch = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-[var(--color-surface)]">

      {/* ORIGINAL-style giant background word */}
      <h2 className="absolute top-[20%] left-[-2%] text-[20vw] font-display font-black text-transparent opacity-15 pointer-events-none tracking-tighter" style={{ WebkitTextStroke: '2px var(--color-surface-container-highest)' }}>
        RESEARCH
      </h2>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* ORIGINAL heading style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-left mb-10 flex flex-col items-start"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-green)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(0,255,65,0.5)]">
            INDEPENDENT STUDY
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            REGULATORY <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-neon-green)' }}>RESEARCH</span>
          </h2>
          <p className="font-mono text-xs text-[var(--color-on-surface-variant)] mt-6 max-w-2xl leading-relaxed border-l-2 border-[var(--color-neon-green)] pl-4">
            &gt; Primary-source reading and structured summaries of cybersecurity, data protection, and AI
            regulation. Study and portfolio work — not formal accreditation or affiliation with any
            issuing organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regulatoryResearch.map((reg, i) => {
            const border = CARD_BORDERS[i % CARD_BORDERS.length];
            const regionMeta = REGION_STYLES[reg.region];
            const hasLink = Boolean(reg.link);

            // Card with a source document renders as a clickable link; cards without stay non-clickable
            const CardTag = (hasLink ? 'a' : 'div') as 'a';

            return (
              <motion.div
                key={reg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="relative group h-full"
              >
                <CardTag
                  {...(hasLink ? { href: reg.link, target: '_blank', rel: 'noreferrer', title: `View ${reg.name} research document` } : {})}
                  className={`block h-full ${hasLink ? 'cursor-pointer' : ''}`}
                >
                  <div
                    className={`${i % 2 === 0 ? 'cyber-clip' : 'cyber-clip-reverse'} bg-[var(--color-surface-container-low)] p-6 group-hover:bg-[var(--color-surface-container-high)] transition-all duration-300 flex-1 flex flex-col relative overflow-hidden h-full border ${hasLink ? 'group-hover:border-white' : ''}`}
                    style={{ borderColor: border }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${regionMeta.chip}`}>
                        {reg.region}
                      </span>
                      {/* External-link indicator — only shown when an actual source link exists */}
                      {hasLink && (
                        <ExternalLink
                          className="w-4 h-4 ml-auto shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                          style={{ color: border }}
                        />
                      )}
                      {!hasLink && (
                        <span className="font-mono text-[10px] text-[var(--color-outline)] uppercase tracking-widest ml-auto">
                          {reg.domain}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-display font-black text-white uppercase tracking-wide leading-snug mb-2">
                      {reg.name}
                    </h3>
                    <p className="font-mono text-[11px] mb-4 pb-4 border-b border-dashed border-[var(--color-outline)]" style={{ color: border }}>
                      {reg.status}
                    </p>

                    <ul className="mt-auto space-y-1.5">
                      {reg.points.map((point) => (
                        <li key={point} className="text-xs font-mono text-[var(--color-on-surface-variant)] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 mt-1.5 shrink-0" style={{ backgroundColor: border }}></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardTag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegulatoryResearch;
