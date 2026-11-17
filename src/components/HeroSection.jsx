function HeroSection() {
  function openContactForm() {
    window.open(
      "form.html",
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
            Backend Developer <span aria-hidden="true">·</span> Sevilla, Spain
          </p>
          <h1>
            Hi, I’m <span>Mario Tirado.</span>
          </h1>
          <p className="hero-summary">
            I build data-driven solutions and reliable software, turning complex
            information into something useful.
          </p>
          <div className="hero-actions">
            <a
              href="data/CV.pdf"
              download="MarioTirado_CV"
              className="button button-primary"
            >
              Download my CV <span aria-hidden="true">↓</span>
            </a>
            <a href="#experience" className="button button-secondary">
              Explore my experience
            </a>
          </div>
          <ul className="skill-list" aria-label="Areas of experience">
            <li>Python</li>
            <li>Data processing</li>
            <li>Web development</li>
          </ul>
        </div>

        <div className="profile-card">
          <span className="profile-card-decoration" aria-hidden="true" />
          <p className="profile-card-eyebrow">A closer look</p>
          <button
            type="button"
            className="profile-trigger"
            onClick={openContactForm}
            aria-label="Open contact form"
          >
            <img id="profile-picture" src="Img/foto.png" alt="Mario Tirado" />
          </button>
          <div className="profile-caption">
            <div>
              <span className="profile-caption-label">Currently</span>
              <span className="profile-caption-role">Backend Developer</span>
              <span className="profile-caption-company">ISOTROL · Sevilla</span>
            </div>
            <button
              type="button"
              className="contact-shortcut"
              onClick={openContactForm}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
