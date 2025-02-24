import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Polityka prywatności i cookies — Krzysiek Wandachowicz",
  description: "Poznaj politykę prywatności na wandachowicz.com",
  openGraph: {
    title: "Polityka prywatności i cookies — Krzysiek Wandachowicz",
    description: "Poznaj politykę prywatności na wandachowicz.com",
    url: `${siteConfig.domain}/polityka-prywatnosci`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/privacyPolicy.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});