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
        text: "Competencies",
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
        ease: "none",
      });
  
    });
  
    ScrollTrigger.refresh();
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ScrollTrigger.getById("scroll")?.kill();
      ctx.revert();
    };
  }, []);
  // // SCROLL WHEEL END
  

  return (
    <>
      <Header />
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
            <p>I am a front-end developer with solid experience in designing and coding modern, responsive websites. Since 2015 I have been writing dedicated templates for various CMS systems, combining knowledge of HTML, CSS, JavaScript, and basic PHP. Since 2020 I have been creating minimalist templates for WordPress, independently designing UI and then coding interfaces, ensuring full control over each stage of the project. I focus on optimizing user experience (UX), code performance (Lighthouse) and maintaining the highest quality. Since 2024 I have focused on the practical use of JavaScript and its numerous libraries such as React.js, Gsap.js and tools like Gulp.js. In search of optimization and speed of website performance, I have become interested in Headless CMS. Monolithic systems are heavy and separating the frontend from the backend provides amazing opportunities for data presentation (Rest API) in the form of micro-applications and their optimization.</p>
          </div>
          <div className={styles.skills} ref={languagesRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Programming languages</h3>
            <ul>
            {skills.coding.languages.map((language, index) => (
              <li className={`level-${language.level}`} key={index}>
                {language.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={frameworksRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Frameworks and Libraries</h3>
            <ul>
            {skills.coding.frameworks_and_libraries.map((fal, index) => (
              <li className={`level-${fal.level}`} key={index}>
                {fal.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={toolsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Tools and Technologies</h3>
            <ul>
            {skills.coding.tools_and_technologies.map((tools, index) => (
              <li className={`level-${tools.level}`} key={index}>
                {tools.name}
              </li>
            ))}
            </ul>
          </div>
          <div className={styles.skills} ref={cmsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>CMS Systems</h3>
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
            <p>I designed my first interface back in 2008. It was clunky ;). I began gaining practical experience between 2010 and 2015, working with my first creative agency and on my own projects for various clients. Since 2015 I have been designing consciously, continuously expanding my knowledge in UI/UX, web design, logo design and many other areas related to design and coding. Since 2020 I have been designing and coding dedicated templates for WordPress, which include logo designs, websites or online stores, coding and complete implementation. I have created many company websites, online stores, blogs, information portals, classified ad portals, reservation systems and registration systems. Since 2024 I have focused on typography, minimalism and important UX principles. I design with the idea that less is more. Whenever possible in a given project, I strive to apply my established practices while constantly expanding my knowledge. In my opinion, a good website is not just about popular standards like material design but, above all, a story—a good story about you or your product. I design in all the leading graphic programs. I use tools from the Affinity and Adobe suite. For a long time, I have been designing UI/UX projects in Figma with support from Affinity Designer for more complex components.</p>
          </div>
          <div className={styles.skills} ref={webDesignSkillsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Programs</h3>
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
            <h2>Busy Bee: How I Work</h2>
            <p>At the project level, I function well in efficient communication: I use Trello and have also worked with Slack and many other applications. No interface or workflow system scares me. In my projects, I apply Scrum methodologies. Even when working as a freelancer, I believe that using an organized and proven workflow accelerates task execution. Thanks to thoughtful project stages (Sprint) and efficient communication with the client (Daily Scrum, Sprint Review), we can focus on our tasks and everyone knows what to do. I can manage projects, distribute tasks and monitor their progress. I am fluent in terminal usage (CLI), I use version control systems (GitHub) and I prefer to connect to servers via SSH, which allows me to install necessary software and perform production deployments.</p>
          </div>
          <div className={styles.skills} ref={workFlowSkillsRef} style={{ transform: "scale(5)", opacity: 0 }}>
            <h3>Project Communication</h3>
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
      <BottomHooks HooksHeading="Technology changes the world," HooksSpan="and creativity changes technology." />
    </>
  );
}
