"use client";

import { useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { siteConfig } from '../_config/siteConfig';
import Link from "next/link";
import { LanguageSwitcher } from './LanguageSwitcher';
import { 
  MenuOpen, 
  MenuClose,
  LogoSignet,
  Behance,
  Dribbble,
  Instagram,
  Linkedin,
  Github
} from './icons';

export default function Header({fillLogo, fillMenu, langSwitcher}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const mainNavRef = useRef(null);
  const router = useRouter();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    const mainNav = mainNavRef.current;
    if (mainNav) {
      mainNav.classList.toggle('open');
    }
    document.body.classList.toggle('noScroll');
    document.documentElement.classList.toggle("noScroll");
  };
  
  return (
    <>
      <nav id="mainNav" ref={mainNavRef}>
        <LanguageSwitcher siteUrl={langSwitcher}/>
        <ul id='nav'>
          {siteConfig.navMenu.slice(0, -1).map((item) => (
            <li key={item.href} className={router.pathname === item.href ? 'active' : ''}>
              <Link onClick={toggleNav} href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div id="social">
          <Link href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label='Dołącz do mnie na Linkedin'>
            <Linkedin />
          </Link>
          <Link href={siteConfig.contact.behance} target="_blank" rel="noopener noreferrer" aria-label='Dołącz do mnie na BeHance'>
            <Behance />
          </Link>
          <Link href={siteConfig.contact.dribbble} target="_blank" rel="noopener noreferrer" aria-label='Dołącz do mnie na Dribbble'>
            <Dribbble />
          </Link>
          <Link href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label='Dołącz do mnie na Instagram'>
            <Instagram />
          </Link>
          <Link href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label='Dołącz do mnie na GitHub'>
            <Github />
          </Link>
        </div>
      </nav>
      <header>
        <Link
          href="/" id="logo" 
          className={`${isNavOpen ? 'navIsOpen' : ''}`}
          aria-label='Go to home page'
          onClick={isNavOpen ? toggleNav : undefined}
        >
          {isNavOpen ? <LogoSignet fill={siteConfig.colors.silver} width={'104'} height={'94'} /> : <LogoSignet fill={fillLogo} width={'104'} height={'94'} />}
        </Link>
        <button 
          id="menuToggle" 
          onClick={toggleNav} 
          className={`${isNavOpen ? 'close' : ''}`}
          aria-label='Navigation menu'
          aria-controls="mainNav" 
          aria-expanded={isNavOpen}
        >
          {isNavOpen ? <MenuClose fill={siteConfig.colors.silver} /> : <MenuOpen fill={fillMenu} width={100} height={14} />}
        </button>
      </header>
    </>
  );
}