import { useState, useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cpu, Terminal, Github, Linkedin, Mail, Download, FileText, FileBadge, Search, Briefcase } from 'lucide-react';
import { profile, socials } from '../data';

/* ---------- ORIGINAL: LiveScanner fake telemetry feed ---------- */
const LiveScanner = () => {
  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }).toLowerCase();
  };

  const [logs, setLogs] = useState([
    `[${getTime()}] [system] > Initializing compliance engine... [OK]`,
    `[${getTime()}] [network] > Detecting active nodes on subnet...`,
    `[${getTime()}] [security] > Regulatory watchlist synchronized.`,
  ]);

  const lastIndexRef = useRef(-1);

  useEffect(() => {
    const messages = [
      "[system] > Initializing packet inspection engine... [OK]",
      "[network] > Detecting active nodes on subnet 192.168.1.0/24",
      "[security] > Tracking DPDP Act enforcement updates",
      "[firewall] > Reviewing ISO 27001 Annex A control mappings",
      "[monitor] > Scanning RBI / SEBI circular feeds",
      "[system] > NIST AI RMF function map: 4/4 functions covered",
      "[vulnerability] > Cross-referencing EU AI Act risk tiers",
      "[tunnel] > DORA vs RBI comparison document updated",
      "[auth] > Session authenticated: user 'himanadh'",
      "[kernel] > Monitoring system entropy for crypto ops",
      "[threat_intel] > Synchronizing regulatory signatures... [DONE]",
      "[heartbeat] > REX/ATLAS build: 443 tests passing | 0 failures",
    ];

    const interval = setInterval(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * messages.length);
      } while (nextIndex === lastIndexRef.current);

      lastIndexRef.current = nextIndex;
      const timestamp = getTime();
      const msg = messages[nextIndex];

      setLogs(prev => {
        const newLogs = [...prev, `[${timestamp}] ${msg}`];
        return newLogs.slice(-5);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 border border-[#00ff41]/20 p-4 rounded-sm font-mono text-[11px] leading-relaxed shadow-[inset_0_0_20px_rgba(0,255,65,0.05)] mt-4">
      <div className="flex items-center gap-2 mb-3 text-[#00ff41]/60 font-bold border-b border-[#00ff41]/10 pb-1">
        <Search size={14} /> LIVE_TELEMETRY_FEED
      </div>
      <div className="space-y-1">
        {logs.map((log, i) => (
          <div key={i} className={`${i === logs.length - 1 ? 'text-[#00ff41]' : 'text-[#00ff41]/40'} transition-all duration-500`}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Social icon map (original styling) ---------- */
const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
  Fiverr: <Briefcase className="w-5 h-5" />,
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black border-t-2 border-[var(--color-neon-pink)]">

      {/* ORIGINAL: Intense Binary Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-screen" style={{
        backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* ORIGINAL: Decorative Matrix rain overlay */}
      <div className="absolute inset-0 top-0 left-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9Im5vbmUiLz48cmVjdCB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDAsIDI1NSwgNjUsIDAuMDUpIi8+PC9zdmc+')] pointer-events-none mix-blend-screen opacity-100 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">

        {/* ORIGINAL: Hacker Status Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-pink)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(255,0,60,0.4)]">
            USER_PROFILE: DEPLOYED
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
            ABOUT.<span className="text-[var(--color-neon-pink)]">ME</span>
          </h2>
        </motion.div>

        {/* ORIGINAL: Matrix Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col lg:flex-row border border-[#00ff41] bg-black/80 rounded-sm shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden"
        >

          {/* Left Panel: Profile Node */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#00ff41]/50 relative">
            <div className="absolute inset-0 bg-[#00ff41]/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* ORIGINAL: Hexagon Profile Pic */}
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 bg-[#00ff41] blur-md opacity-20 animate-pulse pointer-events-none"></div>
              <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <img
                  src="/profile.jpg"
                  alt="Himanadh Sesha Sai Inampudi — Profile Photo"
                  loading="lazy"
                  className="w-full h-full object-cover relative"
                />
              </div>

              {/* ORIGINAL: Hexagon Outline */}
              <div className="absolute inset-0 border-2 border-[#00ff41] pointer-events-none" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', boxShadow: 'inset 0 0 20px #00ff41' }}></div>
            </div>

            {/* ORIGINAL: Online Status */}
            <div className="flex items-center gap-2 mb-8 bg-[#002200] px-4 py-1 border border-[#00ff41]/30 rounded-full">
              <span className="w-2.5 h-2.5 bg-[#00ff41] rounded-full animate-ping shadow-[0_0_10px_#00ff41]"></span>
              <span className="text-[#00ff41] font-mono text-xs font-bold tracking-widest">ONLINE</span>
            </div>

            {/* Text Details — content swapped */}
            <h3 className="text-3xl font-mono font-bold text-white mb-6 text-center">AI Governance · GRC</h3>

            <div className="flex flex-col gap-4 text-left w-full max-w-[280px]">
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>{profile.currentCity}</span>
              </div>
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm">
                <Cpu className="w-5 h-5 shrink-0" />
                <span>{profile.tagline}</span>
              </div>
              <div className="flex items-center gap-3 text-[#00ff41] font-mono text-sm mt-2">
                <Terminal className="w-5 h-5 shrink-0" />
                <span>&gt;_ Focus: {profile.role}</span>
              </div>
            </div>

            {/* ORIGINAL: Social Links Matrix Style */}
            <div className="flex gap-4 mt-8 mb-10 w-full justify-center">
              {socials.map((s, i) => (
                <a
                  key={i}
                  aria-label={s.label}
                  href={s.href}
                  onClick={(e) => { if (s.href === '#') e.preventDefault(); }}
                  target={s.href.startsWith('#') ? undefined : '_blank'}
                  rel="noreferrer"
                  title={s.label}
                  className={`w-12 h-12 flex items-center justify-center border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors rounded-sm shadow-[0_0_10px_rgba(0,255,65,0.2)]`}
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>

            {/* ORIGINAL: Download Resume Button Matrix Style — link pending until resume URL is provided */}
            <a
              href="#" // TODO: [ADD RESUME URL] — renders disabled until the link is provided
              onClick={(e) => e.preventDefault()}
              title="Resume link pending"
              className="w-full flex items-center justify-center gap-3 py-4 border border-[#00ff41]/40 text-[#00ff41]/50 font-mono tracking-widest text-sm cursor-not-allowed"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD RESUME
            </a>
          </div>

          {/* ORIGINAL: Right Panel — Active Terminal */}
          <div className="lg:w-2/3 flex flex-col font-mono relative bg-black">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-[#00ff41]/50">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[var(--color-on-surface-variant)] text-xs tracking-widest select-none">ROOT@IDENTITY:~</div>
              <div className="w-4 h-4 text-[#00ff41]">
                <Terminal className="w-full h-full" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="pt-4 pb-8 px-6 lg:pt-6 lg:pb-12 lg:px-12 flex-1 flex flex-col gap-8 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '800px' }}>

              {/* Command 1: WHOAMI — content from TXT */}
              <div className="flex flex-col gap-4 relative">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41] font-bold">➜</span>
                  <span className="text-[#2094f3] font-bold">~</span>
                  <span className="text-white font-bold ml-1">whoami --verbose</span>
                </div>

                <div className="text-gray-300 leading-relaxed max-w-2xl pl-4 md:pl-6 pt-2 space-y-3">
                  {profile.summary.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Command 2: EDUCATION — content from TXT */}
              <div className="flex flex-col gap-4 relative">
                <div className="flex items-start gap-2">
                  <span className="text-[#00ff41] font-bold">➜</span>
                  <span className="text-[#2094f3] font-bold">~</span>
                  <span className="text-white font-bold ml-1">ls -la ./education/</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pl-4 md:pl-6 pt-2">
                  {/* File Block 1 */}
                  <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                    <FileBadge className="w-6 h-6 text-[#00ff41] shrink-0" />
                    <div>
                      <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">BTech_CSE.deg</div>
                      <div className="text-xs text-gray-400">Uttaranchal University, Dehradun</div>
                      <div className="text-xs text-[#2094f3] mt-2">Cybersecurity · GRC · AI Governance</div>
                      <div className="text-xs text-[#2094f3] mt-1">Aug 2024 — Jun 2028 (Expected)</div>
                    </div>
                  </div>
                  {/* File Block 2 */}
                  <div className="border border-[#00ff41]/50 bg-black p-4 rounded-sm flex gap-3 items-start group hover:bg-[#002200] transition-colors">
                    <FileText className="w-6 h-6 text-[#00ff41] shrink-0" />
                    <div>
                      <div className="text-[#00ff41] font-bold text-sm mb-1 line-clamp-1">career_goal.target</div>
                      <div className="text-xs text-gray-400">AI GRC Analyst — Big 4 / Fintech (2028)</div>
                      <div className="text-xs text-[#2094f3] mt-2">Focus: Financial sector · Fintech · Banking</div>
                      <div className="text-xs text-[#2094f3] mt-1">Long term: CISO</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ORIGINAL: LiveScanner */}
              <LiveScanner />

              {/* ORIGINAL: Command Prompt Idle */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-[#00ff41] font-bold">➜</span>
                <span className="text-[#2094f3] font-bold">~</span>
                <span className="w-2.5 h-5 bg-[#00ff41] ml-2 animate-blink"></span>
              </div>

            </div>

            {/* ORIGINAL: Internal Scanlines Effect */}
            <div className="absolute top-[60px] bottom-0 left-0 right-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC41KSIvPjwvc3ZnPg==')] pointer-events-none z-20"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
