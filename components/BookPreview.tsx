"use client";

import { useRef, useState } from "react";
import { Deco } from "./Deco";

const PAGES = ["Linke Seite", "Rechte Seite"];

export default function BookPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setActive(el.scrollLeft > el.clientWidth / 2 ? 1 : 0);
  };

  return (
    <section className="relative overflow-hidden bg-night-900">
      <Deco name="walk" className="bottom-1 left-2 w-16 sm:bottom-auto sm:left-6 sm:top-0 sm:w-40" />
      <div className="section relative sm:py-10">
        <h2 className="section-title sm:text-3xl">Wirf einen Blick ins Buch 👀</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-snow-200 sm:mt-2">
          Ein echtes Beispielkapitel: erst die Geschichte, dann das passende Rätsel.{" "}
          <span className="sm:hidden">Wische nach links, um die zweite Seite zu sehen.</span>
        </p>

        <div className="relative mt-8 sm:mt-5">
          {/* Mobil: volle Bildschirmbreite (-mx-5 hebt das Section-Padding auf).
              Desktop: komplette Doppelseite, in der Höhe auf den Bildschirm begrenzt. */}
          <div
            ref={ref}
            onScroll={onScroll}
            className="-mx-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] sm:mx-auto sm:w-fit sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Mobil: Bild doppelt so breit wie der Container (jede Hälfte = eine Seite) */}
            <div className="relative w-[200%] sm:w-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/beispielkapitel.png"
                alt="Beispielkapitel aus Bennys Winterrätsel: Geschichte links, Rätsel rechts"
                className="block h-auto w-full select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] sm:max-h-[55vh] sm:w-auto sm:max-w-full"
                draggable={false}
              />
              {/* unsichtbare Snap-Punkte für linke und rechte Hälfte */}
              <div aria-hidden className="absolute inset-y-0 left-0 w-1/2 snap-start sm:hidden" />
              <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 snap-start sm:hidden" />
            </div>
          </div>

          {/* Wisch-Hinweis */}
          <div
            aria-hidden
            className={`pointer-events-none absolute bottom-3 right-3 rounded-full bg-night-950/80 px-3 py-1.5 text-xs font-semibold text-white transition-opacity sm:hidden ${
              active === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            Wische für Seite 2 👉
          </div>

          <button
            type="button"
            aria-label="Vorherige Seite"
            onClick={() => goTo(0)}
            className="hidden"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Nächste Seite"
            onClick={() => goTo(1)}
            className="hidden"
          >
            ›
          </button>
        </div>

        <div className="mt-3 flex justify-center gap-1 sm:hidden">
          {PAGES.map((p, i) => (
            <button
              key={p}
              type="button"
              aria-label={p}
              onClick={() => goTo(i)}
              className="flex h-8 w-8 items-center justify-center"
            >
              <span
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-mint" : "w-2.5 bg-snow/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
