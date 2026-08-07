import { PageShell } from "../components/SiteChrome";
import { sitePath } from "../lib/sitePath";
import "./people.css";

const members = [
  {
    name: "Minhan Park",
    role: "Postdoctoral fellow · co-advised with Dr. Weber · 2024–",
    image: "/images/people/minhan-park.jpg"
  },
  {
    name: "Bin Bai",
    role: "Graduate student · 2021–",
    image: "/images/people/bin-bai.jpg"
  },
  {
    name: "Shreya Suri",
    role: "Graduate student · 2022–",
    image: "/images/people/shreya-suri.jpg"
  },
  {
    name: "Longkun He",
    role: "Graduate student · 2024–",
    image: "/images/people/longkun-he.jpg"
  }
];
const alumni = ["Nara Shin · Graduate student, 2020–2023 · PhD student at Purdue", "Yuhan Yang · Postdoctoral fellow, 2024–2025 · California Air Resources Board", "Bingqing Zhang · Graduate student, 2021–2025 · Postdoctoral fellow, University of Chicago", "Lifei Yin · Graduate student, 2021–2025 · California Air Resources Board"];

export default function PeoplePage() {
  return <PageShell><main>
    <section className="page-hero navy"><p className="kicker">PEOPLE</p><h1>People make<br />the lab.</h1><p>We are a collaborative group of researchers learning from one another and from the atmosphere.</p></section>
    <section className="page-body roster people-roster">
      <section className="people-section pi-section">
        <div className="people-section-heading"><p className="kicker">PRINCIPAL INVESTIGATOR</p><h2>Pengfei Liu</h2></div>
        <div className="pi-profile">
          <div className="pi-copy"><p>Pengfei Liu is the Elwood P. “Doc” Blanchard Early Career Professor and an Associate Professor in Georgia Tech’s School of Earth and Atmospheric Sciences. His group combines laboratory experiments, field measurements, and atmospheric chemistry modeling to improve understanding of atmospheric aerosol processes and properties.</p><p><b>Appointments:</b> Elwood P. “Doc” Blanchard Early Career Professor, Georgia Tech EAS (2026–); Associate Professor, Georgia Tech EAS (August 2026–); Assistant Professor, Georgia Tech EAS (2020–2026); Postdoctoral Fellow, Harvard Atmospheric Chemistry Modeling Group (2018–2020).</p><p><b>Education:</b> Ph.D., Harvard University (2017); M.S. and B.S., Peking University.</p><a className="quiet-link dark" href="mailto:pengfei.liu@eas.gatech.edu">pengfei.liu@eas.gatech.edu <span>→</span></a></div>
          <img className="profile-photo pi-photo" src={sitePath("/images/people/pengfei-liu.jpg")} alt="Pengfei Liu" />
        </div>
      </section>
      <section className="people-section">
        <div className="people-section-heading"><p className="kicker">CURRENT MEMBERS</p><h2>Group members</h2></div>
        <ul className="member-list">{members.map(({ name, role, image }) => <li key={name}><div className="member-copy"><strong>{name}</strong><span>{role}</span></div><img className="profile-photo" src={sitePath(image)} alt={name} loading="lazy" /></li>)}</ul>
      </section>
      <section className="people-section alumni-section">
        <div className="people-section-heading"><p className="kicker">ALUMNI</p><h2>Where they are now</h2></div>
        <ul className="alumni-list">{alumni.map(person => <li key={person}>{person}</li>)}</ul>
      </section>
    </section>
    <section className="join"><p className="kicker">JOIN THE GROUP</p><h2>We welcome curious,<br />careful scientists.</h2><p>Prospective students and collaborators are encouraged to contact Prof. Liu.</p><a className="quiet-link dark" href={sitePath("/contact")}>Contact the group <span>→</span></a></section>
  </main></PageShell>;
}

