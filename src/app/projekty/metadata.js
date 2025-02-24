import { siteConfig } from "../_config/siteConfig";

export const generateMetadata = () => ({
  title: "Projects — my works",
  description: "Meet my realizations - projects of high speed and modern websites, web applications, and graphic designs.",
  openGraph: {
    title: "Projects — my works",
    description: "Meet my realizations - projects of high speed and modern websites, web applications, and graphic designs.",
    url: `${siteConfig.domain}/projects`,
    images: [
      {
        url: `${siteConfig.domain}/img/ogImage/projects.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },
});