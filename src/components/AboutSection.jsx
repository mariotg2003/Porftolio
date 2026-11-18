import SectionHeading from "./SectionHeading.jsx";

function AboutSection({ text }) {
  return (
    <section
      className="content-section about-section"
      aria-labelledby="about-title"
    >
      <div className="site-container about-content">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          id="about-title"
        />
        <div className="about-copy">
          <p>{text.first}</p>
          <p>{text.second}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
