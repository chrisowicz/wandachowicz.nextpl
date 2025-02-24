import { getProjectBySlug } from "./getProjectBySlug";
import { siteConfig } from "@/app/_config/siteConfig";

export async function generateMetadata({ params }) {
  // Musisz awaitować params!
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt nie znaleziony",
      description: "Projekt nie został znaleziony.",
    };
  }

  // Ograniczanie opisu do 150 znaków dla SEO
  const description = project.content.length > 150 ? project.content.substring(0, 150) + "... Poznaj!" : project.content;

  // Generowanie pełnego URL do obrazu og:image
  const imageUrl = project.gallery?.length > 0
    ? `${siteConfig.domain}/projekty/${project.gallery[0]}.webp`
    : `${siteConfig.domain}/img/ogImage/wandachowicz.webp`; // Fallback dla pustej galerii

  return {
    title: project.title,
    description: description,
    openGraph: {
      title: project.title,
      description: description,
      url: `${siteConfig.domain}/projekty/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1280,
        },
      ],
    },
  };
}
