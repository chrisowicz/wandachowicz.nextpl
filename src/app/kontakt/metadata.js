import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Contact — Krzysiek Wandachowicz",
  description: "Have a question? Write to me",
  openGraph: {
    title: "Contact — Krzysiek Wandachowicz",
    description: "Have a question? Write to me",
    url: `${siteConfig.domain}/contact`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/contact.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});