"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import skills from './skills.json';
import styles from "./page.module.scss";
import { siteConfig } from "../_config/siteConfig";
import Header from "../_components/header";
import { BottomHooks } from "../_components/bottomHooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function ClientCompetencies() {
  
  const competencesScrollIcon = useRef(null);
  const heroSectionRef = useRef(null);
  const heroSectionTitleRef = useRef(null);
  const competenciesRef = useRef(null);
  // const renderDots = (level) => '•'.repeat(level);

  // Referencje do sekcji "coding"
  const codingRef = useRef(null);
  const codingDescRef = useRef(null);
  const languagesRef = useRef(null);
  const frameworksRef = useRef(null);
  const toolsRef = useRef(null);
  const cmsRef = useRef(null);

  // Referencje do innych sekcji
  const webDesignRef = useRef(null);
  const webDesignDescRef = useRef(null);
  const webDesignSkillsRef = useRef(null);

  const workFlowRef = useRef(null);
  const workFlowDescRef = useRef(null);
  const workFlowSkillsRef = useRef(null);

  // SCROLL WHEEL
  const scrollScope = useRef(null);
  const scrollArrowRef = useRef(null);
  const scrollWheelRef = useRef(null);
  // SCROLL WHEEL END
  
  useEffect(() => {
    document.body.classList.add('competencies');
    return () => {
      document.body.classList.remove('competencies');
    };
  }, []);

  useEffect(() => {
    const scrollWheel = competencesScrollIcon.current;
    scrollWheel.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroSectionTitleRef.current, {
        duration: 2,
        text: "Kompetencje",
        delay: 1,
      });
    }, heroSectionRef);
  
    return () => ctx.revert();
  }, []);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
      const tlDesc = gsap.timeline({
        scrollTrigger: {
          trigger: competenciesRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=2000%",
        }
      });
  
      tlDesc.to(codingRef.current, { opacity: 1, scale: 1, zIndex: 2, duration: 10, ease: "power3.out" }, "-=0.3", {scrub: 0.1})
            .to(codingDescRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(codingDescRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
  
            .to(languagesRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(languagesRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
  
            .to(frameworksRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(frameworksRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
  
            .to(toolsRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(toolsRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
  
            .to(cmsRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
  
            .to(codingRef.current, { opacity: 0, scale: 0, zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.3", {scrub: 0.1})
  
            .to(webDesignRef.current, { opacity: 1, scale: 1, zIndex: 2, duration: 10, ease: "power3.out" }, "-=0.3", {scrub: 0.1})
            .to(webDesignDescRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(webDesignDescRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
            .to(webDesignSkillsRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(webDesignRef.current, { opacity: 0, scale: 0, zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1", {scrub: 0.1})
  
            .to(workFlowRef.current, { opacity: 1, scale: 1, zIndex: 2, duration: 10, ease: "power3.out" }, "-=0.3", {scrub: 0.1})
            .to(workFlowDescRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.2")
            .to(workFlowDescRef.current, { opacity: 0, scale: 0, transform: "translate(-50%, -50%)", zIndex: 1, duration: 10, ease: "power3.out" }, "-=0.1")
            .to(workFlowSkillsRef.current, { opacity: 1, scale: 1, transform: "translate(-50%, -50%)", zIndex: 3, duration: 10, ease: "power3.out" }, "-=0.1");
  
    }, competenciesRef);
  
    return () => ctx.revert();
  }, []);

  // // SCROLL WHEEL
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
  
      tl.to(competencesScrollIcon.current, {
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
  
  // // SCROLL WHEEL END
  

  return (
    <>
      <Header langSwitcher={'/competencies'}/>
      <Image src={"/img/competenciesSectionBg.svg"} alt={"Scroll"} className={styles.competencesScrollIcon} ref={competencesScrollIcon} width={120} height={93} />
      <section className={styles.heroSection} ref={heroSectionRef}>
        <h1>
          <span className="clamp">&#123;</span>
          <span ref={heroSectionTitleRef}></span>
          <span className="clamp">&#125;</span>
        </h1>
      </section>

      <section className={styles.competenciesPage} ref={competenciesRef}>
        <div className={styles.coding} ref={codingRef} style={{ transform: "scale(0)", opacity: 0 }}>
          <div className={styles.competenciesDesc} ref={codingDescRef} style={{ transform: "scale(5) translate(0, 0)", opacity: 0 }}>
            <h2>Front-end developer</h2>
            <p>Jestem frontend developerem z solidnym doświadczeniem w projektowaniu i kodowaniu nowoczesnych, responsywnych stron internetowych.<br />Od 2015 roku piszę dedykowane szablony pod różne systemy CMS, łączę wiedzę z zakresu HTML, CSS, JavaScript oraz podstaw PHP.<br />Od 2020 roku piszę minimalistyczne szablony pod WordPress, samodzielnie projektuję UI i następnie koduję interfejsy, zapewniając pełną kontrolę nad każdym etapem realizacji projektu. Skupiam się na optymalizacji doświadczeń użytkownika (UX), wydajności kodu (Light House) oraz zachowaniu najwyższej jakości wykonania.<br />Od 2024 roku skupiłem się na praktycznym stosowaniu Java Script oraz jego licznych bibliotek takich jak React.js, Gsap.js oraz narzędzi takich jak Gulp.js. W poszukiwaniu optymalizacji i szybkości działania stron internetowych zainteresowałem się Headless CMS. Monolityczne systemy są ciężkie, a odzielenie frontendu od backendu daje niesamowite możliwości prezentacji danych (Rest API) w postaci mikroaplikacji oraz ich optymalizacji.</p>
          </div>
          <div className={styles.skills} ref={languagesRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Języki programowania</h3>
            <ul>
            {skills.coding.languages.map((language, index) => (
              <li className={`level-${language.level}`} key={index}>
                {language.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={frameworksRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Frameworki i biblioteki</h3>
            <ul>
            {skills.coding.frameworks_and_libraries.map((fal, index) => (
              <li className={`level-${fal.level}`} key={index}>
                {fal.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={toolsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Narzędzia i technologie</h3>
            <ul>
            {skills.coding.tools_and_technologies.map((tools, index) => (
              <li className={`level-${tools.level}`} key={index}>
                {tools.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={cmsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Systemy CMS</h3>
            <ul>
            {skills.coding.cms.map((cms, index) => (
              <li className={`level-${cms.level}`} key={index}>
                {cms.name}
              </li>
            ))}
            </ul>
          </div>
        </div>

        <div className={styles.webDesign} ref={webDesignRef} style={{ transform: "scale(0)", opacity: 0 }}>
          <div className={styles.competenciesDesc} ref={webDesignDescRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h2>Web designer</h2>
            <p>Pierwszy interfejs zaprojektowałem już w 2008 roku. Był toporny ;). Praktyki zacząłem nabywać w latach  2010 — 2015 przy współpracy z pierwszą agencją kreatywną oraz we własnych projektach dla wielu klientów.<br />Od 2015 roku projektuję świadomie, ciągle powiększając swoją wiedzę z zakresu UI/UX, web designu, logo designu i w wielu innych obszarach związanych z projektowaniem i kodowaniem.<br />Od 2020 roku projektuję i koduję dedykowane szablony pod WordPressa, w skład których wchodzą m.in. projekty logotypu, strony lub sklepu internetowego, kodowanie i kompleksowe wdrożenie. Wykonałem wiele stron firmowych, sklepów internetowych, blogów, portali informacyjnych, ogłoszeniowych, systemów rezerwacji i rejestracji.<br />Od 2024 roku skupiłem się na typografii, minimaliźmie oraz ważnym UX. Projektuję zgodnie z zasadą, że czym mniej, tym więcej. O ile to jest możliwe w konkretnym projekcie, staram się wdrażać swoje wypracowane praktyki oraz stale poszerzam swoją wiedzę. Moim zdaniem dobra strona internetowa to nie tylko oklepane standardy jak material design, ale przede wszystkim opowieść. Dobra opowieść o Tobie lub Twoim produkcie.<br />Projektuję we wszystkich liczących się programach graficznych. Użytkuję programy ze stajni Affinity, Adobe. Od dłuższego czasu projekty UI/UX rysuję w Figmie ze wsparciem Affinity Designer dla potrzeb bardziej skomplikowanych komponentów.</p>
          </div>
          <div className={styles.skills} ref={webDesignSkillsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Programy</h3>
            <ul>
            {skills.design.map((skill, index) => (
              <li className={`level-${skill.level}`} key={index}>
                {skill.name}
              </li>
            ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.workFlow} ref={workFlowRef} style={{ transform: "scale(0)", opacity: 0 }}>
          <div className={styles.competenciesDesc} ref={workFlowDescRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h2>Pszczółka Robotnica, czyli jak pracuję</h2>
            <p>Na poziomie projektowym funkcjonuję w sprawnej komunikacji: korzystam z Trello, pracowałem również na Slacku, jak i w wielu innych aplikacjach. Żaden interfejs i system postępowania nie jest mi straszny.<br />W swoich projektach stosuję metodyki Scruma. Działając nawet jako freelancer uważam, że korzystanie z uporządkowanego i sprawdzonego systemu postępowania przyśpiesza wykonanie zadań. Dzięki przemyślanym etapom projektu (Sprint) i sprawnej komunikacji z klientem (Daily Scrum, Sprint Review) jesteśmy w stanie wykonać nasze zadania w skupieniu, a każdy wie, co ma robić.<br />Potrafię zarządzać projektem, rozdzielać zadania i pilnować stanu realizacji. Płynnie poruszam się w terminalu (CLI), korzystam z systemu kontroli wersji (github), a z serwerem preferuję łączyć się przez SSH, co pozwala mi na instalacje potrzebnego oprogramowania i produkcyjne publikacje.</p>
          </div>
          <div className={styles.skills} ref={workFlowSkillsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Komunikacja projektowa</h3>
            <ul>
            {skills.flow.map((skill, index) => (
              <li className={`level-${skill.level}`} key={index}>
                {skill.name}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>
      <BottomHooks HooksHeading="Technologie zmieniają świat," HooksSpan="a kreatywność zmienia technologie." />
    </>
  );
}
