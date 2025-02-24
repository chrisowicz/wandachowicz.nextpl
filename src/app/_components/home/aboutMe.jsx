"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./aboutMe.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  const containerRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about",
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: "+=1500px",
          scrub: 1,
        },
      });
      tl.to(firstImageRef.current, { opacity: 0.1 });
      tl.to(secondImageRef.current, { opacity: 1 });
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
    <section className={styles.aboutMe} ref={containerRef}>
      <div className={`${styles.desc} desc`}>
        <h1 className="title">
          <span className="subTitle">Człowiek, który nazywa się</span>
          Wandachowicz
        </h1>
        <p>Cześć!</p>
        <p>Na imię mam Krzysiek i jestem artystyczną duszą z zamiłowaniem do grafiki i kodowania. Pierwszy komputer odkryłem ponad 24 lata temu, od tego czasu wiele się zadziało. Od wielu lat pracuję w IT i mam dosyć szeroki wachlarz umiejętności. Tworzę marki, projektuję, koduję i animuję interfejsy, zarządzam projektami.</p>
      </div>
      <Link href="/meet-me" className='more'>Poznaj mnie</Link>
      <div className={styles.images}>
        <Image className={styles.firstImage} src='/img/firts-photo.webp' alt="Krzysiek Wandachowicz" width={535} height={828} style={{ opacity: 1 }} ref={firstImageRef} quality={90}/>
        <Image className={styles.secondImage} src='/img/second-photo.webp' alt="Web Developer, UI/UX Designer" width={535} height={828} style={{ opacity: 0 }} ref={secondImageRef} quality={90}/>
      </div>
    </section>
  );
}