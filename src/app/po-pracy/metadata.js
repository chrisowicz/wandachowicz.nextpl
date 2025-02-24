import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Po pracy — Krzysiek Wandachowicz",
  description: "Bywam w wyjątkowych miejscach, kocham wspinaczkę skalną i wysokogórską oraz biwakowanie pod gwiazdami. Pozanj moje pasje — wandachowicz.com",
  openGraph: {
    title: "Po pracy — Krzysiek Wandachowicz",
    description: "Bywam w wyjątkowych miejscach, kocham wspinaczkę skalną i wysokogórską oraz biwakowanie pod gwiazdami. Pozanj moje pasje — wandachowicz.com",
    url: `${siteConfig.domain}/po-pracy`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/afterWork.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});