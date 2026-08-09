import { PageShell } from "../components/SiteChrome";
import { ProtectedEmail } from "./ProtectedEmail";
import "./contact.css";

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero gold-page">
          <p className="kicker">CONTACT</p>
          <h1 aria-label="Questions, ideas, and collaborations.">
            Questions, ideas,<br />and <em>collaborations.</em>
          </h1>
          <p>
            For research inquiries, prospective student opportunities, or
            collaboration, please get in touch.
          </p>
        </section>

        <section className="page-body contact-page">
          <div>
            <p className="kicker">EMAIL</p>
            <ProtectedEmail />
          </div>
          <div>
            <p className="kicker">ADDRESS</p>
            <p>
              School of Earth and Atmospheric Sciences<br />
              Georgia Institute of Technology<br />
              Atlanta, Georgia
            </p>
          </div>
        </section>

        <section className="support-research" aria-labelledby="support-research-title">
          <div>
            <p className="kicker">SUPPORT OUR RESEARCH</p>
            <h2 id="support-research-title">
              Help advance aerosol, climate, and health research.
            </h2>
          </div>
          <div className="support-copy">
            <p>
              Support helps us train students, develop new measurement and
              modeling approaches, and carry out laboratory and field studies.
              We welcome conversations with alumni, foundations, industry
              partners, and friends interested in advancing our work.
            </p>
            <p>
              Georgia Tech administers all gifts through official university
              channels. The EAS Giving page includes options for student
              research and faculty support. If you hope to support a particular
              research direction, please contact us first so the School can
              identify the appropriate mechanism.
            </p>
            <a
              className="quiet-link"
              href="https://eas.gatech.edu/giving"
              target="_blank"
              rel="noreferrer"
            >
              Explore EAS giving options <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
