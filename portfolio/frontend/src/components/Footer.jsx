import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="muted">© {new Date().getFullYear()} {profile.name}</span>
        <span className="path-tag">build passing</span>
      </div>
      <style>{`
        .footer {
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
      `}</style>
    </footer>
  );
}
