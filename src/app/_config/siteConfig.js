

export const siteConfig = {
  navMenu: [
    {
      label: "Projekty",
      href: "/projekty",
    },
    {
      label: "Poznaj mnie",
      href: "/poznaj-mnie",
    },
    {
      label: "Kompetencje",
      href: "/kompetencje",
    },
    {
      label: "Po pracy",
      href: "/po-pracy",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
    {
      label: "Polityka prywatności",
      href: "/polityka-prywatnosci",
    },
  ],
  colors: {
    dark: "#404040", 
    white: "#f4f4f4", 
    silver: "#878787",
    darkBg: "#3C3B3A",
  },
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  lang: process.env.NEXT_PUBLIC_LANG,
  switcher: process.env.NEXT_PUBLIC_SWITCH_DOMAIN,
  contact: {
    mail: "witaj@wandachowicz.com",
    linkedin: "https://www.linkedin.com/in/wandachowicz/",
    behance: "https://www.behance.net/wandachowicz",
    dribbble: "https://dribbble.com/wandachowicz",
    instagram: "https://www.instagram.com/wandachowicz_com/",
    github: "https://github.com/chrisowicz",
  }
}