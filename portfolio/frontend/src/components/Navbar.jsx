import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certifications" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-dot" aria-hidden="true" />
          lokesh<span className="muted">.dev</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              <span className="nav-link-path">~/</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile wrap">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              <span className="nav-link-path">~/</span>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(10, 15, 28, 0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .nav-scrolled {
          border-bottom-color: var(--border-soft);
          background: rgba(10, 15, 28, 0.92);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-brand {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          color: var(--text);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .nav-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
        .nav-links {
          display: flex;
          gap: 28px;
        }
        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        .nav-link-path {
          color: var(--text-faint);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav-toggle span {
          width: 20px;
          height: 2px;
          background: var(--text);
          display: block;
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-toggle { display: flex; }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding-bottom: 16px;
          }
          .nav-mobile .nav-link {
            padding: 10px 0;
            border-bottom: 1px solid var(--border-soft);
          }
        }
      `}</style>
    </header>
  );
}
