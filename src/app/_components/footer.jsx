"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    // Ustawiamy datę dopiero po stronie klienta
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div id="bottom">
        {/* Wyświetl datę tylko po stronie klienta */}
        <p>{currentYear ? `${currentYear} — wandachowicz.pl` : "wandachowicz.pl"}</p>
        <Link href={"/privacy-policy"}>Polityka prywatności i cookies</Link>
      </div>
    </footer>
  );
}
