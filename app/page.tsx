import { PageShell } from "./components/SiteChrome";
import "./home.css";

export default function Home() {
  return <PageShell><main>
    <section className="hero" id="top"><div className="hero-copy"><p className="kicker">ATMOSPHERIC SCIENCE Â· GEORGIA INSTITUTE OF TECHNOLOGY</p><h1>Aerosol processes<br />in a <em>changing</em><br />atmosphere.</h1><p>We investigate the chemical and physical properties of atmospheric particles and their effects on air quality, climate, and human health.</p><a className="quiet-link" href="/research">Learn about our research <span>â†’</span></a></div><div className="specimen"><img className="specimen-art" src="/images/home/hero-risograph-v1.png" alt="Editorial illustration connecting urban emissions, forests, atmospheric transport, and clouds." /></div></section>
    <section className="statement">
      <p className="kicker">THE GROUP</p>
      <div className="statement-main">
        <div className="statement-intro">
          <h2>We make invisible particles<br />legibleâ€”across scales.</h2>
          <p>From controlled laboratory experiments to field measurements and models, our work asks how aerosols form, transform, and influence the environment around us.</p>
        </div>
        <div className="research-modes" aria-label="Our research approaches">
          <article><span>01</span><h3>Laboratory experiments</h3><p>Probe particle formation, aging, and physicochemical properties under controlled conditions.</p></article>
          <article><span>02</span><h3>Field measurements</h3><p>Measure atmospheric composition and aerosol behavior in real environments.</p></article>
          <article><span>03</span><h3>Atmospheric modeling</h3><p>Connect observations to regional air quality and a changing climate.</p></article>
        </div>
      </div>
    </section>
    <section className="home-index"><a href="/research"><span>01</span><h2>Research</h2><p>Aerosol chemistry, air quality, and climate</p><b>â†’</b></a><a href="/people"><span>02</span><h2>People</h2><p>Our lab community</p><b>â†’</b></a><a href="/publications"><span>03</span><h2>Publications</h2><p>Selected work and full archive</p><b>â†’</b></a></section>
  </main></PageShell>;
}

