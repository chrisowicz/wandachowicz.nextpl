import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Kontakt — Krzysiek Wandachowicz",
  description: "Poznajmy się i stwórzmy razem niezwykłą historię — wandachowicz.com",
  openGraph: {
    title: "Kontakt — Krzysiek Wandachowicz",
    description: "Poznajmy się i stwórzmy razem niezwykłą historię — wandachowicz.com",
    url: `${siteConfig.domain}/kontakt`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/contact.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});