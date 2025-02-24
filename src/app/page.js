import HomeClient from "./client";


export default async function Home() {
  const response = await import('./data/projectsPL.json');
  const projects = response.default.sort((a, b) => b.id - a.id).slice(0, 5);
  return <HomeClient projects={projects} />;
}