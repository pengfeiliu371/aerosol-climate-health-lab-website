import { PageShell } from "../components/SiteChrome";
import "./teaching.css";

const courses = [
  {
    code: "EAS 3603",
    title: "Thermodynamics of the Earth System",
    offerings: ["Fall 2025", "Fall 2026"],
  },
  {
    code: "EAS 8803",
    title: "Clouds, Aerosols, and Climate",
    offerings: ["Fall 2022", "Fall 2023", "Fall 2024", "Spring 2026"],
  },
  {
    code: "EAS 6140",
    title: "Thermodynamics of Atmospheres and Oceans",
    offerings: [
      "Spring 2021 — co-taught with Dr. Jie He",
      "Spring 2022 — co-taught with Dr. Jie He",
      "Spring 2024",
    ],
  },
  {
    code: "EAS 2655",
    title: "Quantitative Techniques",
    offerings: [
      "Fall 2021 — co-taught with Dr. Taka Ito",
      "Spring 2023",
    ],
  },
];

export default function TeachingPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero teaching-hero">
          <p className="kicker">TEACHING</p>
          <h1 aria-label="Teaching the atmosphere as a connected system.">
            Teaching the atmosphere<br />as a <em>connected system.</em>
          </h1>
          <p>
            Courses in atmospheric thermodynamics, quantitative methods,
            aerosol–cloud–climate interactions, and Earth system science.
          </p>
        </section>

        <section className="page-body teaching-page">
          <p className="kicker">COURSES AT GEORGIA TECH</p>
          <div className="course-list">
            {courses.map(({ code, title, offerings }) => (
              <article className="course" key={code}>
                <p className="course-code">{code}</p>
                <div>
                  <h2>{title}</h2>
                  <ul aria-label={`${title} semesters taught`}>
                    {offerings.map((offering) => <li key={offering}>{offering}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
