"use client";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import images from './gallery.json';
import styles from "./page.module.scss";
import { siteConfig } from "../_config/siteConfig";
import Header from "../_components/header";
import { BottomHooks } from "../_components/bottomHooks";
import { ScrollArrow, ScrollBg } from "../_components/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ClientAfterWork() {
  const galleryRef = useRef(null);

  // SCROLL WHEEL
  const scrollScope = useRef(null);
  const scrollArrowRef = useRef(null);
  const scrollWheelRef = useRef(null);
  // SCROLL WHEEL END

  useEffect(() => {
    document.body.classList.add('afterWork');
    return () => {
      document.body.classList.remove('afterWork');
    };
  }, []);

  useLayoutEffect(() => {
    if (!galleryRef.current) return;
    
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        transform: "translate(0px, 0px)",
        scrollTrigger: {
          id: "galleryTrigger",
          trigger: galleryRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 0.1,
          start: "top top",
          end: "+=4100%",
        },
      });

      images.forEach((image, index) => {
        tl.to(`#imageTitle-${index}`, {
          opacity: 1,
          scale: 1.3,
          zIndex: 2,
          duration: 0.5,
          ease: "power3.out"
        }).to(`#imageTitle-${index}`, {
          opacity: 0,
          scale: 6,
          zIndex: 1,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.1").to(`#image-${index}`, {
          opacity: 1,
          scale: 1,
          filter: "saturate(1)",
          zIndex: 2,
          duration: 0.5,
          ease: "power3.out"
        }).to(`#image-${index}`, {
          opacity: 0,
          scale: 2,
          filter: "saturate(0.1)",
          zIndex: 1,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.1");
      });
    }, galleryRef);

    ScrollTrigger.refresh();

    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert();
    };

    return () => ctx.revert();
  }, [images]);

  // SCROLL WHEEL
  useEffect(() => {
    scrollScope.current.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const myTrigger = document.documentElement;
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "scroll",
          trigger: myTrigger,
          start: "+=50px",
          end: () => "+=" + document.documentElement.scrollHeight + "px",
          scrub: 1,
        },
      });
  
      tl.to("#arrowBg", {
        rotation: () => document.documentElement.scrollHeight,
      });
  
      // Odświeżanie ScrollTrigger na starcie
      ScrollTrigger.refresh();
    });
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert(); // zamiast ScrollTrigger.getById("scroll").kill()
    };
  }, []);
  // SCROLL WHEEL END

  return (
    <>
    <Header fillLogo={siteConfig.colors.white} fillMenu={siteConfig.colors.white} langSwitcher={'/after-work'} /> 
      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          <span className={styles.subTitle}>Po pracy</span>Włóczę się,<br />kocham wspinaczkę.
        </h1>
        <Image src="/img/po-pracy/1-cover.webp" alt="Skrany Granat, Prawe Żebro — Tatry" width={2560} height={1440} />
      </section>
      
      <section className={styles.gallery} ref={galleryRef}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <h2 id={`imageTitle-${index}`} style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }}>
              {image.alt}
            </h2>
            <picture>
              <source media="(max-width: 650px)" srcSet={`/img/po-pracy/${image.srcMobile}`} />
              <img
                id={`image-${index}`}
                src={`/img/po-pracy/${image.src}`}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ transform: "scale(0)", opacity: 0, filter: "saturate(0.1)" }}
              />
            </picture>
          </React.Fragment>
        ))}
      </section>
      <BottomHooks HooksHeading="Na szczycie jest sypialnia bez ścian" HooksSpan="Pod gwiazdami" />

      {/* SCROLL LINK */}
      <div id="scroll" ref={scrollScope}>
        <ScrollArrow  width={8} height={30} ref={scrollArrowRef}/>
        <ScrollBg width={70} height={70} ref={scrollWheelRef}/>
      </div>
      {/* SCROLL LINK */}
    </>
  );
}
