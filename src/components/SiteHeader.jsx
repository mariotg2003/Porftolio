import { socialLinks } from "../data/portfolio.js";

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="Mario Tirado portfolio">
          <span className="brand-mark">MT</span>
          <span className="brand-name">Mario Tirado</span>
        </a>
        <nav className="social-profiles" aria-label="Social profiles">
          {socialLinks.map((link) => (
            <a
              className="social-link"
              href={link.href}
              key={link.name}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
