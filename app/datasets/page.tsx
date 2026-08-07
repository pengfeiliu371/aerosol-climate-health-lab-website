import { PageShell } from "../components/SiteChrome";
import { sitePath } from "../lib/sitePath";
import "./datasets.css";

type Dataset = {
  kicker: string;
  title: string;
  image: string;
  alt: string;
  description: React.ReactNode;
  access: Array<{ label: string; href: string }>;
  references: Array<{ label: string; href: string }>;
};

const datasets: Dataset[] = [
  {
    kicker: "EMISSIONS INVENTORY",
    title: "Global continental HCl and particulate chloride emissions",
    image: "/images/datasets/gt-chlorine-inventory.png",
    alt: "Global maps of continental hydrogen chloride and particulate chloride emissions by source sector",
    description: (
      <>
        <p>GT-Chlorine is an emission inventory for hydrogen chloride (HCl) and particulate chloride (pCl) from continental sources. It includes six sectors: energy, industry, residential combustion, open waste burning, open biomass burning, and agriculture.</p>
        <p>The files provide monthly mean HCl and pCl emission fluxes in kg m<sup>−2</sup> s<sup>−1</sup>, gridded at 0.1° × 0.1° resolution for 1960–2014. The data are HEMCO-ready and can be used directly in GEOS-Chem.</p>
      </>
    ),
    access: [
      {
        label: "Open GT-Chlorine on Harvard Dataverse",
        href: "https://doi.org/10.7910/DVN/23BRII",
      },
    ],
    references: [
      {
        label: "Zhang, B., Shen, H., Yun, X., et al. (2022). Global emissions of hydrogen chloride and particulate chloride from continental sources. Environmental Science & Technology, 56, 3894–3904.",
        href: "https://doi.org/10.1021/acs.est.1c05634",
      },
      {
        label: "Zhang, B., Liu, P., Shen, H., et al. (2022). Global Emissions of Hydrogen Chloride and Particulate Chloride from Continental Sources (GT-Chlorine). Harvard Dataverse.",
        href: "https://doi.org/10.7910/DVN/23BRII",
      },
    ],
  },
  {
    kicker: "AEROSOL OPTICAL PROPERTIES",
    title: "Complex refractive indices of secondary organic aerosol",
    image: "/images/datasets/soa-refractive-index.png",
    alt: "Imaginary refractive indices of anthropogenic and biogenic secondary organic material compared with brown and black carbon",
    description: (
      <>
        <p>We developed a method to measure the spectroscopic complex refractive indices (<em>m</em> = <em>n</em> + <em>ik</em>) of secondary organic aerosol (SOA) thin films using ellipsometry and UV–VIS spectrophotometry. The method was applied to SOA from the ozonolysis of α-pinene, limonene, and catechol, and from the photooxidation of toluene and <em>m</em>-xylene. Squalane and nigrosin measurements provide method validation.</p>
        <p>The tabulated optical constants span wavelengths from 220 nm to approximately 1000 nm. They are included in the <a href="https://hitran.org/" target="_blank" rel="noreferrer">HITRAN2020 database</a> and have supported subsequent aerosol studies, including <a href="https://doi.org/10.1126/science.abm7915" target="_blank" rel="noreferrer">Corral Arroyo et al. (Science, 2022)</a>.</p>
      </>
    ),
    access: [
      {
        label: "Open tabulated data on GitHub",
        href: "https://github.com/pengfeiliu371/OA_refractive_index/",
      },
    ],
    references: [
      {
        label: "Liu, P., Zhang, Y., & Martin, S. T. (2013). Complex refractive indices of thin films of secondary organic materials by spectroscopic ellipsometry from 220 to 1200 nm. Environmental Science & Technology, 47, 13594–13601.",
        href: "https://doi.org/10.1021/es403411e",
      },
      {
        label: "Liu, P. F., Abdelmalki, N., Hung, H.-M., et al. (2015). Ultraviolet and visible complex refractive indices of secondary organic material produced by photooxidation of the aromatic compounds toluene and m-xylene. Atmospheric Chemistry and Physics, 15, 1435–1446.",
        href: "https://doi.org/10.5194/acp-15-1435-2015",
      },
    ],
  },
  {
    kicker: "MOLECULAR TRANSPORT",
    title: "Water diffusivity in secondary organic aerosol material",
    image: "/images/datasets/soa-water-diffusivity.gif",
    alt: "Water diffusivity and mixing timescales in sucrose and secondary organic material as a function of water activity",
    description: (
      <>
        <p>We measured water-desorption kinetics from SOA thin films using a Quartz Crystal Microbalance (QCM), then retrieved water diffusivity with a concentration-dependent multilayer diffusion model. Validation with amorphous sucrose produced results consistent with the literature.</p>
        <p>The repository contains tabulated diffusivity data for sucrose and SOA materials derived from α-pinene, toluene, and <em>m</em>-xylene.</p>
      </>
    ),
    access: [
      {
        label: "Open tabulated data on GitHub",
        href: "https://github.com/pengfeiliu371/Liu_ACSCentSci_2018",
      },
    ],
    references: [
      {
        label: "Liu, P., Li, Y. J., Wang, Y., et al. (2018). Highly viscous states affect the browning of atmospheric organic particulate matter. ACS Central Science, 4, 207–215.",
        href: "https://doi.org/10.1021/acscentsci.7b00452",
      },
    ],
  },
  {
    kicker: "HISTORICAL BIOMASS BURNING",
    title: "Reconstructed black-carbon emissions, 1750–2010",
    image: "/images/datasets/biomass-burning-emissions.jpg",
    alt: "Regional time series comparing prior and reconstructed biomass-burning black-carbon emissions from 1750 to 2010",
    description: (
      <>
        <p>We reconstructed two gridded global biomass-burning emission datasets from 1750 to 2010 using inverse analysis, with 31 ice-core black-carbon records as observational constraints and GEOS-Chem simulations of emission–deposition sensitivity.</p>
        <p>BB4CMIP<sub>post</sub>, based on the <a href="https://doi.org/10.5194/gmd-10-3329-2017" target="_blank" rel="noreferrer">BB4CMIP prior inventory</a>, is provided on a 0.25° × 0.25° grid. LPJ-LMfire<sub>post</sub>, based on the <a href="https://doi.org/10.1126/sciadv.abc1379" target="_blank" rel="noreferrer">LPJ-LMfire prior inventory</a>, is provided on a 0.5° × 0.5° grid. Black-carbon emissions are public and model-ready; CH<sub>4</sub>, CO, H<sub>2</sub>, N<sub>2</sub>O, NH<sub>3</sub>, NMVOCs, NO<sub>x</sub>, OC, and SO<sub>2</sub> emissions are available upon request.</p>
      </>
    ),
    access: [
      {
        label: "Open emissions on Harvard Dataverse",
        href: "https://doi.org/10.7910/DVN/KB0ESS",
      },
    ],
    references: [
      {
        label: "Zhang, B., & Liu, P. (2024). Reconstructed Black Carbon Emissions from 1750 to 2010 using Ice Core Records and Inverse Modeling. Harvard Dataverse, V1.",
        href: "https://doi.org/10.7910/DVN/KB0ESS",
      },
      {
        label: "Zhang, B., Chellman, N. J., Kaplan, J. O., et al. (2024). Improved biomass burning emissions from 1750 to 2010 using ice core records and inverse modeling. Nature Communications, 15, 3651.",
        href: "https://doi.org/10.1038/s41467-024-47864-7",
      },
    ],
  },
];

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

