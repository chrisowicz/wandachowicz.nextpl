"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import styles from "./page.module.scss";
import { siteConfig } from "../_config/siteConfig";
import Header from "../_components/header";
// SCROLL WHEEL
import { ScrollArrow, ScrollBg } from "@/app/_components/icons";
// SCROLL WHEEL END
import { BottomHooks } from "../_components/bottomHooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function ClientMeetMe() {
  const slideOneRef = useRef(null);
  const slideOneFirstRef = useRef(null);
  const slideOneSecondRef = useRef(null);

  const slideTwoRef = useRef(null);
  const slideTwoFirstTextRef = useRef(null);
  const slideTwoFirstTextImageRef = useRef(null);
  const slideTwoSecondTextRef = useRef(null);
  const slideTwoSecondTextImageRef = useRef(null);
  const slideTwoThreeTextRef = useRef(null);
  const slideTwoThreeTextImageRef = useRef(null);
  const slideTwoFourTextRef = useRef(null);
  const slideTwoFourTextImageRef = useRef(null);

  const slideFiveRef = useRef(null);
  const slideFiveFirstTextRef = useRef(null);
  const slideFiveWhiteRef = useRef(null);
  const slideFiveWhiteTextRef = useRef(null);

  // SCROLL WHEEL
  const scrollScope = useRef(null);
  const scrollArrowRef = useRef(null);
  const scrollWheelRef = useRef(null);
  // SCROLL WHEEL END
  
  useEffect(() => {
    document.body.classList.add('meetMe');
    return () => {
      document.body.classList.remove('meetMe');
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
  
      mm.add("(max-width: 650px)", () => {
        gsap.to(slideOneFirstRef.current, {
          opacity: 1,
          duration: 4,
          scale: 1,
          delay: 1,
          ease: "power3.out",
        });
        gsap.to(slideOneSecondRef.current, {
          opacity: 1,
          scale: 1,
          duration: 3,
          delay: 4,
          ease: "power3.out"
        });
      });
  
      mm.add("(min-width: 650.1px)", () => {
        gsap.to(slideOneFirstRef.current, {
          opacity: 1,
          scale: 1.3,
          duration: 4,
          delay: 1,
          ease: "power3.out",
        });
        gsap.to(slideOneSecondRef.current, {
          opacity: 1,
          scale: 1,
          duration: 3,
          delay: 4,
          ease: "power3.out"
        });
      });
  
      return () => mm.revert();
    }, slideOneRef);
  
    return () => ctx.revert();
  }, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slideTwoRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 0.1,
          start: "top top",
          end: "+=700%",
        },
      });
  
      // SLIDE TWO
      tl.to(slideTwoFirstTextRef.current, {
        opacity: 1,
        scale: 2,
        y: "-50%",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      })
      .to(slideTwoFirstTextRef.current, {
        opacity: 0,
        scale: 5,
        y: "-50%",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoFirstTextImageRef.current, {
        opacity: 1,
        scale: 1,
        filter: "saturate(1)",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoFirstTextImageRef.current, {
        opacity: 0,
        scale: 2,
        filter: "saturate(0.1)",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1");
      tl.to(slideTwoSecondTextRef.current, {
        opacity: 1,
        scale: 2,
        y: "-50%",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      })
      .to(slideTwoSecondTextRef.current, {
        opacity: 0,
        scale: 5,
        y: "-50%",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoSecondTextImageRef.current, {
        opacity: 1,
        scale: 1,
        filter: "saturate(1)",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoSecondTextImageRef.current, {
        opacity: 0,
        scale: 2,
        filter: "saturate(0.1)",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1");
  
      // THREE TEXT
      tl.to(slideTwoThreeTextRef.current, {
        opacity: 1,
        scale: 2,
        y: "-50%",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoThreeTextRef.current, {
        opacity: 0,
        scale: 5,
        y: "-50%",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoThreeTextImageRef.current, {
        opacity: 1,
        scale: 1,
        filter: "saturate(1)",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoThreeTextImageRef.current, {
        opacity: 0,
        scale: 2,
        filter: "saturate(0.1)",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1");
  
      // FOUR TEXT
      tl.to(slideTwoFourTextRef.current, {
        opacity: 1,
        scale: 2,
        y: "-50%",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoFourTextRef.current, {
        opacity: 0,
        scale: 5,
        y: "-50%",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoFourTextImageRef.current, {
        opacity: 1,
        scale: 1,
        filter: "saturate(1)",
        zIndex: 2,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1")
      .to(slideTwoFourTextImageRef.current, {
        opacity: 0,
        scale: 2,
        filter: "saturate(0.1)",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.1");
  
    }, slideTwoRef);
  
    return () => ctx.revert();
  }, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
      const mm = gsap.matchMedia();
  
      mm.add("(max-width: 650px)", () => {
        const tlFive = gsap.timeline({
          scrollTrigger: {
            trigger: slideFiveRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            start: "top",
            end: "+=600%",
          },
        });
  
        // First
        tlFive.to(slideFiveFirstTextRef.current, {
          opacity: 1,
          scale: 1,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          duration: 2,
          ease: "power3.out"
        })
        .to(slideFiveFirstTextRef.current, {
          opacity: 0,
          scale: 5,
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.1");
  
        // Second
        tlFive.to(slideFiveWhiteRef.current, {
          opacity: 1,
          scale: 1,
          zIndex: 2,
          duration: 6,
          ease: "bounce.in"
        }, "-=0.3", {scrub: 0.2})
        .to(slideFiveWhiteTextRef.current, {
          opacity: 1,
          scale: 1,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          duration: 2,
          ease: "power3.out"
        }, "-=0.1");
      });
  
      mm.add("(min-width: 650.1px)", () => {
        const tlFive = gsap.timeline({
          scrollTrigger: {
            trigger: slideFiveRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            start: "top",
            end: "+=600%",
          },
        });
  
        // First
        tlFive.to(slideFiveFirstTextRef.current, {
          opacity: 1,
          scale: 2,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          duration: 2,
          ease: "power3.out"
        })
        .to(slideFiveFirstTextRef.current, {
          opacity: 0,
          scale: 5,
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.1");
  
        // Second
        tlFive.to(slideFiveWhiteRef.current, {
          opacity: 1,
          scale: 1,
          zIndex: 2,
          duration: 6,
          ease: "bounce.in"
        }, "-=0.3", {scrub: 0.2})
        .to(slideFiveWhiteTextRef.current, {
          opacity: 1,
          scale: 1,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          duration: 2,
          ease: "power3.out"
        }, "-=0.1");
      });
  
      return () => mm.revert();
    }, slideFiveRef);
  
    return () => ctx.revert();
  }, []);

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
      <Header langSwitcher={'/meet-me'}/>
      <section className={styles.slideOne} ref={slideOneRef}>
        <h1>
          <span className={styles.first} style={{ transform: "scale(0)", opacity: 0 }} ref={slideOneFirstRef}>Od jakiegoś czasu</span> 
          <span className={styles.second} style={{ transform: "scale(0)", opacity: 0 }} ref={slideOneSecondRef}>w życiu robię cztery rzeczy</span>
        </h1>
      </section>

      <section className={styles.slideTwo} ref={slideTwoRef}>
        <h2 ref={slideTwoFirstTextRef} style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>
          Zakochałem się
        </h2>
        <picture>
          <source media="(max-width: 650px)" srcSet="/img/mobileA&K.webp"/>
          <img 
            src="/img/desktopA&K.webp" alt="Zakochałem się" ref={slideTwoFirstTextImageRef} width={2560} height={1440} style={{transform: "scale(0)", opacity: 0, filter: "saturate(0.1)"}}
          />
        </picture>
        <h2 ref={slideTwoSecondTextRef} style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>
          Pracuję
        </h2>
        <picture>
          <source media="(max-width: 650px)" srcSet="/img/workMobi.webp"/>
          <img 
            src="/img/work.webp" alt="Tworzę niezwykłe strony internetowe" ref={slideTwoSecondTextImageRef} width={2560} height={1440} style={{transform: "scale(0)", opacity: 0, filter: "saturate(0.1)"}}
          />
        </picture>
        <h2 ref={slideTwoThreeTextRef} style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>
          Tańczę latino
        </h2>
        <picture>
          <source media="(max-width: 650px)" srcSet="/img/dance-mobi.webp"/>
          <img src="/img/dance.webp" alt="Tańczę latino, impro, taniec nowoczesny" ref={slideTwoThreeTextImageRef} width={2560} height={1440} style={{transform: "scale(0)", opacity: 0, filter: "saturate(0.1)"}}/>
        </picture>

        <h2 ref={slideTwoFourTextRef} style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>
          Włóczę się
        </h2>
        <picture>
          <source media="(max-width: 650px)" srcSet="/img/lodowy-szczyt-mobi.webp"/>
          <img src="/img/lodowy-szczyt.webp" alt="Uwielbiam wspinaczkę skalną, wysokogórską oraz biwakowanie na szczytach." ref={slideTwoFourTextImageRef} width={2560} height={1440} style={{transform: "scale(0)", opacity: 0, filter: "saturate(0.1)"}}/>
        </picture>
      </section>
      <section className={styles.slideFive} ref={slideFiveRef}>
        <h2 ref={slideFiveFirstTextRef} style={{transform: "translate(-50%, -50%) scale(0)", opacity: 0}}>To, co było<br />wcześniej...</h2>
        <div ref={slideFiveWhiteRef} className={styles.white} style={{transform: "scale(0)", opacity: 0}}>
          <h2 ref={slideFiveWhiteTextRef} style={{transform: "translate(-50%, -50%) scale(5)", opacity: 0}}>Jest już nieważne,<br />bo ważne jest dzisiaj<br />i niezwykłe jutro.</h2>
        </div>
      </section>

      <BottomHooks HooksHeading="Do pamięci" HooksSpan="Jak zamknę oczy, to mam przed nimi piękne rzeczy, które widziałem oraz niesamowite przeżycia, które czułem." />

      {/* SCROLL LINK */}
      <div id="scroll" ref={scrollScope}>
        <ScrollArrow  width={8} height={30} ref={scrollArrowRef}/>
        <ScrollBg width={70} height={70} ref={scrollWheelRef}/>
      </div>
      {/* SCROLL LINK */}
    </>
  );
}
