/**
 * ============================================================
 *  PORTFOLIO CONTENT — edit this file to update the site.
 *  All personal data comes from the owner's details document.
 *  External links still marked as placeholders ("#") must be
 *  filled in manually once the real URLs are available.
 * ============================================================
 */

export const profile = {
  fullName: 'Himanadh Sesha Sai Inampudi',
  shortName: 'Himanadh',
  headerName: 'HIMANADH',
  headerNameAccent: '.INAMPUDI',
  tagline: 'Building Expertise in AI Security & Governance',
  role: 'AI Security & Governance · GRC',
  // Typed phrases cycled in the hero
  typedPhrases: [
    'AI Security & Governance',
    'Governance · Risk · Compliance',
    'DPDP Act 2023 · ISO 27001 · NIST AI RMF',
    'EU AI Act · Emerging Tech Regulation',
  ],
  homeCity: 'Khammam, Telangana, India',
  currentCity: 'Dehradun, Uttarakhand, India',
  isacaStatus: 'ISACA Student Member',
  availability: 'Available for Freelance',
  freelanceTagline:
    'Available for DPDP Act compliance documents, AI governance policies, ISO 27001 gap analysis, and regulatory research for Indian startups and global clients.',
  // Professional summary from the details document
  summary: [
    'B.Tech CSE student specialising in AI Governance, Risk and Compliance with a focus on India’s financial sector and emerging AI regulation.',
    'Independently studying ISO 27001, NIST AI RMF, EU AI Act, and India-specific regulations (DPDP Act 2023, RBI IT Framework, SEBI Cyber Framework) beyond college curriculum.',
    'Active ISACA Student Member building a public portfolio of regulatory research, GRC deliverables, and AI governance audit work. Building REX/ATLAS — a personal AI operating system with full GRC governance framework applied.',
    'Targeting AI GRC Analyst roles at Big 4 firms and fintech companies with a long-term goal of CISO.',
  ],
};

export const education = {
  degree: 'Bachelor of Technology — Computer Science Engineering',
  university: 'Uttaranchal University',
  location: 'Dehradun, Uttarakhand',
  duration: 'August 2024 — June 2028 (Expected)',
  specialization: ['Cybersecurity', 'GRC', 'AI Governance'],
};

export const careerGoals = {
  shortTerm: 'AI GRC Analyst at Big 4 or Fintech (2028)',
  mediumTerm: 'GRC Manager → Head of AI Governance',
  longTerm: 'CISO at a financial institution',
  industryFocus: 'Financial sector · Fintech · Banking',
  internationalTargets: 'Dubai → Singapore → Switzerland',
};

/**
 * External profiles.
 * href: real URL where available, otherwise "#" placeholder.
 * pending: true → link target not provided yet.
 */
export type SocialLink = {
  label: string;
  href: string;
  display: string;
  pending: boolean;
};

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/himanadh-sesha-sai-inampudi-410b88316?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    display: 'himanadh-sesha-sai-inampudi',
    pending: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Himanadh08',
    display: 'Himanadh08',
    pending: false,
  },
  {
    label: 'Email',
    href: 'mailto:sshimanadh08@gmail.com',
    display: 'sshimanadh08@gmail.com',
    pending: false,
  },
  {
    label: 'Fiverr',
    href: 'https://www.fiverr.com/s/WeEvYq7',
    display: 'Available on Fiverr',
    pending: false,
  },
];

/* ---------------------------------------------------------- */
/* CERTIFICATIONS                                              */
/* ---------------------------------------------------------- */

export type CompletedCert = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  credly?: string; // verified badge URL — only set when provided
  color: string;
};

export const completedCertifications: CompletedCert[] = [
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    date: 'July 2026',
    credly: 'https://www.credly.com/badges/98418c9f-3134-4349-845e-288a6432a481',
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'ISACA Student Member',
    issuer: 'ISACA',
    date: 'June 2026',
    note: 'Status: Active',
    color: 'var(--color-neon-pink)',
  },
  {
    title: 'Network Technician Career Path',
    issuer: 'Cisco Networking Academy',
    date: 'March 2026',
    credly: 'https://www.credly.com/badges/4731b38f-6771-4204-b1ec-dcc2ec4b95e9',
    color: 'var(--color-neon-yellow)',
  },
  {
    title: 'AI and Innovation: MongoDB Resilient AI Strategy',
    issuer: 'MongoDB',
    date: 'July 2026',
    credly: 'https://www.credly.com/badges/2245a982-7852-46dc-b683-b5e9bc2daa0d',
    color: 'var(--color-neon-green)',
  },
];

export type UpcomingCert = {
  title: string;
  issuer: string;
  exam: string;
  note?: string;
};

export const upcomingCertifications: UpcomingCert[] = [
  {
    title: 'TryHackMe SOC Level 1',
    issuer: 'TryHackMe',
    exam: 'In progress',
    note: 'Modules 1, 2, 3 complete',
  },
  {
    title: 'AZ-900 Azure Fundamentals',
    issuer: 'Microsoft',
    exam: 'December 2026',
  },
  {
    title: 'SC-900 Security, Compliance & Identity Fundamentals',
    issuer: 'Microsoft',
    exam: 'December 2026',
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    exam: 'January 20, 2027',
  },
  {
    title: 'ISACA CET AI Fundamentals',
    issuer: 'ISACA',
    exam: 'January 2027',
  },
  {
    title: 'ISO 42001 Foundation',
    issuer: 'PECB',
    exam: 'February 2027',
  },
  {
    title: 'AIGP — AI Governance Professional',
    issuer: 'IAPP',
    exam: 'March 2027',
  },
  {
    title: 'CISM',
    issuer: 'ISACA',
    exam: 'January 2028',
    note: 'Certification activates after 5 years of experience',
  },
];

/* ---------------------------------------------------------- */
/* SKILLS — exact skill areas, no invented proficiency levels   */
/* ---------------------------------------------------------- */

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: 'GRC Frameworks',
    items: ['ISO 27001', 'NIST CSF 2.0', 'NIST AI RMF', 'COBIT (awareness)'],
  },
  {
    category: 'AI Governance',
    items: [
      'EU AI Act',
      'Fairlearn',
      'SHAP',
      'AIF360',
      'MLflow',
      'AI Risk Classification',
      'Model Cards',
      'Prompt Injection Defence',
    ],
  },
  {
    category: 'India Regulations',
    items: [
      'DPDP Act 2023',
      'RBI IT Cyber Security Framework',
      'SEBI Cyber Security and Resilience Framework',
    ],
  },
  {
    category: 'EU / Global Regulations',
    items: [
      'DORA',
      'GDPR',
      'EU AI Act Risk Categories',
      'ISA/IEC 62443 (awareness)',
      'ICAO Aviation Cyber (awareness)',
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      'Network Security',
      'SIEM Concepts',
      'Incident Response',
      'SOC Operations',
      'MITRE ATT&CK',
      'Cyber Kill Chain',
      'Pyramid of Pain',
      'Vulnerability Management',
    ],
  },
  {
    category: 'Technical',
    items: [
      'Python (beginner)',
      'Bash Scripting',
      'SQL',
      'Linux CLI',
      'Jupyter Notebooks',
      'FastAPI',
      'Next.js',
    ],
  },
  {
    category: 'Cloud',
    items: [
      'Microsoft Azure — AZ-900 (studying)',
      'Azure Security — SC-900 (studying)',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Splunk (awareness)',
      'Wireshark (awareness)',
      'SQLite',
      'SQLCipher',
      'JWT Authentication',
    ],
  },
];

/* ---------------------------------------------------------- */
/* PROJECTS — GitHub URLs are placeholders ("#") for now       */
/* ---------------------------------------------------------- */

export type Project = {
  title: string;
  tech: string;
  date: string;
  desc: string[];
  link: string; // GitHub repo URL — empty string ('') means no repository exists
  status: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: 'REX/ATLAS — Personal AI Operating System',
    tech: 'FastAPI · Next.js · SQLCipher · JWT | AI Governance',
    date: 'Phase 4 Complete',
    desc: [
      'A private, personal AI-powered operating system with ATLAS as the conversational AI assistant. Built with FastAPI backend, Next.js frontend with Tailwind CSS, SQLite encrypted with SQLCipher, JWT HttpOnly authentication, and 4-tier permission model.',
      'Phase 4 complete covering Tasks, Career Roadmap, Learning Tracker, and Job Application Manager. Applied full GRC governance framework — ISO 27001 Annex A controls mapping, STRIDE threat model, NIST AI RMF governance document, DPDP Act compliance assessment, EU AI Act self-classification, and model card for ATLAS.',
      '443 passing tests. Production-grade security architecture.',
    ],
    link: 'https://github.com/Himanadh08/REX',
    status: 'IN PROGRESS',
    color: 'var(--color-neon-pink)',
  },
  {
    title: 'AI Governance Bias Audit — Credit Scoring Model',
    tech: 'Python · Fairlearn · SHAP · NIST AI RMF · EU AI Act',
    date: 'November 2026',
    desc: [
      'Building and auditing a machine learning classifier on the UCI Adult Income dataset to demonstrate AI governance methodology. Applying Fairlearn for demographic parity and equalized odds assessment across protected attributes. Using SHAP for model explainability analysis.',
      'Mapping findings to NIST AI RMF (Govern/Map/Measure/Manage) and EU AI Act Annex III high-risk classification criteria. Producing a formal AI Risk Assessment Report documenting bias audit findings, explainability gaps, and governance recommendations.',
    ],
    link: '', // No repository available — no GitHub button shown
    status: 'IN PROGRESS',
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'Regulatory Research Repository',
    tech: 'DPDP · RBI · SEBI · DORA · NIST · EU AI Act',
    date: 'Ongoing',
    desc: [
      'Structured summaries of key cybersecurity and data protection regulations based on primary source reading of regulatory texts. Covers DPDP Act 2023, RBI IT Cyber Security Framework, SEBI Cyber Framework, NIST CSF 2.0, NIST AI RMF, DORA, EU AI Act, and ISO 27001.',
      'Includes framework comparison documents — DORA vs RBI, ISO 27001 vs SOC 2 vs NIST CSF.',
    ],
    link: 'https://github.com/Himanadh08/Regulatory---Research',
    status: 'IN PROGRESS',
    color: 'var(--color-neon-yellow)',
  },
  {
    title: 'ISO 27001 GRC Portfolio Deliverables',
    tech: 'Risk Register · TPRM · InfoSec Policy | GRC',
    date: 'October 2026',
    desc: [
      'Practical GRC deliverables built independently as portfolio work. ISO 27001 Risk Register with asset inventory, threat identification, 5x5 risk scoring matrix, and Annex A controls mapping with Statement of Applicability.',
      'Information Security Policy document. Third-Party Risk Management (TPRM) vendor questionnaire with automated Tier 1/2/3 risk classification.',
    ],
    link: '', // No repository available — no GitHub button shown
    status: 'IN PROGRESS',
    color: 'var(--color-neon-purple)',
  },
  {
    title: 'Bash Security Scripts',
    tech: 'Bash · Linux | Security Automation',
    date: 'July 2026',
    desc: [
      'Security-relevant Linux automation scripts mapped to ISO 27001 Annex A controls.',
      'system_info.sh for system enumeration and audit evidence collection. permission_checker.sh for world-writable file detection (ISO 27001 A.8.3). log_scanner.sh for security keyword analysis in log files (ISO 27001 A.8.15).',
    ],
    link: '', // No repository available — no GitHub button shown
    status: 'COMPLETE',
    color: 'var(--color-neon-green)',
  },
];

/* ---------------------------------------------------------- */
/* REGULATORY RESEARCH — independent study of primary sources   */
/* ---------------------------------------------------------- */

export type Regulation = {
  name: string;
  region: 'India' | 'EU' | 'Global';
  domain: string;
  status: string;
  link?: string; // source document/repo — only set when provided
  points: string[];
};

export const regulatoryResearch: Regulation[] = [
  {
    name: 'DPDP Act 2023',
    region: 'India',
    domain: 'Data Protection',
    status: 'All 9 chapters read · full summary written',
    link: 'https://github.com/Himanadh08/Regulatory---Research/blob/main/India/DPDP_ACT_Summary.md',
    points: ['Obligations', 'Rights', 'Penalties', 'Data Protection Board'],
  },
  {
    name: 'RBI IT Cyber Security Framework',
    region: 'India',
    domain: 'Banking',
    status: 'Complete read · summary written',
    points: ['IT governance', 'InfoSec mandates', 'Incident reporting'],
  },
  {
    name: 'SEBI Cyber Security Framework',
    region: 'India',
    domain: 'Capital Markets',
    status: 'Complete read · summary written',
    points: ['Resilience requirements for market intermediaries'],
  },
  {
    name: 'DORA',
    region: 'EU',
    domain: 'Financial Sector',
    status: 'Digital Operational Resilience Act · in force Jan 2025',
    points: ['ICT risk', 'Incident reporting', 'Resilience testing', 'TPRM'],
  },
  {
    name: 'GDPR',
    region: 'EU',
    domain: 'Data Protection',
    status: 'Overview read · comparison with DPDP written',
    points: ['DPDP vs GDPR comparison document'],
  },
  {
    name: 'NIST CSF 2.0',
    region: 'Global',
    domain: 'Cybersecurity',
    status: 'All 6 functions · notes written',
    points: ['Govern', 'Identify', 'Protect', 'Detect', 'Respond', 'Recover'],
  },
  {
    name: 'NIST AI RMF',
    region: 'Global',
    domain: 'AI Risk Management',
    status: 'All 4 functions · applied to REX/ATLAS project',
    points: ['Govern', 'Map', 'Measure', 'Manage'],
  },
  {
    name: 'EU AI Act',
    region: 'EU',
    domain: 'AI Regulation',
    status: 'Applied to REX/ATLAS and AI bias audit project',
    points: ['Risk classification system', 'High-risk obligations'],
  },
  {
    name: 'ISO 27001:2022',
    region: 'Global',
    domain: 'Information Security',
    status: 'Applied controls to REX/ATLAS',
    points: ['All 10 clauses', 'Annex A — 93 controls across 4 categories'],
  },
];

/* ---------------------------------------------------------- */
/* CAREER TIMELINE — statuses kept honest                      */
/* ---------------------------------------------------------- */

export type MilestoneStatus = 'completed' | 'current' | 'upcoming' | 'target';

export type Milestone = {
  date: string;
  event: string;
  status: MilestoneStatus;
};

export const timeline: Milestone[] = [
  { date: '2024 Aug', event: 'Started B.Tech CSE at Uttaranchal University', status: 'completed' },
  { date: '2026 Jun', event: 'Joined ISACA as Student Member', status: 'completed' },
  { date: '2026 Jul', event: 'Completed Google Cybersecurity Certificate', status: 'completed' },
  { date: '2026 Jul', event: 'Earned MongoDB AI Badges ×3', status: 'completed' },
  { date: '2026 Aug', event: 'Started building REX/ATLAS Personal AI OS', status: 'completed' },
  { date: '2026 Sep', event: 'Started CompTIA Security+ study', status: 'current' },
  { date: '2026 Dec', event: 'AZ-900 + SC-900 exams', status: 'upcoming' },
  { date: '2027 Jan', event: 'CompTIA Security+ exam', status: 'upcoming' },
  { date: '2027 Jan', event: 'ISACA CET AI Fundamentals', status: 'upcoming' },
  { date: '2027 Feb', event: 'ISO 42001 Foundation exam', status: 'upcoming' },
  { date: '2027 Feb', event: 'Internship applications open', status: 'upcoming' },
  { date: '2027 Mar', event: 'AIGP exam', status: 'upcoming' },
  { date: '2027 Jun', event: 'GRC Internship', status: 'target' },
  { date: '2028 Jan', event: 'CISM exam', status: 'upcoming' },
  { date: '2028 Jun', event: 'Graduation — Target: AI GRC Analyst', status: 'target' },
];

/* ---------------------------------------------------------- */
/* FREELANCE SERVICES — offered services, no client claims     */
/* ---------------------------------------------------------- */

export const freelanceServices: string[] = [
  'DPDP Act compliance documents for Indian startups',
  'AI governance policy writing (NIST AI RMF + EU AI Act)',
  'ISO 27001 gap analysis checklist',
  'Regulatory research and structured summaries',
  'Privacy policy writing (DPDP compliant)',
  'Security awareness training decks',
  'AI system governance documentation',
];
