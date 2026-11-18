import { useEffect, useState } from "react";
import coursesUrl from "../../data/cursos.json?url&no-inline";
import SectionHeading from "./SectionHeading.jsx";

function CertificationsSection({ text }) {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
      try {
        const response = await fetch(coursesUrl, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Could not load certifications (${response.status})`);
        }

        const data = await response.json();
        if (!Array.isArray(data.cursos)) {
          throw new Error("The certifications data has an invalid format");
        }
        setCourses(data.cursos);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          console.error("Error al cargar las certificaciones:", loadError);
          setError(true);
        }
      }
    }

    loadCourses();
    return () => controller.abort();
  }, []);

  return (
    <section className="content-section" aria-labelledby="certifications-title">
      <div className="site-container">
        <SectionHeading
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          id="certifications-title"
        />
        {error ? (
          <p role="alert" className="load-error">
            {text.error}
          </p>
        ) : (
          <div className="certifications-track" id="cursos">
            {courses.map((course) => (
              <article className="cert-card" key={course.id}>
                <p className="cert-provider">{course.description}</p>
                <h3>{course.title}</h3>
                <p className="cert-date">{course.duration}</p>
                <a
                  href={course.link}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.visit} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CertificationsSection;
