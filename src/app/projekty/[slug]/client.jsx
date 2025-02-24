"use client";  // To oznacza, że ten komponent działa po stronie klienta

import { useEffect, useRef, useLayoutEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import Header from "@/app/_components/header";
// SCROLL WHEEL
import { ScrollArrow, ScrollBg } from "@/app/_components/icons";
// SCROLL WHEEL END
import { BottomHooks } from "@/app/_components/bottomHooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function ClientProjectDetails({ project }) {
  const HeroRef = useRef(null);
  const HeroTitleRef = useRef(null);
  const HeroLogoRef = useRef(null);
  const descRef = useRef(null);
  const descDarkBgRef = useRef(null);
  const descTextBgRef = useRef(null);
  const galleryRef = useRef(null);
  const sectionVideokRef = useRef(null);
  const videoRef = useRef(null);
  const sectionProjectLinkRef = useRef(null);
  const projectLinkRef = useRef(null);
  // SCROLL WHEEL
  const scrollScope = useRef(null);
  const scrollArrowRef = useRef(null);
  const scrollWheelRef = useRef(null);
  // SCROLL WHEEL END
  
  useEffect(() => {
    document.body.classList.add('project');
    return () => {
      document.body.classList.remove('project');
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 650);
    };
    checkScreenSize(); // Pierwsze sprawdzenie przy montowaniu
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useLayoutEffect(() => {
    if (!project) return; // Sprawdzamy, czy projekt jest dostępny
  
    const ctx = gsap.context(() => {
      gsap.to(HeroTitleRef.current, {
        opacity: 1,
        scale: 1.3,
        duration: 3,
        delay: 1,
        ease: "power3.out",
      });
      gsap.to(
        HeroTitleRef.current,
        {
          opacity: 0,
          scale: 5,
          duration: 2,
          delay: 0,
          ease: "power3.out",
        },
        "-=0.1" // równoczesne rozpoczęcie z poprzednią animacją
      );
      gsap.to(HeroLogoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 4,
        delay: 5,
        ease: "power3.out",
      });
    }, HeroRef); // Ustawienie scope na HeroRef
  
    return () => ctx.revert(); // Cleanup GSAP na unmount
  }, [project]);
  
  
  useLayoutEffect(() => {
    if (!project) return;
  
    const ctx = gsap.context(() => {
      const tlDesc = gsap.timeline({
        scrollTrigger: {
          id: "desc",
          trigger: descRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=200%",
        },
      });
  
      tlDesc.to(
        descDarkBgRef.current,
        {
          opacity: 1,
          scale: 1,
          zIndex: 2,
          duration: 10,
          ease: "power3.out",
        },
        "-=0.3",
        { scrub: 0.1 }
      );
  
      tlDesc.to(
        descTextBgRef.current,
        {
          opacity: 1,
          scale: 1,
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          duration: 10,
          ease: "power3.out",
        },
        "-=0.1"
      );
    }, descRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert(); // zamiast ScrollTrigger.getById("desc").kill()
    };
  }, [project]);
  
  
  useLayoutEffect(() => {
    if (!project) return;
  
    const endValue = `+=${(project.gallery.length + 1) * 100}%`;
  
    const ctx = gsap.context(() => {
      const tlGallery = gsap.timeline({
        scrollTrigger: {
          id: "gallery",
          trigger: galleryRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: endValue,
        },
      });
  
      project.gallery.forEach((_, index) => {
        const imageId = `#image-${index + 1}`;
        tlGallery.to(imageId, {
          opacity: 1,
          scale: 1,
          filter: "saturate(1)",
          zIndex: 2,
          duration: 12,
          ease: "power3.out",
        });
        tlGallery.to(
          imageId,
          {
            opacity: 0,
            scale: 2,
            filter: "saturate(0.1)",
            zIndex: 1,
            duration: 15,
            ease: "power3.out",
          },
          "-=0.1"
        );
      });
    }, galleryRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert(); // zamiast ScrollTrigger.getById("gallery").kill()
    };
  }, [project]);

  useLayoutEffect(() => {
    if ( !project || !project.video ) return;
  
    const ctx = gsap.context(() => {
      const tlDesc = gsap.timeline({
        scrollTrigger: {
          id: "projectVideo",
          trigger: sectionVideokRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=100%",
        },
      });
  
      tlDesc.to(videoRef.current, {
        opacity: 1,
        scale: 1,
        zIndex: 3,
        duration: 4,
        ease: "power3.out",
      });
  
      tlDesc.to(
        videoRef.current,
        {
          opacity: 0,
          scale: 3,
          duration: 2,
          ease: "power3.out",
        },
        "-=0.1"
      );
    }, sectionProjectLinkRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert();
    };
  }, [project]);
  
  
  useLayoutEffect(() => {
    if (!project || project.link === "") return;
  
    const ctx = gsap.context(() => {
      const tlDesc = gsap.timeline({
        scrollTrigger: {
          id: "projectLink",
          trigger: sectionProjectLinkRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=100%",
        },
      });
  
      tlDesc.to(projectLinkRef.current, {
        opacity: 1,
        scale: 1,
        zIndex: 3,
        duration: 4,
        ease: "power3.out",
      });
  
      tlDesc.to(
        projectLinkRef.current,
        {
          opacity: 0,
          scale: 8,
          zIndex: 2,
          duration: 2,
          ease: "power3.out",
        },
        "-=0.1"
      );
    }, sectionProjectLinkRef);
  
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };
  
    window.addEventListener("resize", updateAnimation);
  
    return () => {
      window.removeEventListener("resize", updateAnimation);
      ctx.revert(); // zamiast ScrollTrigger.getById("projectLink").kill()
    };
  }, [project]);


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
    ScrollTrigger.refresh();
    tl.to('#arrowBg', { rotation: () => document.documentElement.scrollHeight });
    
    ScrollTrigger.refresh();
    const updateAnimation = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
      ScrollTrigger.getById("scroll").kill();
    };

  }, []);
  // SCROLL WHEEL END
  

  return (
    <>
      <Header />
      <section className={styles.projectHero} ref={HeroRef}>
        <h1 className={styles.projectHeroTitle} ref={HeroTitleRef} style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }}>{project.title}</h1>
        <img className={styles.projectLogo} ref={HeroLogoRef} src={project.logo} alt={project.title} style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }} />
      </section>
      <section className={styles.description} ref={descRef} style={{ transform: "translate(0, 0)" }}>
        <div className={styles.dark} ref={descDarkBgRef} style={{ transform: "scale(0)", opacity: 0 }}>
          <p ref={descTextBgRef} style={{ transform: "scale(5)", opacity: 0 }}>{project.content}</p>
        </div>
      </section>
      <section className={styles.gallery} ref={galleryRef}>
        {project.gallery.map((image, index) => (
          <picture key={index}>
            <source media="(max-width: 650px)" srcSet={`/projects/${image}-mobi.webp`}/>
            <img id={`image-${index + 1}`} src={`/projects/${image}.webp`} alt={`${index + 1} ${project.title}`} style={{ transform: "scale(0)", opacity: 0, filter: "saturate(0.1)" }} />
          </picture>
        ))}
      </section>
      {project.video && (
        <section className={styles.video} ref={sectionVideokRef}>
          <video 
            ref={videoRef} 
            className={styles.player} 
            controls autoPlay muted playsInline webkit-playsinline="true" preload="auto" 
            width={'80%'} 
            height={'80%'} 
            poster={isMobile ? `/projects/${project.video}-mobi.jpg` : `/projects/${project.video}.jpg`}
            style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }}
          >
            <source media="(max-width: 650px)" src={`/projects/${project.video}-mobi.mp4`} type="video/mp4" />
            <source media="(min-width: 651px)" src={`/projects/${project.video}.mp4`} type="video/mp4" />
            This browser does not support the video tag.
          </video>
        </section>
      )}
      {project.link !== "" && (
        <section className={styles.projectLink} ref={sectionProjectLinkRef}>
          <Link ref={projectLinkRef} href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" style={{ transform: "translate(-50%, -50%) scale(0)", opacity: 0 }}>{project.link}</Link>
        </section>
      )}


      <BottomHooks HooksHeading={project.bottomHooksHeading} HooksSpan={project.bottomHooksSpan} />
      {/* SCROLL LINK */}
      <div id="scroll" ref={scrollScope}>
        <ScrollArrow  width={8} height={30} ref={scrollArrowRef}/>
        <ScrollBg width={70} height={70} ref={scrollWheelRef}/>
      </div>
      {/* SCROLL LINK */}
    </>
  );
}
