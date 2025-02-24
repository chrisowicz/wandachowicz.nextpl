"use client";
import { useEffect } from "react";
import Header from "./_components/header";
import { HeroSection } from "./_components/home/heroSection";
import { FutureSite } from "./_components/home/futureSite";
import { AboutMe } from "./_components/home/aboutMe";
import { Languages } from "./_components/home/languages";
import { Competencies } from "./_components/home/competence";
import { Work } from "./_components/home/work";
import { BottomHooks } from "./_components/bottomHooks";


export default function HomeClient({ projects }) {
  
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <FutureSite />
      <AboutMe />
      <Languages />
      <Competencies />
      <Work projects={projects} />
      <BottomHooks HooksHeading="Kawa czy herbata?" HooksSpan="Espresso!" />
    </>
  );
}
