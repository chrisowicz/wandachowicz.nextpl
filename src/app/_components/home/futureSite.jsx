"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./futureSite.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function FutureSite() {
  const containerRef = useRef(null);
  const futureSiteBgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "futureSite",
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=1000px",
          scrub: 1,
        },
      });
      tl.to(futureSiteBgRef.current, {
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
    <section className={styles.futureSite} ref={containerRef}>
      <div className={`${styles.desc} desc`}>
        <h2 className={'title'}>
          <span>Przejdź na stronę przyszłości</span>
          Wyjdź poza ramy<br />standardu prezentacji
        </h2>
        <p>Pozwól sobie na oryginalne podejście, przekraczając konwencjonalne rozwiązania. Stwórzmy razem stronę opartą na najnowszych technologiach, która nie tylko przyciągnie uwagę swoim designem, ale będzie również zoptymalizowana i funkcjonalna.
        </p>
        <p>Cel jest ważny, ale liczy się również droga do niego.</p>
      </div>
      <Image src="/img/futureSectionBg.svg" alt="Przejdź na stronę przyszłości" className={styles.futureSiteBg} width={268} height={248} ref={futureSiteBgRef}/>
    </section>
  );
}
