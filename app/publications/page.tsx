import { PageShell } from "../components/SiteChrome";
import { PublicationArchive } from "./PublicationArchive";

export default function PublicationsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero publication-hero">
          <p className="kicker">PUBLICATIONS</p>
          <h1>Research shared<br />with the <em>world.</em></h1>
          <p>Peer-reviewed articles, manuscripts in review, and other scholarly outputs from the Aerosol, Climate &amp; Health Laboratory.</p>
        </section>
        <PublicationArchive />
      </main>
    </PageShell>
  );
}
