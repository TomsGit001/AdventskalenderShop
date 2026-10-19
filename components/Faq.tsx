"use client";

import { useState } from "react";
import { Deco } from "./Deco";

const FAQS = [
  { q: "Für welches Alter ist das Buch geeignet?", a: "Das Buch eignet sich für Kinder von ca. 6 bis 7 Jahren. Jüngere Kinder genießen die Geschichten, ältere rätseln mehr mit." },
  { q: "Wie funktioniert der Adventskalender?", a: "Ab dem 1. Dezember lest ihr jeden Tag ein Kapitel und löst gemeinsam oder alleine das passende Rätsel – 24 Tage bis Heiligabend." },
  { q: "Wie läuft Bestellung und Lieferung ab?", a: "Die Bestellung erfolgt sicher über unseren Zahlungsanbieter Stripe. Nach dem Kauf erhältst du alle Infos zur Lieferung per E-Mail." },
  { q: "Kann ich das Buch verschenken?", a: "Ja! Das Buch ist ein wunderbares Geschenk für Kinder, Enkel, Nichten und Neffen." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-night-800">
      <Deco name="question" className="-right-2 top-2 w-20 sm:right-10 sm:top-2 sm:w-40" />
      <div className="section relative max-w-3xl">
        <h2 className="section-title">Häufige Fragen</h2>
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl bg-snow text-night-900">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[17px] font-semibold"
                  >
                    {f.q}
                    <span className={`text-2xl text-hut transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-night-700">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
