"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Footer } from "./footer";

export function BottomHooks({ HooksHeading, HooksSpan }) {
  const pathname = usePathname();
  const [showProjectsLink, setShowProjectsLink] = useState(false);

  useEffect(() => {
    setShowProjectsLink(pathname.includes("/projects"));
  }, [pathname]);

  return (
    <>
      <section id="bottomHooks">
        <div className="container">
          <h3>{HooksHeading}</h3>
          <h4>{HooksSpan}</h4>
          {showProjectsLink && (
            <Link href="/projects" className="showProjects more">
              Projects
            </Link>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
