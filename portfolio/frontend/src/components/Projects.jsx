import { useApi } from "../useApi";
import { fallbackProjects } from "../data/portfolioData";

export default function Projects() {
  const { data: projects } = useApi("/projects", fallbackProjects);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="path-tag">~/projects</span>
          <h2>Things I've built</h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project._id} className="project-card card">
              <div className="project-header">
                <div>
                  <h3>{project.title}</h3>
                  <p className="muted project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-links">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn">
                      Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live demo
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              {project.highlights?.length > 0 && (
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="project-tags">
                {project.techStack?.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .project-card {
          padding: 32px;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .project-subtitle {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          margin-top: 6px;
        }
        .project-links {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .project-desc {
          font-size: 1rem;
          max-width: 68ch;
          margin-bottom: 18px;
        }
        .project-highlights {
          margin: 0 0 22px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .project-highlights li {
          color: var(--text-muted);
          font-size: 0.94rem;
        }
        .project-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
}
