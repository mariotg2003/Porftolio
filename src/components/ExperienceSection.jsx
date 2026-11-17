import SectionHeading from "./SectionHeading.jsx";

function ExperienceSection() {
  return (
    <section
      className="content-section tinted-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Professional background"
          title="Experience"
          description="Hands-on experience building data solutions for a production product."
          id="experience-title"
        />
        <article className="experience-card">
          <div className="experience-topline">
            <div>
              <p className="experience-company">ISOTROL · Sevilla</p>
              <h3>Backend Developer</h3>
            </div>
            <span className="experience-date">2023 — Present</span>
          </div>
          <p className="experience-description">
            Development of Python code for large-scale data extraction and
            subsequent processing according to technical specifications, aimed
            at visualizing the data in various types of charts within the APM
            product.
          </p>
          <a
            className="text-link"
            href="https://www.isotrol.com/es"
            target="_blank"
            rel="noreferrer"
          >
            Visit ISOTROL <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default ExperienceSection;
