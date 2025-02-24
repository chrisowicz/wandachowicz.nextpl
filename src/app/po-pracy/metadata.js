import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "After work — Krzysiek Wandachowicz",
  description: "I love climbing and I visit exceptional places. Discover my passions — wandachowicz.com",
  openGraph: {
    title: "After work — Krzysiek Wandachowicz",
    description: "I love climbing and I visit exceptional places. Discover my passions — wandachowicz.com",
    url: `${siteConfig.domain}/after-work`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/afterWork.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});