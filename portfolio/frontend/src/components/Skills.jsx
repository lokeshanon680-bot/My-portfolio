import { useApi } from "../useApi";
import { fallbackSkills } from "../data/portfolioData";

const CATEGORY_LABELS = {
  language: "Languages",
  web: "Web & Databases",
  tools: "Tools & Platforms",
  professional: "Professional",
};

const CATEGORY_ORDER = ["language", "web", "tools", "professional"];

export default function Skills() {
  const { data } = useApi("/skills", fallbackSkills);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="path-tag">~/skills</span>
          <h2>What I work with</h2>
        </div>

        <div className="skills-grid">
          {CATEGORY_ORDER.filter((cat) => data?.[cat]?.length).map((cat) => (
            <div key={cat} className="skill-group card">
              <span className="eyebrow">{CATEGORY_LABELS[cat]}</span>
              <ul className="skill-list">
                {data[cat].map((skill) => (
                  <li key={skill._id} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    {skill.blurb && <span className="skill-blurb muted">{skill.blurb}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-group {
          padding: 24px;
        }
        .skill-list {
          list-style: none;
          margin: 16px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .skill-item {
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-soft);
        }
        .skill-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .skill-name {
          display: block;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .skill-blurb {
          font-size: 0.88rem;
        }
        @media (max-width: 780px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
