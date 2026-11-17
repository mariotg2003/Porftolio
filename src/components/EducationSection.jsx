import { studies } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function EducationSection() {
  return (
    <section className="content-section" aria-labelledby="education-title">
      <div className="site-container">
        <SectionHeading
          eyebrow="Education"
          title="Studies"
          description="A foundation in web application development and technology."
          id="education-title"
        />
        <div className="study-grid">
          {studies.map((study) => (
            <article className="study-card" key={study.title}>
              <p className="study-years">{study.years}</p>
              <h3>{study.title}</h3>
              <p className="study-school">{study.school}</p>
              <a
                href={study.href}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                View school <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
