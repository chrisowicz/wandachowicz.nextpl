"use client";
import { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "./_components/header";
import { BottomHooks } from "./_components/bottomHooks";
import gsap from "gsap";
import './notFound.scss';


export default function NotFound() {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('notFound');
    return () => {
      document.body.classList.remove('notFound');
    };
  }, []);

  useLayoutEffect(() => {
    gsap.to(heroSectionRef.current.querySelector("h1"), {
      opacity: 1,
      scale: 1.4,
      duration: 4,
      delay: 1,
      ease: "power3.out",
    });
    gsap.to(heroSectionRef.current.querySelector("h1"), {
      opacity: 0,
      scale: 0,
      duration: 2,
      delay: 0,
      ease: "power3.out",
    }, "-=0.1");

    gsap.to(heroSectionRef.current.querySelector("h2"), {
      opacity: 1,
      scale: 1.4,
      duration: 4,
      delay: 0,
      ease: "power3.out",
    }, "-=0.1");
    gsap.to(heroSectionRef.current.querySelector("h2"), {
      opacity: 0,
      scale: 0,
      duration: 2,
      delay: 1,
      ease: "power3.out",
    }, "-=0.1");

    gsap.to(heroSectionRef.current.querySelector("a"), {
      opacity: 1,
      scale: 1.4,
      duration: 4,
      delay: 0,
      ease: "power3.out",
    }, "-=0.1");
  }, []);

  return (
    <>
      <Header />
      <section id="heroNotFound" ref={heroSectionRef}>
        <h1 style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>Nie mam takiej strony ;(</h1>
        <h2 style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>Ale nic takiego się nie stało!</h2>
        <Link style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}} href='/'>Zacznij od początku ;)</Link>
      </section>
      <BottomHooks HooksHeading="Jesteś poza szlakiem ;0" HooksSpan="To dobre miejsce na biwak!"/>
    </>
  )
}