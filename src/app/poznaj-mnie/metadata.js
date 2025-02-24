import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Meet me — Krzysiek Wandachowicz",
  description: "I am a frontend developer with solid experience in coding and designing – visit my website and get to know me better.",
  openGraph: {
    title: "Meet me — Krzysiek Wandachowicz",
    description: "I am a frontend developer with solid experience in coding and designing – visit my website and get to know me better.",
    url: `${siteConfig.domain}/meet-me`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/meetMe.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});