import { generateMetadata } from "./metadata";
import { ClientProjects } from "./client";

export { generateMetadata };

// Komponent serwerowy, który ładuje dane JSON

export default async function Projects() {

  // Wczytaj dane z pliku JSON w czasie budowania strony
  const response = await import('../data/projectsPL.json');
  const projects = response.default.sort((a, b) => b.id - a.id); // Posortuj projekty

  return <ClientProjects projects={projects} />;
}
