"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./competencies.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Competencies() {
  const containerRef = useRef(null);
  const competenciesBgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "competencies",
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=1500px",
          scrub: 1,
        },
      });
      tl.to(competenciesBgRef.current, {
        rotation: 720,
        ease: "none",
      });
    }, containerRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert();
    };
  }, []);
  

  return (
    <section className={styles.competencies} ref={containerRef}>
      <div className={styles.content}>
        <h2 className={`${styles.title} title`}>
          <span className={`${styles.subTitle} subTitle`}>Front-end developer &lt;—&gt; Web Designer</span>
          Kompetencje
        </h2>
        <div className={`${styles.desc} desc`}>
          <p>Od lat pracuje we frontend, lecz w pisaniu szablonów do WordPress mój zakres umiejętności jest na poziomie full stack, piszę pod WP z WooCommerce oraz inne systemy CMS. Specjalizuję się w HTML5, CSS3 z SASS lub LESS, Java Script. Obecnie moją pasją jest biblioteka React, w której się rozwijam tworząc nowe projekty.</p>
          <p>Projektuję we wszystkich liczących się programach graficznych. Użytkuję programy ze stajni Affinity, Adobe. Od dłuższego czasu projekty UI rysuję w Figmie ze wsparciem Affinity Designer dla potrzeb bardziej skomplikowanych komponentów, które dostarczam do współdzielonego projektu w SVG.</p>
          <p>Na poziomie projektowym funkcjonuję w sprawnej komunikacji, korzystam z Trello, pracowałem na Slacku. Żaden interfejs i system postępowania nie jest mi straszny. W swoich projektach stosuję metodyki Scruma. Potrafię zarządzać projektem, rozdzielać zadania i pilnować stanu realizacji.</p>
        </div>
      </div>
      <Link href={'competencies'} className='more'>Zobacz więcej</Link>
      <Image src="/img/competenciesSectionBg.svg" alt="competencies Site graphic" className={styles.competenciesSiteBg} width={268} height={248} ref={competenciesBgRef}/>
    </section>
  )
}