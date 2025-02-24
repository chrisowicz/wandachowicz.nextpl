"use client";

import { Blob } from "./blob";
import styles from "./heroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h2>
        <span>Tworzę niezwykłe rzeczy dla</span> wyjątkowych<br />ludzi
      </h2>
      <Blob />
    </section>
  )
}