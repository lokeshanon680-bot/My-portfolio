import { useApi } from "../useApi";
import { fallbackCertifications } from "../data/portfolioData";

export default function Certifications() {
  const { data: certs } = useApi("/skills/certifications", fallbackCertifications);

  return (
    <section id="certifications">
      <div className="wrap">
        <div className="section-head">
          <span className="path-tag">~/certifications</span>
          <h2>Courses & certifications</h2>
        </div>

        <div className="cert-grid">
          {certs.map((cert) => (
            <div key={cert._id} className="cert-card card">
              <div className="cert-top">
                <span className="eyebrow">{cert.issuer}</span>
                {cert.score && <span className="tag">{cert.score}</span>}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <span className="muted cert-date">{cert.date}</span>
              <p className="cert-desc muted">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .cert-card {
          padding: 24px;
        }
        .cert-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .cert-title {
          font-size: 1.05rem;
          margin-bottom: 4px;
        }
        .cert-date {
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .cert-desc {
          margin-top: 14px;
          font-size: 0.9rem;
        }
        @media (max-width: 780px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
