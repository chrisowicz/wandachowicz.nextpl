import projects from "../data/projectsPL.json";

export async function GET() {
  const baseUrl = "https://wandachowicz.pl";

  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "projekty", priority: 1.0 },
    { path: "poznaj-mnie", priority: 0.8 },
    { path: "kompetencje", priority: 1.0 },
    { path: "po-pracy", priority: 0.8 },
    { path: "kontakt", priority: 0.5 },
    { path: "polityka-prywatnosci", priority: 0.3 },
  ];

  // Generowanie dynamicznych ścieżek dla projektów
  const dynamicRoutes = projects.map((project) => ({
    path: `projekty/${project.slug}`,
    priority: 0.9,
  }));

  // Łączenie tras statycznych z dynamicznymi
  const routes = [...staticRoutes, ...dynamicRoutes];

  // Tworzenie XML sitemapy
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(({ path, priority }) => {
    return `
  <url>
    <loc>${baseUrl}/${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
