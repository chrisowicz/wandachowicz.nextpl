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
      <Header langSwitcher={'/privacy-policy'}/> 
      <section className={styles.article}>
        <h1>Polityka prywatności i pliki cookies — wandachowicz.com</h1>
        <div>
          <h2>Wprowadzenie</h2>
          <p>
            Twoja prywatność jest dla mnie bardzo ważna. Niniejsza Polityka Prywatności opisuje, jakie dane osobowe gromadzę, w jaki sposób je przetwarzam oraz jakie przysługują Ci prawa w odniesieniu do Twoich danych osobowych. Strona jest prowadzona przez Krzyśka Wandachowicza, freelancera – programistę, grafika oraz projektanta UI/UX.
          </p>
          <h2>Gromadzone dane</h2>
          <p>
            Moja strona nie gromadzi żadnych danych osobowych, poza danymi statystycznymi zbieranymi przez narzędzie analityczne <Link href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami</Link>.  
            Dane te są gromadzone w celach analitycznych, aby lepiej zrozumieć sposób korzystania ze strony i umożliwić jej ulepszanie.  
            Umami zapewnia anonimowość zbieranych danych i nie wykorzystuje plików cookies.  
            Dodatkowo, Cloudflare, które chroni i optymalizuje tę stronę, może zbierać podstawowe dane analityczne,  
            takie jak adresy IP, typy przeglądarek czy ogólne wzorce ruchu w celu zapewnienia bezpieczeństwa i wydajności.  
            Więcej informacji znajduje się w Polityce Prywatności Cloudflare: <Link href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy</Link>.
          </p>

          <h2>Pliki cookies</h2>
          <p>
            Moja strona nie używa plików cookies do celów analitycznych, ponieważ narzędzie Umami działa bez nich.  
            Dzięki temu korzystanie z mojej strony pozostaje przyjazne dla prywatności.  
            Jednak Cloudflare może ustawiać techniczne pliki cookies niezbędne do zapewnienia bezpieczeństwa i poprawy wydajności.  
            Te pliki cookies pomagają wykrywać i ograniczać złośliwy ruch, nie śledząc przy tym zachowań użytkowników.
          </p>
          <h2>Twoje prawa</h2>
          <p>
            Ponieważ moja strona nie gromadzi ani nie przechowuje danych osobowych użytkowników, nie ma potrzeby korzystania z praw dotyczących dostępu, sprostowania, usunięcia, ograniczenia przetwarzania ani sprzeciwu wobec przetwarzania danych osobowych w kontekście tej witryny.
          </p>
          <h2>Zmiany w Polityce Prywatności</h2>
          <p>
            Mogę aktualizować moją Politykę Prywatności w miarę potrzeb. Wszelkie zmiany będą publikowane na tej stronie. Zalecam regularne jej przeglądanie, aby być na bieżąco z ewentualnymi zmianami.
          </p>
          <h2>Kontakt</h2>
          <p>
            Jeśli masz jakiekolwiek pytania dotyczące mojej Polityki Prywatności, proszę <Link href="/kontakt" className="contact">skontaktuj się</Link> ze mną.
          </p>
        </div>
      </section>
      <BottomHooks HooksHeading="Zasady są po to, żeby je łamać" HooksSpan="Nie dotyczy typografii ;)" />
    </>
  );
}
