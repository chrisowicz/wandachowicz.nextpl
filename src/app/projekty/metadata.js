import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Projekty — moja praca",
  description: "Zobacz moje realizacje stron na Next.js, WordPress, optymalizacje i szybkość działania — na wandachowicz.com.",
  openGraph: {
    title: "Projekty — moja praca",
    description: "Zobacz moje realizacje stron na Next.js, WordPress, optymalizacje i szybkość działania — na wandachowicz.com.",
    url: `${siteConfig.domain}/projekty`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/projects.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});