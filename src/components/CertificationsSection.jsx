import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

function CertificationsSection() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourses() {
      try {
        const response = await fetch("data/cursos.json", {
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
          setError("No se pudieron cargar las certificaciones.");
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
          eyebrow="Aprendizaje continuo"
          title="Certifications"
          description="Cursos y certificaciones que complementan mi experiencia."
          id="certifications-title"
        />
        {error ? (
          <p role="alert" className="load-error">
            {error}
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
                  View certification <span aria-hidden="true">↗</span>
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
