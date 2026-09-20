import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDot,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  Search,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/john-lester007";
const CV_URL = "/manus-storage/John_Lester_ATS_CV_22934683.docx";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    label: "Search & strategy",
    icon: Search,
    skills: [
      "Search Engine Optimization (SEO)",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "Competitor Analysis",
      "SEO Auditing",
      "Content Strategy",
      "Content Optimization",
    ],
  },
  {
    label: "Growth channels",
    icon: BarChart3,
    skills: [
      "Google Search Console",
      "Google Analytics 4 (GA4)",
      "Social Media Marketing",
      "Facebook Marketing",
      "Email Marketing",
      "Lead Generation",
      "Conversion Optimization",
      "Performance Reporting",
    ],
  },
  {
    label: "Automation & AI",
    icon: Sparkles,
    skills: [
      "Marketing Automation",
      "AI-Powered Marketing",
      "ChatGPT",
      "n8n",
      "AI Agents",
      "Workflow Automation",
    ],
  },
];

const toolRows = [
  ["SEO", "Google Search Console · Google Analytics 4 · Semrush · Ahrefs · Screaming Frog"],
  ["Marketing", "Meta Business Suite · Facebook Ads Manager · Google Ads · Mailchimp"],
  ["Content & design", "WordPress · Canva · Google Workspace"],
];

const experience = [
  {
    period: "Jan 2025 — Present",
    role: "Digital Marketing & SEO Specialist",
    company: "Digital Growth Agency",
    place: "Dhaka, Bangladesh",
    current: true,
    bullets: [
      "Conduct keyword research and competitor analysis to identify organic search opportunities.",
      "Perform on-page SEO audits covering titles, meta descriptions, headings, internal links, URLs, and structured data.",
      "Analyze website performance using Google Search Console and Google Analytics.",
      "Develop SEO-focused content strategies based on search intent and target keywords.",
      "Create social media campaigns and promotional content for business clients.",
      "Monitor campaign performance and prepare monthly digital marketing reports.",
      "Use AI tools to accelerate content research, analysis, reporting, and marketing workflows.",
    ],
  },
  {
    period: "Jun 2024 — Dec 2024",
    role: "Digital Marketing Intern",
    company: "NextGen Marketing Solutions",
    place: "Dhaka, Bangladesh",
    current: false,
    bullets: [
      "Assisted with keyword research and website SEO audits.",
      "Prepared SEO recommendations for client websites.",
      "Created social media content for Facebook and Instagram campaigns.",
      "Conducted competitor research and collected digital marketing insights.",
      "Assisted in preparing weekly campaign performance reports.",
      "Supported content optimization and basic link-building activities.",
    ],
  },
];

const projects = [
  {
    number: "01",
    type: "Automation workflow",
    title: "AI-Powered SEO Audit Automation",
    description:
      "An automated workflow that turns website analysis into structured, actionable SEO reporting.",
    stack: ["n8n", "AI", "Google Sheets", "Gmail"],
    points: [
      "Automated website analysis and structured SEO report generation.",
      "Reports cover technical SEO, metadata, content, recommendations, and priority issues.",
      "Integrated automated email delivery for completed SEO reports.",
    ],
    icon: Search,
    accent: "mint",
  },
  {
    number: "02",
    type: "Customer experience",
    title: "AI Customer Support Automation",
    description:
      "A conversational support workflow designed to answer product questions and assist with orders.",
    stack: ["n8n", "AI Agents", "WhatsApp", "Google Sheets"],
    points: [
      "Connected product information and FAQ data to an AI agent.",
      "Designed responses for product questions, prices, and stock information.",
      "Collected customer orders and integrated WhatsApp messaging.",
    ],
    icon: MessageCircle,
    accent: "coral",
  },
];

const certifications = [
  "Google Analytics Certification",
  "Google Search Console & SEO Fundamentals",
  "Digital Marketing Fundamentals",
  "Technical SEO Fundamentals",
  "Social Media Marketing Certification",
];

const languages = [
  ["English", "Professional Working Proficiency"],
  ["Bengali", "Native"],
  ["Hindi", "Conversational"],
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}

function ArrowButton({ href, children, variant = "dark", download = false }: { href: string; children: React.ReactNode; variant?: "dark" | "light" | "outline"; download?: boolean }) {
  return (
    <a className={`button button--${variant}`} href={href} download={download} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span>{children}</span>
      {download ? <Download size={16} strokeWidth={2.2} /> : <ArrowUpRight size={16} strokeWidth={2.2} />}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="container site-nav__inner">
          <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Asif Ull Haque home">
            <span className="wordmark__mark">AU</span>
            <span className="wordmark__text">Asif Ull Haque</span>
          </a>
          <nav className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={`#${href}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="site-nav__linkedin" href={LINKEDIN_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
              LinkedIn <ExternalLink size={13} />
            </a>
          </nav>
          <div className="site-nav__actions">
            <a className="nav-cv" href={CV_URL} download>Download CV <Download size={14} /></a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid-glow" aria-hidden="true" />
          <div className="container hero__layout">
            <div className="hero__content reveal is-visible">
              <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Open to digital growth opportunities</p>
              <h1 id="hero-title">Digital growth,<br /><em>made useful.</em></h1>
              <p className="hero__lede">I’m <strong>Asif Ull Haque</strong>, a Digital Marketing &amp; SEO Specialist building search strategies, content systems, and AI-assisted workflows that help businesses move forward.</p>
              <div className="hero__actions">
                <ArrowButton href="#contact" variant="light">Let&apos;s connect</ArrowButton>
                <ArrowButton href={LINKEDIN_URL} variant="outline">View LinkedIn</ArrowButton>
              </div>
              <div className="hero__meta">
                <span><MapPin size={15} /> Dhaka, Bangladesh</span>
                <span><CircleDot size={13} className="hero__pulse" /> Available for opportunities</span>
              </div>
            </div>
            <div className="hero__visual reveal is-visible" aria-label="A visual summary of Asif's marketing focus">
              <div className="signal-card">
                <div className="signal-card__top"><span>Growth signal</span><span className="signal-card__live"><i /> live</span></div>
                <div className="signal-card__chart" aria-hidden="true">
                  <span className="chart-grid chart-grid--one" /><span className="chart-grid chart-grid--two" /><span className="chart-grid chart-grid--three" />
                  <svg viewBox="0 0 420 180" preserveAspectRatio="none"><defs><linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#b8f2d5" stopOpacity=".3" /><stop offset="100%" stopColor="#b8f2d5" stopOpacity="0" /></linearGradient></defs><path d="M0 155 C45 150 58 125 90 133 S133 114 156 120 S200 80 225 97 S265 85 287 62 S331 87 351 52 S390 33 420 11 V180 H0 Z" fill="url(#lineFill)" /><path d="M0 155 C45 150 58 125 90 133 S133 114 156 120 S200 80 225 97 S265 85 287 62 S331 87 351 52 S390 33 420 11" fill="none" stroke="#b8f2d5" strokeWidth="3" strokeLinecap="round" /></svg>
                  <div className="chart-label chart-label--one">visibility</div><div className="chart-label chart-label--two">intent</div><div className="chart-label chart-label--three">action</div>
                </div>
                <div className="signal-card__stats"><div><strong>SEO</strong><span>strategy</span></div><div><strong>AI</strong><span>automation</span></div><div><strong>+UX</strong><span>conversion</span></div></div>
              </div>
              <div className="hero__visual-tag hero__visual-tag--top"><Sparkles size={15} /> human + AI</div>
              <div className="hero__visual-tag hero__visual-tag--bottom"><MousePointer2 size={15} /> intent-led</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        </section>

        <section className="intro-strip" aria-label="Professional introduction">
          <div className="container intro-strip__inner reveal">
            <p className="intro-strip__label">01 / Introduction</p>
            <p className="intro-strip__text">A practical marketer who connects <span>search intent</span>, <span>useful content</span>, and <span>smarter systems</span> — with a strong analytical mindset and a bias toward learning by building.</p>
            <div className="intro-strip__stamp"><span>DH</span><small>01</small></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-section__layout">
            <div className="about-section__aside reveal"><p className="eyebrow">02 / About me</p><div className="aside-rule" /><p className="aside-note">Curious by default.<br />Analytical by practice.</p></div>
            <div className="about-section__main reveal">
              <SectionHeading eyebrow="The short version" title="Turning marketing questions into clearer next moves." description="My work sits at the intersection of SEO, content, social, analytics, and automation. I enjoy finding the signal in a noisy dataset, then turning that signal into something a team can actually use." />
              <div className="about-cards">
                <div className="about-card about-card--accent"><div className="about-card__number">01</div><h3>Search visibility</h3><p>From keyword research to technical audits, I build the foundation for brands to be found by the right audience.</p></div>
                <div className="about-card"><div className="about-card__number">02</div><h3>Better workflows</h3><p>I use AI and automation to reduce repetitive work and make research, reporting, and support more useful.</p></div>
              </div>
              <div className="about-facts"><div><span>Currently</span><strong>Digital Growth Agency</strong></div><div><span>Focus</span><strong>SEO · AI · digital growth</strong></div><div><span>Based in</span><strong>Dhaka, Bangladesh</strong></div></div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-topline reveal"><SectionHeading eyebrow="03 / Experience" title="Learning through real work." description="Hands-on experience across agency-side SEO, content, social campaigns, analytics, and reporting." /><span className="section-index">02 roles</span></div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item reveal" key={item.role}>
                  <div className="experience-item__rail"><span className={`experience-item__dot ${item.current ? "experience-item__dot--current" : ""}`} /><span className="experience-item__line" /></div>
                  <div className="experience-item__date">{item.period}</div>
                  <div className="experience-item__body"><div className="experience-item__heading"><div><p className="role-kicker">{item.current ? "Current role" : `Role ${String(index + 1).padStart(2, "0")}`}</p><h3>{item.role}</h3><p className="company">{item.company} <span>·</span> {item.place}</p></div>{item.current ? <span className="status-pill">Present</span> : null}</div><ul>{item.bullets.map((bullet) => <li key={bullet}><Check size={14} />{bullet}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-topline reveal"><SectionHeading eyebrow="04 / Selected projects" title="Built to make work flow." description="A couple of practical systems that pair marketing thinking with automation and AI." /><span className="section-index">02 builds</span></div>
            <div className="projects-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return <article className={`project-card project-card--${project.accent} reveal`} key={project.title}><div className="project-card__top"><span className="project-card__number">{project.number}</span><span className="project-card__type">{project.type}</span><Icon className="project-card__icon" size={25} strokeWidth={1.5} /></div><h3>{project.title}</h3><p className="project-card__description">{project.description}</p><div className="project-card__stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><ul>{project.points.map((point) => <li key={point}><span /><p>{point}</p></li>)}</ul><div className="project-card__footer"><span>Workflow concept &amp; build</span><ArrowUpRight size={18} /></div></article>;
              })}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-topline reveal"><SectionHeading eyebrow="05 / Skills & toolkit" title="A broad toolkit, a focused approach." description="The skills and technologies listed here are taken directly from my CV." /><span className="section-index">16+ skills</span></div>
            <div className="skill-groups">
              {skillGroups.map((group, groupIndex) => { const Icon = group.icon; return <article className="skill-group reveal" key={group.label}><div className="skill-group__header"><span className="skill-group__index">0{groupIndex + 1}</span><Icon size={21} strokeWidth={1.7} /><h3>{group.label}</h3></div><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}
            </div>
            <div className="toolkit reveal"><div className="toolkit__heading"><p className="eyebrow">Tools &amp; technologies</p><p>Comfortable moving from insight to execution.</p></div><div className="toolkit__rows">{toolRows.map(([label, tools]) => <div className="toolkit__row" key={label}><strong>{label}</strong><span>{tools}</span></div>)}</div></div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container education-section__layout">
            <div className="education-section__intro reveal"><p className="eyebrow">06 / Education</p><h2>Grounded in business.<br /><em>Curious about what&apos;s next.</em></h2><p>Currently pursuing a Bachelor of Business Administration at the University of Dhaka, with coursework connecting marketing, communication, behavior, and analytics.</p></div>
            <div className="education-card reveal"><div className="education-card__icon"><GraduationCap size={25} /></div><p className="role-kicker">2022 — 2026</p><h3>Bachelor of Business Administration (BBA)</h3><p className="company">University of Dhaka <span>·</span> Dhaka, Bangladesh</p><div className="education-card__coursework"><span>Relevant coursework</span><p>Digital Marketing · Marketing Management · Business Communication · Consumer Behavior · Business Analytics</p></div></div>
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="container credentials-grid">
            <div className="credential-block reveal"><SectionHeading eyebrow="07 / Certifications" title="Keep learning. Keep sharpening." /><div className="cert-list">{certifications.map((cert, index) => <div className="cert-item" key={cert}><span>0{index + 1}</span><p>{cert}</p><Check size={15} /></div>)}</div></div>
            <div className="credential-side reveal"><div className="language-block"><div className="credential-heading"><Languages size={18} /><h3>Languages</h3></div>{languages.map(([language, level]) => <div className="language-item" key={language}><span>{language}</span><small>{level}</small></div>)}</div><div className="additional-block"><div className="credential-heading"><Sparkles size={18} /><h3>Working style</h3></div><p>Strong analytical and problem-solving skills, comfortable with data, reports, marketing analytics, and AI-assisted digital marketing workflows.</p></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__pattern" aria-hidden="true" />
          <div className="container contact-section__layout">
            <div className="contact-section__content reveal"><p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> 08 / Contact</p><h2>Have a growth question?<br /><em>Let&apos;s talk it through.</em></h2><p>I&apos;m interested in SEO, digital growth, marketing automation, and AI-powered business solutions.</p><div className="contact-section__actions"><ArrowButton href="mailto:asifullhaque017@gmail.com" variant="light">Email me</ArrowButton><ArrowButton href={LINKEDIN_URL} variant="outline">Connect on LinkedIn</ArrowButton></div></div>
            <div className="contact-section__details reveal"><a href="mailto:asifullhaque017@gmail.com"><Mail size={18} /><span>asifullhaque017@gmail.com</span><ArrowUpRight size={16} /></a><a href="tel:+8801700123456"><BriefcaseBusiness size={18} /><span>+880 1700-123456</span><ArrowUpRight size={16} /></a><div><MapPin size={18} /><span>Dhaka, Bangladesh</span></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container site-footer__inner"><a className="wordmark" href="#top"><span className="wordmark__mark">AU</span><span className="wordmark__text">Asif Ull Haque</span></a><p>Digital Marketing &amp; SEO Specialist</p><div className="site-footer__links"><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a><a href={CV_URL} download aria-label="Download CV"><FileText size={17} /></a><a href="#top" aria-label="Back to top"><ArrowUp size={17} /></a></div></div><div className="container site-footer__bottom"><span>© {new Date().getFullYear()} Asif Ull Haque</span><span>Built with intent.</span></div></footer>
    </div>
  );
}
