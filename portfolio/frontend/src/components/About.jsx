import { profile } from "../data/portfolioData";

export default function About() {
  const { education } = profile;
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="path-tag">~/about</span>
          <h2>A little context</h2>
        </div>

        <div className="about-grid">
          <p className="about-text">
            I'm {profile.name}, a computer science student building toward a career in
            full-stack development. My work leans on JavaScript and Python, RESTful APIs,
            and cloud fundamentals from AWS — with a steady curiosity for where AI tooling
            fits into a developer's day-to-day workflow. I like projects that force me to
            think end-to-end: data model, API, interface, deployment.
          </p>

          <div className="edu-card card">
            <span className="eyebrow">education</span>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school muted">{education.school}</p>
            <div className="edu-meta">
              <span className="tag">{education.period}</span>
              <span className="tag">Score: {education.score}</span>
            </div>
            <p className="edu-desc muted">{education.description}</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .about-text {
          font-size: 1.05rem;
          color: var(--text);
          max-width: 52ch;
        }
        .edu-card {
          padding: 28px;
        }
        .edu-degree {
          font-size: 1.15rem;
          margin-top: 10px;
          margin-bottom: 6px;
        }
        .edu-school {
          margin-bottom: 16px;
        }
        .edu-meta {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .edu-desc {
          font-size: 0.92rem;
        }
        @media (max-width: 780px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
