import { PageShell } from "./components/SiteChrome";
import { ScientificText } from "./components/ScientificText";
import { posts } from "./data/news";
import { sitePath } from "./lib/sitePath";
import "./home.css";

export default function Home() {
  return <PageShell><main>
    <section className="hero" id="top"><div className="hero-copy"><p className="kicker hero-affiliation"><a href="https://www.eas.gatech.edu/" target="_blank" rel="noreferrer">SCHOOL OF EARTH AND ATMOSPHERIC SCIENCES</a><span aria-hidden="true"> · </span><a href="https://www.gatech.edu/" target="_blank" rel="noreferrer">GEORGIA TECH</a></p><h1 aria-label="Aerosol processes in a changing atmosphere.">Aerosol processes<br />in a <em>changing</em><br />atmosphere.</h1><p>We investigate the chemical and physical properties of atmospheric particles and their effects on air quality, climate, and human health.</p><a className="quiet-link" href={sitePath("/research")}>Learn about our research <span>→</span></a></div><div className="specimen"><img className="specimen-art" src={sitePath("/images/home/hero-risograph-v1-optimized.jpg")} alt="Editorial illustration connecting urban emissions, forests, atmospheric transport, and clouds." decoding="async" fetchPriority="high" /></div></section>
    <section className="statement">
      <p className="kicker">THE GROUP</p>
      <div className="statement-main">
        <div className="statement-intro">
          <h2 aria-label="We make invisible particles legible—across scales.">We make invisible particles<br />legible—across scales.</h2>
          <p>From controlled laboratory experiments to field measurements and models, our work asks how aerosols form, transform, and influence the environment around us.</p>
        </div>
        <div className="research-modes" aria-label="Our research approaches">
          <article><span>01</span><h3>Laboratory experiments</h3><p>Probe particle formation, aging, and physicochemical properties under controlled conditions.</p></article>
          <article><span>02</span><h3>Field measurements</h3><p>Measure atmospheric composition and aerosol behavior in real environments.</p></article>
          <article><span>03</span><h3>Atmospheric modeling</h3><p>Connect observations to regional air quality and a changing climate.</p></article>
        </div>
      </div>
    </section>
    <section className="home-news">
      <div className="home-news-heading">
        <div><p className="kicker">RECENT UPDATES</p><h2>From the group.</h2></div>
        <a className="quiet-link dark" href={sitePath("/news")}>View all news <span>→</span></a>
      </div>
      <div className="home-news-list">
        {posts.slice(0, 3).map((post) => (
          <article key={`${post.date}-${post.text}`}>
            <time>{post.date}</time>
            <p><ScientificText text={post.text} /></p>
            {post.href && <a href={post.href} target="_blank" rel="noreferrer">{post.linkLabel ?? "Learn more"} <span>↗</span></a>}
          </article>
        ))}
      </div>
    </section>
    <section className="home-index"><a href={sitePath("/research")}><span>01</span><h2>Research</h2><p>Aerosol chemistry, air quality, and climate</p><b>→</b></a><a href={sitePath("/people")}><span>02</span><h2>People</h2><p>Our lab community</p><b>→</b></a><a href={sitePath("/publications")}><span>03</span><h2>Publications</h2><p>Selected work and full archive</p><b>→</b></a></section>
  </main></PageShell>;
}

