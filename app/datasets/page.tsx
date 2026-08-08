import { datasets } from "../data/datasets";
import { PageShell } from "../components/SiteChrome";
import { sitePath } from "../lib/sitePath";
import "./datasets.css";

export default function DatasetsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero">
          <p className="kicker">DATASETS</p>
          <h1>Data for the<br /><em>community.</em></h1>
          <p>Open datasets developed by the laboratory for atmospheric modeling, aerosol optical properties, molecular transport, and historical-emissions research.</p>
        </section>

        <section className="page-body dataset-list">
          <p className="kicker">OPEN RESEARCH PRODUCTS</p>
          {datasets.map((dataset, index) => (
            <article key={dataset.title}>
              <span className="dataset-number">0{index + 1}</span>
              <div className="dataset-copy">
                <p className="kicker">{dataset.kicker}</p>
                <h2>{dataset.title}</h2>
                <div className="dataset-description">{dataset.description}</div>
                <div className="dataset-actions">
                  {dataset.access.map(({ label, href }) => (
                    <a className="quiet-link dark" href={href} key={href} target="_blank" rel="noreferrer">
                      {label} <span>↗</span>
                    </a>
                  ))}
                </div>
                <div className="dataset-references">
                  <h3>References</h3>
                  <ol>
                    {dataset.references.map(({ label, href }) => (
                      <li key={href}><a href={href} target="_blank" rel="noreferrer">{label}</a></li>
                    ))}
                  </ol>
                </div>
              </div>
              <figure className="dataset-figure">
                <img src={sitePath(dataset.image)} alt={dataset.alt} />
              </figure>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
