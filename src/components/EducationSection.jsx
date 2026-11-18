import { studies } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function EducationSection({ text, language }) {
  return (
    <section className="content-section" aria-labelledby="education-title">
      <div className="site-container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          id="education-title"
        />
        <div className="study-grid">
          {studies.map((study) => (
            <article className="study-card" key={study.title.en}>
              <p className="study-years">{study.years}</p>
              <h3>{study.title[language]}</h3>
              <p className="study-school">{study.school[language]}</p>
              <a
                href={study.href}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {text.visit} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
