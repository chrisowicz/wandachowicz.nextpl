import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Discover my competencies — Krzysiek Wandachowicz",
  description: "Explore my skills and what I excel at. Learn about my ambitions and the direction of my growth.",
  openGraph: {
    title: "Discover my competencies — Krzysiek Wandachowicz",
    description: "Explore my skills and what I excel at. Learn about my ambitions and the direction of my growth.",
    url: `${siteConfig.domain}/competencies`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/competencies.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});