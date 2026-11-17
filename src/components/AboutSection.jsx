import SectionHeading from "./SectionHeading.jsx";

function AboutSection() {
  return (
    <section
      className="content-section about-section"
      aria-labelledby="about-title"
    >
      <div className="site-container about-content">
        <SectionHeading
          eyebrow="A little about me"
          title="Who am I?"
          id="about-title"
        />
        <div className="about-copy">
          <p>
            Developer with two years of experience, full availability, strong
            motivation, and a high sense of responsibility. Began professional
            career through internships during Higher Vocational Training in Web
            Application Development.
          </p>
          <p>
            Proactive individual with empathetic listening skills, committed to
            continuous learning and personal and professional growth. Motivated
            to contribute to the development of innovative solutions while
            strengthening knowledge and skills in the technology field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
