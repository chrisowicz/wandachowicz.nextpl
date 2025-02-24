export const dynamic = "force-dynamic"; // Wymusza SSR

import { generateMetadata } from "./metadata";

import { getProjectBySlug } from "./getProjectBySlug";
import { ClientProjectDetails } from "./client";

export { generateMetadata };

export default async function ProjectPage({ params }) {
  // Oczekujemy na params
  const awaitedParams = await params;

  if (!awaitedParams?.slug) {
    throw new Error("Slug is undefined"); // Debugging
  }

  const project = await getProjectBySlug(awaitedParams.slug);

  if (!project) {
    return <p>Projekty nie znalezione</p>;
  }

  return (
    <>
      <ClientProjectDetails project={project} />
    </>
  );
}
