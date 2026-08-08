// Edit this file to update website content without changing page layout.

export type Theme = {
  displayPriority: number;
  title: string;
  text: string;
  image: string;
  alt: string;
  references: Array<{ label: string; href: string }>;
};

export const themes: Theme[] = [
  {
    displayPriority: 1,
    title: "Thin-film techniques for aerosol characterization",
    text: "Atmospheric organic aerosol affects climate and human health but remains difficult to characterize because it contains thousands of chemical species. We developed an electrostatic-precipitation method to produce uniform organic aerosol thin films [Liu et al., ES&T, 2013]. Ellipsometry measurements of these films yielded complex refractive indices for biogenic and anthropogenic secondary organic aerosols (SOA) [Liu et al., ES&T, 2013; ACP, 2015]. We also use a highly sensitive Quartz Crystal Microbalance (QCM) to track nanogram-scale mass changes. QCM-based measurements have quantified SOA volatility and evaporation under atmospherically relevant temperature and RH [Liu et al., PNAS, 2016], diffusion of organic molecules and water within particles [Liu et al., PNAS, 2016; ACS Cent. Sci., 2018], and mass-based hygroscopicity across a wide RH range [Liu et al., Nature Comm., 2018]. Recent applications follow aerosol mass and physical-property changes during solar irradiation [Bai et al., ES&T, 2026] and characterize the hygroscopicity and cloud-condensation-nuclei activity of fresh and aged biomass-burning particles [Bai et al., ACS ES&T Air, 2026]. Current work focuses on SOA photochemical aging, volatility-dependent hygroscopicity, and the physical properties of biomass-burning organic aerosol.",
    image: "/images/research/thin-film-characterization.png",
    alt: "Thin-film aerosol characterization methods and instruments",
    references: [
      {
        label: "Liu, P., Zhang, Y., & Martin, S. T. (2013). Complex refractive indices of thin films of secondary organic materials by spectroscopic ellipsometry from 220 to 1200 nm. Environmental Science & Technology, 47, 13594–13601.",
        href: "https://doi.org/10.1021/es403411e",
      },
      {
        label: "Liu, P. F., Abdelmalki, N., Hung, H.-M., Wang, Y., Brune, W. H., & Martin, S. T. (2015). Ultraviolet and visible complex refractive indices of secondary organic material produced by photooxidation of the aromatic compounds toluene and m-xylene. Atmospheric Chemistry and Physics, 15, 1435–1446.",
        href: "https://doi.org/10.5194/acp-15-1435-2015",
      },
      {
        label: "Liu, P., Li, Y. J., Wang, Y., Gilles, M. K., Zaveri, R. A., Bertram, A. K., & Martin, S. T. (2016). Lability of secondary organic particulate matter. Proceedings of the National Academy of Sciences, 113, 12643–12648.",
        href: "https://doi.org/10.1073/pnas.1603138113",
      },
      {
        label: "Liu, P., Li, Y. J., Wang, Y., Bateman, A. P., Zhang, Y., Gong, Z., Bertram, A. K., & Martin, S. T. (2018). Highly viscous states affect the browning of atmospheric organic particulate matter. ACS Central Science, 4, 207–215.",
        href: "https://doi.org/10.1021/acscentsci.7b00452",
      },
      {
        label: "Liu, P., Song, M., Zhao, T., et al. (2018). Resolving the mechanisms of hygroscopic growth and cloud condensation nuclei activity for organic particulate matter. Nature Communications, 9, 4076.",
        href: "https://doi.org/10.1038/s41467-018-06622-2",
      },
      {
        label: "Bai, B., Vandergrift, G. W., Liang, Y., et al. (2026). Dynamic evolution of mass and physical properties of atmospheric organic aerosol under solar irradiation. Environmental Science & Technology.",
        href: "https://doi.org/10.1021/acs.est.5c16671",
      },
      {
        label: "Bai, B., Singh, A., Xu, T., et al. (2026). Hygroscopicity and cloud condensation nuclei activity of fresh and aged biomass burning particles. ACS ES&T Air.",
        href: "https://doi.org/10.1021/acsestair.5c00331",
      },
    ],
  },
  {
    displayPriority: 5,
    title: "Tropospheric halogen chemistry and emissions",
    text: "Halogens exert a strong influence on tropospheric chemistry and, through that, affect air quality and climate. These processes were not considered in chemical transport models until recently. In the global budget, most halogen species are emitted from marine sources. However, our collaborative field studies observed a high concentration of particulate chloride in urban Delhi, India, suggesting a significant continental source [Gunthe, Liu, et al., Nature Geosci., 2021; Chen et al., ES&T, 2022]. These studies highlighted that chloride can explain about 50% of visibility degradation during Delhi’s haze events. Motivated by these studies, we developed a new global high-resolution (0.1° × 0.1°) emission inventory for hydrogen chloride (HCl) and particulate chloride [Zhang et al., ES&T, 2022], for use in chemical transport models.",
    image: "/images/research/halogen-chemistry.png",
    alt: "Conceptual diagram of particulate chloride chemistry and its air-quality effects",
    references: [
      {
        label: "Gunthe, S. S., Liu, P., Panda, U., et al. (2021). Enhanced aerosol particle growth sustained by high continental chlorine emission in India. Nature Geoscience, 14, 77–84.",
        href: "https://doi.org/10.1038/s41561-020-00677-x",
      },
      {
        label: "Chen, Y., Wang, Y., Nenes, A., et al. (2022). Ammonium chloride associated aerosol liquid water enhances haze in Delhi, India. Environmental Science & Technology, 56, 7163–7173.",
        href: "https://doi.org/10.1021/acs.est.2c00650",
      },
      {
        label: "Zhang, B., Shen, H., Yun, X., et al. (2022). Global emissions of hydrogen chloride and particulate chloride from continental sources. Environmental Science & Technology, 56, 3894–3904.",
        href: "https://doi.org/10.1021/acs.est.1c05634",
      },
    ],
  },
  {
    displayPriority: 4,
    title: "Historical biomass-burning trends",
    text: "Historical biomass-burning emissions are highly uncertain, particularly before the satellite era. Their historical trends can largely determine direct and indirect aerosol radiative forcing. By combining ice-core black-carbon records, vegetation and fire modeling, and chemical transport modeling, we examined historical trends of biomass-burning emissions in the Southern Hemisphere from the preindustrial era to the present day and estimated their impact on aerosol radiative forcing [Liu et al., Sci. Adv., 2021]. Our ongoing work aims to reconstruct global historical biomass-burning emissions using a large array of ice-core records (n = 31) and inverse modeling [Zhang et al., Nature Comm., 2024].",
    image: "/images/research/biomass-burning.png",
    alt: "Historical biomass-burning reconstruction records across Antarctica",
    references: [
      {
        label: "Liu, P., Kaplan, J. O., Mickley, L. J., et al. (2021). Improved estimates of preindustrial biomass burning reduce the magnitude of aerosol climate forcing in the Southern Hemisphere. Science Advances, 7, eabc1379.",
        href: "https://doi.org/10.1126/sciadv.abc1379",
      },
      {
        label: "Zhang, B., Chellman, N. J., Kaplan, J. O., et al. (2024). Improved biomass burning emissions from 1750 to 2010 using ice core records and inverse modeling. Nature Communications, 15, 3651.",
        href: "https://doi.org/10.1038/s41467-024-47864-7",
      },
    ],
  },
  {
    displayPriority: 3,
    title: "Environmental health impacts of air pollution",
    text: "Air pollution is a pervasive environmental exposure with consequences that extend beyond respiratory and cardiovascular disease. Our research integrates high-resolution exposure assessment, large-scale epidemiologic cohorts, and experimental toxicology to investigate how fine particulate matter (PM2.5), nitrogen dioxide, and specific aerosol constituents affect human health. Using national Medicare cohorts and spatially resolved air-pollution data, we examine associations with mortality, stroke, dementia, and other neurological outcomes [Shi et al., 2021; Shi et al., 2023]. We also investigate inequities in ambient NO2 exposure across the United States [Wang et al., 2023]. A recent collaborative Science study provides experimental evidence linking PM2.5 exposure to Lewy body dementia-relevant pathology [Zhang et al., 2025]. Our goal is to provide evidence that supports more effective and equitable air-quality policy.",
    image: "/images/research/environmental-health-framework.png",
    alt: "Environmental health research framework connecting air-pollution exposure, health effects, and biological mechanisms",
    references: [
      {
        label: "Shi, L., Steenland, K., Li, H., et al. (2021). A national cohort study (2000–2018) of long-term air pollution exposure and incident dementia in older adults in the United States. Nature Communications, 12, 6754.",
        href: "https://doi.org/10.1038/s41467-021-27049-2",
      },
      {
        label: "Shi, L., Zhu, Q., Wang, Y., et al. (2023). Incident dementia and long-term exposure to constituents of fine particle air pollution: A national cohort study in the United States. Proceedings of the National Academy of Sciences, 120, e2211282119.",
        href: "https://doi.org/10.1073/pnas.2211282119",
      },
      {
        label: "Wang, Y., Liu, P., Schwartz, J., et al. (2023). Disparities in ambient nitrogen dioxide pollution in the United States. Proceedings of the National Academy of Sciences, 120, e2208450120.",
        href: "https://doi.org/10.1073/pnas.2208450120",
      },
      {
        label: "Zhang, H., Shi, L., Lee, K., et al. (2025). Lewy body dementia promotion by air pollutants. Science, 389, eadu4132.",
        href: "https://doi.org/10.1126/science.adu4132",
      },
    ],
  },
  {
    displayPriority: 2,
    title: "Climate-air quality interactions",
    text: "Rising temperatures can worsen air pollution, but the magnitude and drivers of this “climate penalty” vary across regions and evolve as emissions change. We combine high-resolution machine-learning datasets, observations, and chemical transport modeling to quantify how summertime PM2.5 and ozone respond to temperature across the United States. Our analysis shows that emission controls have substantially weakened the temperature sensitivity of PM2.5 and ozone in the eastern US, while the western US has become increasingly vulnerable because of temperature-sensitive wildfire emissions [Yin et al., 2025]. Using an improved GEOS-Chem model, we further identify the processes driving these regional patterns: chemical production governs the long-term sensitivity of isoprene SOA and sulfate in the eastern US, wildfire-related primary emissions are central in the West, and atmospheric transport modulates year-to-year variability [Yin et al., 2026]. This work improves projections of air quality under a warming climate and supports region-specific mitigation strategies.",
    image: "/images/research/climate-air-quality-interactions.png",
    alt: "Observed regional trends and model diagnosis of PM2.5 temperature sensitivity across the United States",
    references: [
      {
        label: "Yin, L., Bai, B., Zhang, B., et al. (2025). Regional-specific trends of PM2.5 and O3 temperature sensitivity in the United States. npj Climate and Atmospheric Science, 8, 12.",
        href: "https://doi.org/10.1038/s41612-024-00862-4",
      },
      {
        label: "Yin, L., Zheng, Y., Bai, B., et al. (2026). Processes driving the regional sensitivities of summertime PM2.5 to temperature across the US: New insights from model simulations. Atmospheric Chemistry and Physics, 26, 5901–5923.",
        href: "https://doi.org/10.5194/acp-26-5901-2026",
      },
    ],
  },
];
