"use client";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import Header from "../_components/header";
import { BottomHooks } from "../_components/bottomHooks";

export function ClientProjects({ projects }) {

  useEffect(() => {
    document.body.classList.add('projects');
    return () => {
      document.body.classList.remove('projects');
    };
  }, []);

  return (
    <>
      <Header />
      <section className={styles.content}>
        <h1 className="title">
          <span className="subTitle">My realizations</span>
          Projects
        </h1>
        <div id="projects">
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <Link href={`/projects/${project.slug}`}>
                  {project?.listTitle || project?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <BottomHooks HooksHeading="Every end" HooksSpan="Gives a new beginning, project" />
    </>
  )
}