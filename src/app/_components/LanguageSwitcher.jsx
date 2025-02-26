"use client";

import { siteConfig } from "../_config/siteConfig";

export function LanguageSwitcher({ siteUrl = "/" }) {
  const handleSwitch = () => {
    // Przekierowanie na drugą domenę (lub port) podaną przez props.
    window.location.href = `${siteConfig.switcher}${siteUrl}`;
  };

  return (
    <button onClick={handleSwitch} className={styles.langSwitcher}>
      {siteConfig.lang === "pl" ? "• Go to EN •" : "• Przejdź na PL •"}
    </button>
  );
}
