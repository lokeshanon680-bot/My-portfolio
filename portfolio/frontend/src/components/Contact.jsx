import { useState } from "react";
import { profile } from "../data/portfolioData";
import { API_BASE } from "../useApi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message === "Failed to fetch"
          ? "Couldn't reach the API. Is the backend running?"
          : err.message
      );
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="path-tag">~/contact</span>
          <h2>Let's talk</h2>
          <p className="muted" style={{ marginTop: 12, maxWidth: "56ch" }}>
            Have a role, a project, or just want to say hi? Send a message below, or reach
            me directly.
          </p>
        </div>

        <div className="contact-grid">
          <form className="card contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                placeholder="What's on your mind?"
              />
            </label>

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="form-status form-status-ok">Message sent. I'll get back to you soon.</p>
            )}
            {status === "error" && <p className="form-status form-status-err">{errorMsg}</p>}
          </form>

          <div className="contact-direct card">
            <span className="eyebrow">direct</span>
            <ul className="contact-list">
              <li>
                <span className="muted">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span className="muted">Phone</span>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </li>
              <li>
                <span className="muted">GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  {profile.github.replace("https://", "")}
                </a>
              </li>
              <li>
                <span className="muted">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin.replace("https://", "")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 24px;
        }
        .contact-form {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .field input,
        .field textarea {
          font-family: var(--font-body);
          font-size: 0.95rem;
          background: var(--bg-panel);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 10px 12px;
          color: var(--text);
          resize: vertical;
        }
        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .form-status {
          font-size: 0.88rem;
          margin: 0;
        }
        .form-status-ok { color: var(--accent); }
        .form-status-err { color: var(--danger); }
        .contact-direct {
          padding: 28px;
        }
        .contact-list {
          list-style: none;
          margin: 18px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .contact-list li {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
        }
        .contact-list a {
          color: var(--accent);
          text-decoration: none;
          word-break: break-word;
        }
        .contact-list a:hover {
          text-decoration: underline;
        }
        @media (max-width: 780px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
