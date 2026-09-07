import { useEffect, useRef, useState } from "react";
import Header from "../components/HeaderBar";

/* ---------------- Icons (inline, dependency-free) ---------------- */

const icon = (path, extra) => (props) => (
  <svg
    width={props.size || 18}
    height={props.size || 18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
    {extra}
  </svg>
);

const PinIcon = icon(
  <>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </>
);
const CapIcon = icon(
  <>
    <path d="M2 9l10-4 10 4-10 4-10-4z" />
    <path d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
  </>
);
const BadgeIcon = icon(
  <>
    <circle cx="12" cy="8" r="5.2" />
    <path d="M8.2 12.6L7 21l5-2.4 5 2.4-1.2-8.4" />
  </>
);
const CodeIcon = icon(
  <>
    <path d="M8 6l-5.5 6L8 18" />
    <path d="M16 6l5.5 6L16 18" />
  </>
);
const KeyIcon = icon(
  <>
    <circle cx="7.5" cy="15.5" r="4.5" />
    <path d="M10.6 12.4L20 3M17 6l3 3M14 9l2.5 2.5" />
  </>
);
const DbIcon = icon(
  <>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5V18c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5" />
    <path d="M4.5 11.8c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </>
);
const CloudIcon = icon(
  <path d="M7 18a4.5 4.5 0 0 1-.7-8.9A5.5 5.5 0 0 1 17 8a4 4 0 0 1-.6 8H7z" />
);
const GlobeIcon = icon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9z" />
  </>
);
const BriefIcon = icon(
  <>
    <rect x="3" y="7.5" width="18" height="12" rx="2" />
    <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
    <path d="M3 12.5h18" />
  </>
);
const ArrowUpRight = icon(<path d="M7 17L17 7M9 7h8v8" />);
const GithubIcon = icon(
  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
);
const LinkedinIcon = icon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="2.5" />
    <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V13c0-1.4.9-2.4 2.2-2.4 1.3 0 2 .9 2 2.3v3.6" />
  </>
);
const PhoneIcon = icon(
  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .8-.2 1.1L6.6 10.8z" />
);
const ExternalIcon = icon(
  <>
    <path d="M14 4h6v6" />
    <path d="M20 4L10 14" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </>
);

/* ---------------- Data ---------------- */

const ABOUT_INFO = [
  { icon: PinIcon, label: "LOCATION", value: "Tunis, Tunisia" },
  { icon: CapIcon, label: "EDUCATION", value: "B.Sc. Computer Science — ESEN" },
  { icon: BadgeIcon, label: "CERTIFIED", value: "GOMYCODE Bootcamp 2025" },
];

const EXPERIENCE = [
  {
    period: "2026 — Present",
    tag: "Full-Stack",
    role: "Full-Stack Developer",
    org: "Association Tamaguit",
    project: "Tirjet (tirjet.com) · Tunis, Tunisia",
    points: [
      "Designed and developed Tirjet, a full-stack e-commerce platform promoting Amazigh artisanal heritage in Tunisia.",
      "Implemented multi-role architecture supporting visitors, artisans, and administrators.",
      "Built secure authentication and authorization using NextAuth.js.",
      "Integrated Cloudinary for image management and deployed on Vercel.",
      "Enhanced UX with responsive design and Framer Motion animations.",
    ],
  },
  {
    period: "2024",
    tag: "Personal",
    role: "Full-Stack Developer",
    org: "Personal Project",
    project: "ES Clothing Store · esseket.duckdns.org",
    points: [
      "Developed a complete e-commerce platform using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented authentication, product management, shopping cart and order processing.",
      "Built RESTful APIs and optimized database operations for improved performance.",
    ],
  },
  {
    period: "Internship",
    tag: "Internship",
    role: "Full-Stack Developer Intern",
    org: "Tunisie Telecom",
    project: "Ticketing Support System · Tunis, Tunisia",
    points: [
      "Developed a ticketing support system to streamline customer request management.",
      "Built an admin dashboard for real-time ticket monitoring and resolution.",
      "Improved communication workflows between technical teams and customers.",
    ],
  },
];

const PROJECTS = [
  {
    category: "CULTURAL MARKETPLACE",
    title: "Tirjet",
    desc: "Full-stack e-commerce platform promoting Amazigh artisanal heritage with multi-role architecture.",
    tags: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    category: "E-COMMERCE",
    title: "ES Clothing Store",
    desc: "Complete online store with authentication, cart, orders, and admin management.",
    tags: ["React.js", "Express.js", "MongoDB", "Bootstrap"],
  },
  {
    category: "ENTERPRISE TOOL",
    title: "Ticketing System",
    desc: "Real-time support ticket dashboard built during internship at Tunisie Telecom.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
];

const SKILLS = [
  {
    icon: CodeIcon,
    title: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Bootstrap"],
  },
  {
    icon: KeyIcon,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "NextAuth.js", "JWT Auth"],
  },
  {
    icon: DbIcon,
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "SQL", "NoSQL"],
  },
  {
    icon: CloudIcon,
    title: "DevOps & Cloud",
    items: ["Docker", "Linux", "VPS", "CI/CD", "Vercel", "Cloudinary", "AWS Basics"],
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "Professional" },
  { name: "Spanish", level: "Basic" },
];

/* ---------------- Reveal-on-scroll hook ---------------- */

function useReveal(options) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);
  return ref;
}

function Reveal({ as: Tag = "div", stagger = false, className = "", children, ...rest }) {
  const ref = useReveal();
  const base = stagger ? "reveal-stagger" : "reveal";
  return (
    <Tag ref={ref} className={`${base} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------------- Terminal typing effect ---------------- */

const TERMINAL_LINES = [
  { tokens: [["punc", "const "], ["var", "developer "], ["punc", "= {"]] },
  { tokens: [["prop", "  name"], ["punc", ": "], ["str", '"Mohamed Melek Esseket"'], ["punc", ","]] },
  { tokens: [["prop", "  role"], ["punc", ": "], ["str", '"Full-Stack Developer"'], ["punc", ","]] },
  { tokens: [["prop", "  stack"], ["punc", ": ["], ["str", '"MERN"'], ["punc", ", "], ["str", '"Next.js"'], ["punc", "],"]] },
  { tokens: [["prop", "  status"], ["punc", ": "], ["fn", "available"], ["punc", "(),"]] },
  { tokens: [["punc", "};"]] },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useReveal({ threshold: 0.4 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!started) return;
    if (visibleLines >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 320);
    return () => clearTimeout(t);
  }, [started, visibleLines]);

  return (
    <div ref={ref} className="terminal reveal">
      <div className="terminal-bar">
        <span></span>
        <span></span>
        <span></span>
        <span className="filename">profile.js</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            <span className="ln">{i + 1}</span>
            {line.tokens.map(([kind, text], j) => (
              <span key={j} className={`tok-${kind}`}>
                {text}
              </span>
            ))}
            {i === visibleLines - 1 && visibleLines < TERMINAL_LINES.length && (
              <span className="cursor-blink"></span>
            )}
          </div>
        ))}
        {visibleLines >= TERMINAL_LINES.length && (
          <div>
            <span className="ln"></span>
            <span className="cursor-blink"></span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="hero-badge">
                <span className="pulse"></span>
                Available for new opportunities
              </span>
              <h1 className="hero-title">
                Mohamed Melek
                <br />
                <span className="grad">Esseket</span>
              </h1>
              <p className="hero-sub">
                Full-Stack Web Developer specializing in the <b>MERN Stack</b> and{" "}
                <b>Next.js</b>. Building modern, scalable web applications.
              </p>
              <div className="hero-cta">
                <a
                  href="#projects"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="btn btn-ghost"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in touch
                </a>
              </div>
              <div className="hero-socials">
                <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a className="icon-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a className="icon-link" href="mailto:meleksaket2003@gmail.com" aria-label="Email">
                  <MailIconWrap />
                </a>
              </div>
            </div>
            <Terminal />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="file-tag">01</span>
              <h2>About</h2>
              <span className="rule"></span>
            </Reveal>

            <Reveal>
              <p className="about-copy">
                Motivated Full-Stack Web Developer specializing in the <b>MERN Stack</b>{" "}
                (MongoDB, Express.js, React.js, Node.js) and <b>Next.js</b>. Experienced in
                developing modern, responsive web applications, e-commerce platforms, and
                enterprise systems. Passionate about creating scalable solutions and
                continuously improving my craft.
              </p>
            </Reveal>

            <Reveal as="div" stagger className="info-grid">
              {ABOUT_INFO.map(({ icon: Icon, label, value }) => (
                <div className="info-card" key={label}>
                  <div className="icon-wrap">
                    <Icon />
                  </div>
                  <div className="label">{label}</div>
                  <div className="value">{value}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section alt">
          <div className="container">
            <Reveal className="section-head">
              <span className="file-tag">02</span>
              <h2>Experience</h2>
              <span className="rule"></span>
            </Reveal>

            <div className="timeline">
              {EXPERIENCE.map((job) => (
                <Reveal as="div" className="timeline-item" key={job.role + job.period}>
                  <div className="timeline-head">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-tag">{job.tag}</span>
                  </div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <p className="timeline-org">
                    <b>{job.org}</b>
                  </p>
                  <p className="timeline-project">{job.project}</p>
                  <ul className="timeline-list">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="file-tag">03</span>
              <h2>Projects</h2>
              <span className="rule"></span>
            </Reveal>

            <Reveal as="div" stagger className="projects-grid">
              {PROJECTS.map((project) => (
                <div className="project-card" key={project.title}>
                  <div className="project-top">
                    <div className="project-icon">
                      <BriefIcon />
                    </div>
                    <div className="project-link">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section alt">
          <div className="container">
            <Reveal className="section-head">
              <span className="file-tag">04</span>
              <h2>Skills &amp; Tools</h2>
              <span className="rule"></span>
            </Reveal>

            <Reveal as="div" stagger className="skills-grid">
              {SKILLS.map(({ icon: Icon, title, items }) => (
                <div className="skill-card" key={title}>
                  <div className="skill-card-head">
                    <div className="icon-wrap">
                      <Icon />
                    </div>
                    <h3>{title}</h3>
                  </div>
                  <div className="pill-row">
                    {items.map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>

            <div className="secondary-grid">
              <Reveal className="skill-card">
                <div className="skill-card-head">
                  <div className="icon-wrap">
                    <GlobeIcon />
                  </div>
                  <h3>Languages</h3>
                </div>
                <div>
                  {LANGUAGES.map((lang) => (
                    <div className="lang-row" key={lang.name}>
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="skill-card">
                <div className="skill-card-head">
                  <div className="icon-wrap">
                    <BadgeIcon />
                  </div>
                  <h3>Certifications</h3>
                </div>
                <div className="cert-item">
                  <h4>Full-Stack Web Developer</h4>
                  <p>GOMYCODE — April 2025</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="file-tag">05</span>
              <h2>Let&apos;s build something</h2>
              <span className="rule"></span>
            </Reveal>

            <Reveal className="contact-panel">
              <h3>Have a project in mind?</h3>
              <p>I&apos;m open to freelance work, collaborations and full-time opportunities. Let&apos;s talk.</p>
              <div className="contact-cta">
                <a className="btn btn-primary" href="mailto:meleksaket2003@gmail.com">
                  <MailIconWrap />
                  meleksaket2003@gmail.com
                </a>
                <a className="btn btn-ghost" href="tel:+21699993286">
                  <PhoneIcon size={16} />
                  +216 99 993 286
                </a>
              </div>
              <div className="contact-social">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a href="#home">
                  <ExternalIcon size={16} /> Portfolio
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="site-footer">
          © 2026 Mohamed Melek Esseket. Crafted with care.
        </footer>
      </main>
    </>
  );
}

function MailIconWrap(props) {
  return (
    <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}