import { useState, useEffect, useCallback } from "react";
import es from '../images/es1.png'
const NAV_ITEMS = [
  { id: "about", label: "about.jsx" },
  { id: "experience", label: "experience.jsx" },
  { id: "projects", label: "projects.jsx" },
  { id: "skills", label: "skills.jsx" },
  { id: "contact", label: "contact.jsx" },
];

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a
            href="#home"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <img src={es} width={'200px'} height={'70px'} alt="" />
            {/* <span className="dot-cluster">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Melek<span className="accent">.</span> */}
          </a>

          <nav className="tab-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="file-dot"></span>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              <MailIcon />
              Hire me
            </a>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="file-dot"></span>
            {item.label}
          </button>
        ))}
        <a
          href="#contact"
          className="btn btn-primary mobile-cta"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("contact");
          }}
        >
          <MailIcon />
          Hire me
        </a>
      </div>
    </>
  );
}