import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-links">
          <a className="footer-brand" href="#home">ZAQONE</a>
          <div className="footer-socials"><SocialLinks /></div>
          <a href="#home" className="back-to-top">Back to top <ArrowUp size={17} aria-hidden="true" /></a>
        </div>
        <div className="footer-credits">
          <p>© 2026 ZAQONE. All rights reserved.</p>
          <p>Built with Next.js, Tailwind &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
