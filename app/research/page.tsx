import { themes } from "../data/research";
import { PageShell } from "../components/SiteChrome";
import { ScientificText } from "../components/ScientificText";
import { sitePath } from "../lib/sitePath";
import "./references.css";

export default function ResearchPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="kicker">RESEARCH</p>
          <h1 aria-label="Understanding aerosols from molecule to atmosphere.">Understanding aerosols<br />from molecule to <em>atmosphere.</em></h1>
          <p>We study the processes and physicochemical properties of atmospheric aerosol particles through laboratory experiments, field measurements, and chemical transport modeling.</p>
        </section>
        <section className="page-body research-detail">
          <p className="kicker">AREAS OF INQUIRY</p>
          {themes
            .slice()
            .sort((a, b) => a.displayPriority - b.displayPriority)
            .map(({ title, text, image, alt, references }, index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div className="research-copy">
                <h2>{title}</h2>
                <p><ScientificText text={text} /></p>
                <div className="research-references">
                  <h3>References</h3>
                  <ol>
                    {references.map(({ label, href }) => (
                      <li key={href}>
                        <a href={href} target="_blank" rel="noreferrer"><ScientificText text={label} /></a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <figure className="research-figure"><img src={sitePath(image)} alt={alt} loading="lazy" decoding="async" /></figure>
            </article>
            ))}
          <aside className="research-platform" aria-labelledby="open-pm-network-title">
            <div>
              <p className="kicker">OPEN RESEARCH INFRASTRUCTURE</p>
              <h2 id="open-pm-network-title">Open PM Network</h2>
            </div>
            <div>
              <p>An open-source platform for resilient particulate-matter sensing, complete raw-data preservation, and privacy-aware research and community deployments.</p>
              <a className="quiet-link dark" href="https://www.openpmnetwork.org" target="_blank" rel="noreferrer">Visit Open PM Network <span>↗</span></a>
            </div>
          </aside>
          <aside>
            <p>Our work connects aerosol physics and chemistry with instrument development, field observations, and environmental-health questions.</p>
            <a className="quiet-link dark" href={sitePath("/datasets")}>Explore datasets <span>→</span></a>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}

