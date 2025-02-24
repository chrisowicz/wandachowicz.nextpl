import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Poznaj moje kompetencje — Krzysiek Wandachowicz",
  description: "Poznaj moje skille, czyli w czym czuje się mocny. Dowiedz się czego chcę, poznaj kierunek mojego rozwoju.",
  openGraph: {
    title: "Poznaj moje kompetencje — Krzysiek Wandachowicz",
    description: "Poznaj moje skille, czyli w czym czuje się mocny. Dowiedz się czego chcę, poznaj kierunek mojego rozwoju.",
    url: `${siteConfig.domain}/kompetencje`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/competencies.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});