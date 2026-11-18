import { skills } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function SkillsSection({ text, language }) {
  return (
    <section className="content-section tinted-section" aria-labelledby="skills-title">
      <div className="site-container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          id="skills-title"
        />
        <div className="study-grid">
          {skills.map((skill) => (
            <article className="study-card skills-card" key={skill.title.en}>
              <h3>{skill.title[language]}</h3>
              <p className="study-school">
                {typeof skill.items === "string" ? skill.items : skill.items[language]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
