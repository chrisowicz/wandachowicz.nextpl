"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./page.module.scss";
import Header from "../_components/header";
import { BottomHooks } from "../_components/bottomHooks";
import gsap from "gsap";

export function ClientContact() {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('contact');
    return () => {
      document.body.classList.remove('contact');
    };
  }, []);

  useLayoutEffect(() => {
    if (!heroSectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to("h1", {
        opacity: 1,
        scale: 1.8,
        duration: 3,
        ease: "power3.out",
      })
      .to("h1", {
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "power3.out",
      }, "-=0.1")
      .to("h2", {
        opacity: 1,
        scale: 1.8,
        duration: 2,
        ease: "power3.out",
      }, "-=0.1")
      .to("h2", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        ease: "power3.out",
      }, "-=0.1")
      .to("a", {
        opacity: 1,
        scale: 0.8,
        duration: 3,
        ease: "power3.out",
      }, "-=0.1");

    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header /> 
      <section className={styles.heroContact} ref={heroSectionRef}>
        <h1 style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>Have a question?</h1>
        <h2 style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>Let's talk.</h2>
        <a style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}} target="_blank" rel="noreferrer" href="mailto:hello@wandachowicz.com">hello@wandachowicz.com</a>
      </section>
      <BottomHooks HooksHeading="Let's get to know each other" HooksSpan="And let's create an amazing story together" />
    </>
  );
}
