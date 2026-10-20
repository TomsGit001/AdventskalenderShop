"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CtaButton from "./CtaButton";
import Reviews from "./Reviews";
import { Deco } from "./Deco";

const BENEFITS: {
  image: string;
  title: string;
  text: string;
  quote: string;
  author: string;
}[] = [
  {
    image: "/images/icon_benny6.png",
    title: "Fördert Denken & Logik",
    text: "24 knifflige Rätsel, die spielerisch die Konzentration schärfen – ganz ohne Bildschirm.",
    quote: "„[...]. Mein Sohn fragt jeden Tag, wann wir weiterlesen!“",
    author: "Julia, Mama von Leo",
  },
  {
    image: "/images/icon_benny7.png",
    title: "100% Sinnvoll, 0% Zucker",
    text: "Die wertvolle Alternative zum klassischen Schoko-Adventskalender – hält als Erinnerung für die Kindheit.",
    quote: "„[...]. Endlich mal kein billiger Süßkram im Dezember.“",
    author: "Sarah, Mama von Mia",
  },
  {
    image: "/images/icon_benny8.png",
    title: "Gemeinsame Abendrituale",
    text: "Jeden Abend ein magisches Türchen voller Geborgenheit und Vorfreude vor dem Einschlafen.",
    quote: "„... Ist unser liebstes Ritual in der Adventszeit geworden.“",
    author: "Markus, Papa von Ben",
  },
];

export default function Benefits() {
  const listRef = useRef<HTMLUListElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    () => BENEFITS.map(() => false)
  );

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll<HTMLLIElement>("[data-benefit-card]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisibleCards((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      {
        // Nur der mittlere Bereich des Viewports zählt als "Fokus".
        // Karte erscheint erst, wenn sie sich der Bildschirmmitte nähert.
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-px overflow-hidden bg-[#79c4d0] text-night-900">
      <Deco name="trees" className="bottom-0 right-0 w-28 sm:w-72" />
      <Deco name="birds" className="left-0 top-24 sm:top-20 w-16 sm:w-32" />
      <div className="section relative">
        <h2 className="section-title text-night-800">Warum Mütter dieses Buch lieben 💙</h2>

        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-night-800 shadow-sm ring-1 ring-night-900/10">
            ⭐ 98% der Mütter empfehlen das Buch weiter
          </span>
        </div>

        <ul ref={listRef} className="mt-8 grid gap-4 sm:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <li
              key={b.title}
              data-benefit-card
              data-index={i}
              className={`flex flex-col items-center rounded-3xl bg-white p-5 text-center ring-1 ring-night-900/5 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-night-900/30 ${
                visibleCards[i]
                  ? "translate-y-0 scale-100 opacity-100 shadow-2xl shadow-night-900/40 ring-night-900/10"
                  : "translate-y-8 scale-95 opacity-0 shadow-md"
              }`}
            >
              <Image
                src={b.image}
                alt=""
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-night-800">{b.title}</h3>
                <p className="mt-1 text-[15px] leading-snug text-night-700">{b.text}</p>
              </div>
              <blockquote className="mt-4 border-t border-night-900/10 pt-3 text-sm italic text-night-700">
                {b.quote}
                <footer className="mt-1 not-italic text-xs text-night-600">— {b.author}</footer>
              </blockquote>
            </li>
          ))}
        </ul>

        <Reviews />

        <div className="mx-auto mt-10 max-w-sm">
          <CtaButton />
        </div>
      </div>

      {/* Wellenartiger Übergang zur nächsten Section (Farbe = Hintergrund der Folgesection) */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-16 w-full sm:h-24"
        aria-hidden
      >
        <path
          d="M0,70 C240,20 420,110 720,70 C1020,30 1200,100 1440,50 L1440,120 L0,120 Z"
          fill="#0B3047"
        />
      </svg>
    </section>
  );
}
