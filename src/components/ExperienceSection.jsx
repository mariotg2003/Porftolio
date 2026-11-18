import SectionHeading from "./SectionHeading.jsx";

function ExperienceSection({ text }) {
  return (
    <section
      className="content-section tinted-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          id="experience-title"
        />
        <article className="experience-card">
          <div className="experience-topline">
            <div>
              <p className="experience-company">NTT DATA · Sevilla</p>
              <h3>{text.fullStack}</h3>
            </div>
            <span className="experience-date">2026 — {text.present}</span>
          </div>
          <ul className="experience-description">
            {text.ntt.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="experience-card">
          <div className="experience-topline">
            <div>
              <p className="experience-company">ISOTROL · Sevilla</p>
              <h3>{text.backend}</h3>
            </div>
            <span className="experience-date">2023 — 2026</span>
          </div>
          <ul className="experience-description">
            {text.isotrol.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a
            className="text-link"
            href="https://www.isotrol.com/es"
            target="_blank"
            rel="noreferrer"
          >
            {text.visit} <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default ExperienceSection;
