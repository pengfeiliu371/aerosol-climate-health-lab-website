import { members, formerMembers, visitingScholars } from "../data/people";
import { PageShell } from "../components/SiteChrome";
import { sitePath } from "../lib/sitePath";
import "./people.css";

export default function PeoplePage() {
  return <PageShell><main>
    <section className="page-hero navy"><p className="kicker">PEOPLE</p><h1 aria-label="People make the lab.">People make<br />the lab.</h1><p>We are a collaborative group of researchers learning from one another and from the atmosphere.</p></section>
    <section className="page-body roster people-roster">
      <section className="people-section pi-section">
        <div className="people-section-heading"><p className="kicker">PRINCIPAL INVESTIGATOR</p><h2>Pengfei Liu</h2></div>
        <div className="pi-profile">
          <div className="pi-copy"><p>Pengfei Liu is the Elwood P. “Doc” Blanchard Early Career Professor and an Associate Professor in Georgia Tech’s School of Earth and Atmospheric Sciences. His group combines laboratory experiments, field measurements, and atmospheric chemistry modeling to improve understanding of atmospheric aerosol processes and properties.</p><p><b>Appointments:</b> Elwood P. “Doc” Blanchard Early Career Professor, Georgia Tech EAS (2026–); Associate Professor, Georgia Tech EAS (August 2026–); Assistant Professor, Georgia Tech EAS (2020–2026); Postdoctoral Fellow, Harvard Atmospheric Chemistry Modeling Group (2018–2020).</p><p><b>Education:</b> Ph.D., Harvard University (2017); M.S. and B.S., Peking University.</p><a className="quiet-link dark" href="mailto:pengfei.liu@eas.gatech.edu">pengfei.liu@eas.gatech.edu <span>→</span></a></div>
          <img className="profile-photo pi-photo" src={sitePath("/images/people/pengfei-liu.jpg")} alt="Pengfei Liu" decoding="async" />
        </div>
      </section>
      <section className="people-section">
        <div className="people-section-heading"><p className="kicker">CURRENT MEMBERS</p><h2>Group members</h2></div>
        <ul className="member-list">{members.map(({ name, role, image, initials }) => <li key={name}>
          <div className="member-copy"><strong>{name}</strong><span>{role}</span></div>
          {image ? <img className="profile-photo" src={sitePath(image)} alt={name} loading="lazy" decoding="async" /> : <div className="profile-photo profile-placeholder" role="img" aria-label={`${name} photograph forthcoming`}><span>{initials}</span><small>Photo forthcoming</small></div>}
        </li>)}</ul>
      </section>
      <section className="people-section alumni-section">
        <div className="people-section-heading"><p className="kicker">ALUMNI &amp; VISITORS</p><h2 aria-label="Former members and visiting scholars">Former members<br />&amp; visiting scholars</h2></div>
        <div className="alumni-groups">
          <section className="alumni-group">
            <h3>Former group members</h3>
            <div className="alumni-column-labels" aria-hidden="true"><span>Name</span><span>Role &amp; years</span><span>Current position</span></div>
            <ul className="alumni-list">{formerMembers.map(({ name, roleAndPeriod, currentPosition }) => <li key={name}>
              <strong>{name}</strong><span>{roleAndPeriod}</span><span>{currentPosition}</span>
            </li>)}</ul>
          </section>
          <section className="alumni-group visiting-group">
            <h3>Visiting scholars</h3>
            <div className="alumni-column-labels" aria-hidden="true"><span>Name</span><span>Home institution</span><span>Visit period</span></div>
            <ul className="alumni-list">{visitingScholars.map(({ name, homeInstitution, visitPeriod, honor }) => <li key={name}>
              <div className="alumni-name"><strong>{name}</strong>{honor ? <span className="alumni-honor">{honor}</span> : null}</div>
              <span>{homeInstitution}</span><span>{visitPeriod}</span>
            </li>)}</ul>
          </section>
        </div>
      </section>
    </section>
    <section className="join"><p className="kicker">JOIN THE GROUP</p><h2 aria-label="We welcome curious, careful scientists.">We welcome curious,<br />careful scientists.</h2><p>Prospective students and collaborators are encouraged to contact Prof. Liu.</p><a className="quiet-link dark" href={sitePath("/contact")}>Contact the group <span>→</span></a></section>
  </main></PageShell>;
}

