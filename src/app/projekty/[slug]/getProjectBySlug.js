import projects from '../../data/projectsPL.json';

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
