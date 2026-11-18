import profilePicture from "../../Img/foto.png";
import cvUrl from "../../data/CV.pdf";

function HeroSection({ text, language }) {
  function openContactForm() {
    window.open(
      `form.html?lang=${language}`,
      "_blank",
      "width=800,height=560,resizable=no,scrollbars=no,toolbar=no,location=no,status=no"
    );
  }

  return (
    <section className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="availability-dot" aria-hidden="true" />
            {text.role} <span aria-hidden="true">·</span> {text.location}
          </p>
          <h1>
            {text.greeting} <span>Mario Tirado.</span>
          </h1>
          <p className="hero-summary">
            {text.summary}
          </p>
          <div className="hero-actions">
            <a
              href={cvUrl}
              download="MarioTirado_CV"
              className="button button-primary"
            >
              {text.download} <span aria-hidden="true">↓</span>
            </a>
            <a href="#experience" className="button button-secondary">
              {text.explore}
            </a>
          </div>
          <ul className="skill-list" aria-label={text.skillsLabel}>
            <li>React</li>
            <li>Python</li>
            <li>AWS</li>
          </ul>
        </div>

        <div className="profile-card">
          <span className="profile-card-decoration" aria-hidden="true" />
          <p className="profile-card-eyebrow">{text.closerLook}</p>
          <button
            type="button"
            className="profile-trigger"
            onClick={openContactForm}
            aria-label={text.openContact}
          >
            <img id="profile-picture" src={profilePicture} alt="Mario Tirado" />
          </button>
          <div className="profile-caption">
            <div>
              <span className="profile-caption-label">{text.currently}</span>
              <span className="profile-caption-role">{text.role}</span>
              <span className="profile-caption-company">NTT DATA · Sevilla</span>
            </div>
            <button
              type="button"
              className="contact-shortcut"
              onClick={openContactForm}
            >
              {text.contact} <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
