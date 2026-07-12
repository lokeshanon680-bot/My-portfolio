import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData";

const LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "${profile.name}",` },
  { indent: 1, text: `role: "${profile.role}",` },
  { indent: 1, text: `focus: ["Full-Stack", "Cloud", "AI"],` },
  { indent: 1, text: `status: "open to opportunities",` },
  { indent: 0, text: "};" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const current = LINES[visibleLines].text;
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="path-tag">~/lokesh-waran/portfolio $ whoami</span>
          <h1>
            Building for the web,
            <br />
            <span className="hero-accent">shipped from the cloud.</span>
          </h1>
          <p className="hero-lede muted">
            {profile.role} focused on full-stack development, with hands-on cloud foundations
            and a growing interest in applying AI to everyday engineering work.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label="Code editor showing developer profile object">
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: "#ef6a6a" }} />
            <span className="terminal-dot" style={{ background: "#f2b84b" }} />
            <span className="terminal-dot" style={{ background: "#4fd6c5" }} />
            <span className="terminal-title">profile.js</span>
          </div>
          <div className="terminal-body">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ paddingLeft: line.indent * 20 }}>
                <TokenizedLine text={line.text} />
              </div>
            ))}
            {visibleLines < LINES.length && (
              <div style={{ paddingLeft: LINES[visibleLines].indent * 20 }}>
                <TokenizedLine text={LINES[visibleLines].text.slice(0, charCount)} />
                <span className="caret" />
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 72px;
          padding-bottom: 96px;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero-copy h1 {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.1;
          margin-top: 18px;
          margin-bottom: 20px;
        }
        .hero-accent {
          color: var(--accent);
        }
        .hero-lede {
          font-size: 1.05rem;
          max-width: 46ch;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .terminal {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-panel);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(79,214,197,0.04);
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
        }
        .terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .terminal-title {
          margin-left: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .terminal-body {
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 0.92rem;
          min-height: 220px;
        }
        .caret {
          display: inline-block;
          width: 7px;
          height: 1em;
          background: var(--accent);
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

// Very small syntax highlighter tuned for this exact snippet shape.
function TokenizedLine({ text }) {
  const parts = [];
  const regex = /(".*?")|(\b\w+\b(?=:))|([{}[\],;])/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    if (match[1]) {
      parts.push(
        <span key={key++} style={{ color: "var(--accent-warm)" }}>
          {match[1]}
        </span>
      );
    } else if (match[2]) {
      parts.push(
        <span key={key++} style={{ color: "var(--accent)" }}>
          {match[2]}
        </span>
      );
    } else if (match[3]) {
      parts.push(
        <span key={key++} style={{ color: "var(--text-faint)" }}>
          {match[3]}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }
  return <code>{parts}</code>;
}
