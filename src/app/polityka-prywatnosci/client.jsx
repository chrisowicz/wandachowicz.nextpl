"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import Header from "../_components/header";
import { BottomHooks } from "../_components/bottomHooks";

export function ClientPrivacyPolicy() {

  useEffect(() => {
    document.body.classList.add('privacyPolicy');
    return () => {
      document.body.classList.remove('privacyPolicy');
    };
  }, []);

  return (
    <>
      <Header /> 
      <section className={styles.article}>
        <h1>Privacy Policy and Cookies — wandachowicz.com</h1>
        <div>
          <h2>Introduction</h2>
          <p>
            Your privacy is very important to me. This Privacy Policy describes what personal data I collect, how I process it, and your rights in relation to your personal data. The website is operated by Chris Wandachowicz, a freelance programmer, graphic designer, and UI/UX designer.
          </p>
          <h2>Data I Collect</h2>
          <p>
            My website does not collect any personal data, except for statistical data gathered by the <Link href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami</Link> analytics tool.  
            This data is collected for analytical purposes to better understand how the website is used and to enable improvements.  
            Umami ensures the anonymity of collected data and does not use cookies.  
            Additionally, Cloudflare, which protects and optimizes this website, may collect basic analytics data,  
            such as IP addresses, browser types, and general traffic patterns for security and performance purposes.  
            More details can be found in Cloudflare’s Privacy Policy: <Link href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy</Link>.
          </p>

          <h2>Cookies</h2>
          <p>
            My website does not use cookies for analytical purposes, as the Umami tool operates without them.  
            This ensures that using my website remains privacy-friendly.  
            However, Cloudflare may set technical cookies necessary for security and performance enhancement.  
            These cookies help identify and mitigate malicious traffic without tracking users’ browsing behavior.  
          </p>
          <h2>Your Rights</h2>
          <p>
            Since my website does not collect or store personal data of users, there is no need to exercise rights related to access, correction, deletion, restriction of processing, or objection to the processing of personal data in the context of this site.
          </p>
          <h2>Changes to the Privacy Policy</h2>
          <p>
            I may update my Privacy Policy as needed. Any changes will be posted on this page. I recommend regularly reviewing this page to stay informed of any updates.
          </p>
          <h2>Contact</h2>
          <p>
            If you have any questions about my Privacy Policy, please <Link href="/contact" className='contact'>contact</Link> to me.
          </p>
        </div>
      </section>
      <BottomHooks HooksHeading="Rules are made to be broken" HooksSpan="Not applicable to typography ;)" />
    </>
  );
}
