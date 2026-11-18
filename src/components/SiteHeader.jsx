import { socialLinks } from "../data/portfolio.js";

function SiteHeader({ text, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="Mario Tirado portfolio">
          <span className="brand-mark">MT</span>
          <span className="brand-name">Mario Tirado</span>
        </a>
        <div className="header-actions">
          <nav className="social-profiles" aria-label={text.socialProfiles}>
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
          <label className="language-selector">
            <span className="visually-hidden">Language / Idioma</span>
            <select
              value={language}
              onChange={(event) => onLanguageChange(event.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
