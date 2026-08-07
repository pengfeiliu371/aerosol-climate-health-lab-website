import { PageShell } from "../components/SiteChrome";
import "./people.css";

const members = [
  {
    name: "Minhan Park",
    role: "Postdoctoral fellow Â· co-advised with Dr. Weber Â· 2024â€“",
    image: "/images/people/minhan-park.jpg"
  },
  {
    name: "Bin Bai",
    role: "Graduate student Â· 2021â€“",
    image: "/images/people/bin-bai.jpg"
  },
  {
    name: "Shreya Suri",
    role: "Graduate student Â· 2022â€“",
    image: "/images/people/shreya-suri.jpg"
  },
  {
    name: "Longkun He",
    role: "Graduate student Â· 2024â€“",
    image: "/images/people/longkun-he.jpg"
  }
];
const alumni = ["Nara Shin Â· Graduate student, 2020â€“2023 Â· PhD student at Purdue", "Yuhan Yang Â· Postdoctoral fellow, 2024â€“2025 Â· California Air Resources Board", "Bingqing Zhang Â· Graduate student, 2021â€“2025 Â· Postdoctoral fellow, University of Chicago", "Lifei Yin Â· Graduate student, 2021â€“2025 Â· California Air Resources Board"];

export default function PeoplePage() {
  return <PageShell><main>
    <section className="page-hero navy"><p className="kicker">PEOPLE</p><h1>People make<br />the lab.</h1><p>We are a collaborative group of researchers learning from one another and from the atmosphere.</p></section>
    <section className="page-body roster people-roster">
      <section className="people-section pi-section">
        <div className="people-section-heading"><p className="kicker">PRINCIPAL INVESTIGATOR</p><h2>Pengfei Liu</h2></div>
        <div className="pi-profile">
          <div className="pi-copy"><p>Pengfei Liu is the Elwood P. â€œDocâ€ Blanchard Early Career Professor and an Associate Professor in Georgia Techâ€™s School of Earth and Atmospheric Sciences. His group combines laboratory experiments, field measurements, and atmospheric chemistry modeling to improve understanding of atmospheric aerosol processes and properties.</p><p><b>Appointments:</b> Elwood P. â€œDocâ€ Blanchard Early Career Professor, Georgia Tech EAS (2026â€“); Associate Professor, Georgia Tech EAS (August 2026â€“); Assistant Professor, Georgia Tech EAS (2020â€“2026); Postdoctoral Fellow, Harvard Atmospheric Chemistry Modeling Group (2018â€“2020).</p><p><b>Education:</b> Ph.D., Harvard University (2017); M.S. and B.S., Peking University.</p><a className="quiet-link dark" href="mailto:pengfei.liu@eas.gatech.edu">pengfei.liu@eas.gatech.edu <span>â†’</span></a></div>
          <img className="profile-photo pi-photo" src="/images/people/pengfei-liu.jpg" alt="Pengfei Liu" />
        </div>
      </section>
      <section className="people-section">
        <div className="people-section-heading"><p className="kicker">CURRENT MEMBERS</p><h2>Group members</h2></div>
        <ul className="member-list">{members.map(({ name, role, image }) => <li key={name}><div className="member-copy"><strong>{name}</strong><span>{role}</span></div><img className="profile-photo" src={image} alt={name} loading="lazy" /></li>)}</ul>
      </section>
      <section className="people-section alumni-section">
        <div className="people-section-heading"><p className="kicker">ALUMNI</p><h2>Where they are now</h2></div>
        <ul className="alumni-list">{alumni.map(person => <li key={person}>{person}</li>)}</ul>
      </section>
    </section>
    <section className="join"><p className="kicker">JOIN THE GROUP</p><h2>We welcome curious,<br />careful scientists.</h2><p>Prospective students and collaborators are encouraged to contact Prof. Liu.</p><a className="quiet-link dark" href="/contact">Contact the group <span>â†’</span></a></section>
  </main></PageShell>;
}

