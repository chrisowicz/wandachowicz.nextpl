import projects from '../../data/projectsEN.json';

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
