"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./languages.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Languages() {
  const containerRef = useRef();
  const secondBgRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(secondBgRef.current, {
        scrollTrigger: {
          id: "langPin",
          trigger: containerRef.current,
          start: "top top",
          end: "+=600px",
          scrub: 3,
          pin: true,
          pinSpacing: true,
        },
        x: 0,
      });
    }, containerRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert(); // usuwa wszystkie animacje/triggery z tego contextu
    };
  }, []);
  

  return (
    <section className={styles.languages} ref={containerRef}>
      <div className={`${styles.desc} desc`}>
        <h3 className={styles.question}>Ile znasz języków<br />programowania?</h3>
        <h3 className={styles.answer}>Ile trzeba! Byle w tydzień ;)</h3>
      </div>
      <div className={styles.firstBG}></div>
      <div className={styles.secondBG} style={{transform: "translateX(-100%)"}} ref={secondBgRef}></div>
    </section>
  )
}
