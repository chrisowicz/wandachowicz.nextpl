import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Privace and Cookies Policy — Krzysiek Wandachowicz",
  description: "Read the privacy and cookie policy — wandachowicz.com",
  openGraph: {
    title: "Privace and Cookies Policy — Krzysiek Wandachowicz",
    description: "Read the privacy and cookie policy — wandachowicz.com",
    url: `${siteConfig.domain}/privacy-policy`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/privacyPolicy.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});