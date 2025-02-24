import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Poznaj mnie — Krzysiek Wandachowicz",
  description: "Jestem frontend developerem z solidnym doświadczeniem w kodowaniu i projektowaniu - wpadnij na moją stronę i poznaj mnie bliżej.",
  openGraph: {
    title: "Poznaj mnie — Krzysiek Wandachowicz",
    description: "Jestem frontend developerem z solidnym doświadczeniem w kodowaniu i projektowaniu - wpadnij na moją stronę i poznaj mnie bliżej.",
    url: `${siteConfig.domain}/poznaj-mnie`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/meetMe.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});