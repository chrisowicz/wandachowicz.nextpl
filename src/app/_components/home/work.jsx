"use client";
import Link from "next/link";
import styles from "./work.module.scss";

export function Work({projects}) {

  return (
    <section className={styles.work}>
      <div className={`${styles.desc} desc`}>
        <h2 className="title">
          <span className="subTitle">Moje realizacje</span>
          Projekty
        </h2>
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
      </div>
      <Link href={'/projects'} className='more'>Zobacz więcej</Link>
    </section>
  )
}