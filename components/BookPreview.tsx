"use client";

import { useEffect, useRef, useState } from "react";
import { Deco } from "./Deco";

const PREVIEWS = [
  { src: "/images/beispielkapitel2.png", alt: "Beispielkapitel 2 aus Bennys Winterrätsel" },
  { src: "/images/beispielkapitel3.png", alt: "Beispielkapitel 3 aus Bennys Winterrätsel" },
  { src: "/images/beispielkapitel.png", alt: "Beispielkapitel aus Bennys Winterrätsel: Geschichte links, Rätsel rechts" },
];

export default function BookPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [flip, setFlip] = useState<"next" | "prev" | null>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  const totalPages = PREVIEWS.length * 2;
  const currentPage = previewIndex * 2 + active;
  const isFirst = currentPage === 0;
  const isLast = currentPage === totalPages - 1;
  const current = PREVIEWS[previewIndex];

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Alle Preview-Bilder vorab laden, damit beim Wechsel kein Flackern entsteht
  useEffect(() => {
    PREVIEWS.forEach((p) => {
      const img = new window.Image();
      img.onload = () => setLoaded((prev) => ({ ...prev, [p.src]: true }));
      img.src = p.src;
    });
  }, []);

  // Flag, um programmatische Scrolls von Nutzer-Scrolls zu unterscheiden
  const programmatic = useRef(false);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    programmatic.current = true;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    window.setTimeout(() => {
      programmatic.current = false;
    }, 500);
  };

  const onScroll = () => {
    if (programmatic.current) return;
    const el = ref.current;
    if (!el) return;
    const side = el.scrollLeft > el.clientWidth / 2 ? 1 : 0;
    setActive((prevActive) => (prevActive === side ? prevActive : side));
  };

  const next = () => {
    // Auf Mobile zuerst auf Seite 2 scrollen; auf Desktop ist das ganze Kapitel sichtbar
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 639px)").matches;
    if (isMobile && active === 0) {
      goTo(1);
      return;
    }
    if (previewIndex < PREVIEWS.length - 1) {
      setFlip("next");
      window.setTimeout(() => {
        programmatic.current = true;
        setPreviewIndex(previewIndex + 1);
        setActive(0);
        const el = ref.current;
        if (el) el.scrollTo({ left: 0, behavior: "auto" });
        setFlip(null);
        window.setTimeout(() => {
          programmatic.current = false;
        }, 300);
      }, 380);
    }
  };

  const prev = () => {
    if (previewIndex > 0) {
      setFlip("prev");
      window.setTimeout(() => {
        programmatic.current = true;
        setPreviewIndex(previewIndex - 1);
        setActive(1);
        const el = ref.current;
        if (el) {
          // Erst nach dem Re-Render (neues Bild) auf die rechte Seite scrollen
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              el.scrollTo({ left: el.clientWidth, behavior: "auto" });
            });
          });
        }
        setFlip(null);
        window.setTimeout(() => {
          programmatic.current = false;
        }, 500);
      }, 380);
    }
  };

  const goToPage = (page: number) => {
    const idx = Math.floor(page / 2);
    const side = page % 2;
    programmatic.current = true;
    setPreviewIndex(idx);
    setActive(side);
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTo({ left: side * el.clientWidth, behavior: "smooth" });
      });
    }
    window.setTimeout(() => {
      programmatic.current = false;
    }, 500);
  };

  // Swipe-Gesten (Touch + Maus): links = weiter, rechts = zurück
  const dragStart = useRef<{ x: number; y: number; scrollLeft: number } | null>(null);
  const dragged = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    // Nur primäre Taste / Touch
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const el = ref.current;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: el ? el.scrollLeft : 0,
    };
    dragged.current = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const start = dragStart.current;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      dragged.current = true;
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const start = dragStart.current;
    dragStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    // Nur horizontale Wischbewegungen ab 50px auslösen
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

    const el = ref.current;
    const atLeftEdge = !el || el.scrollLeft <= 1;
    const atRightEdge = !el || el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;

    if (dx < 0) {
      // Wisch nach links → weiter
      // Wenn der Container noch nicht am rechten Rand ist, übernimmt das native Snap-Scrolling
      if (atRightEdge) next();
    } else {
      // Wisch nach rechts → zurück
      if (atLeftEdge) prev();
    }
  };

  return (
    <section className="relative overflow-hidden bg-night-900">
      <Deco name="walk" className="bottom-1 left-2 w-16 sm:bottom-auto sm:left-6 sm:top-0 sm:w-40" />
      <div className="section relative sm:py-10 lg:max-w-6xl xl:max-w-7xl">
        <h2 className="section-title sm:text-3xl">Wirf einen Blick ins Buch 👀</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-snow-200 sm:mt-2">
          Ein echtes Beispielkapitel: Erst die Geschichte, dann das passende Rätsel.{" "}
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
            <div
              ref={imgWrapRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={() => {
                dragStart.current = null;
              }}
              className={`relative w-[200%] transition-all duration-700 ease-out sm:w-auto ${
                visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
              } ${flip === "next" ? "flip-next" : ""} ${flip === "prev" ? "flip-prev" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.src}
                alt={current.alt}
                className={`block h-auto w-full select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition-opacity duration-200 sm:max-h-[55vh] sm:w-auto sm:max-w-full lg:max-h-[65vh] xl:max-h-[72vh] 2xl:max-h-[78vh] ${
                  loaded[current.src] ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
              {/* unsichtbare Snap-Punkte für linke und rechte Hälfte */}
              <div aria-hidden className="absolute inset-y-0 left-0 w-1/2 snap-start sm:hidden" />
              <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 snap-start sm:hidden" />
            </div>
          </div>

          {/* Wisch-Hinweis (nur auf Seite 1 des aktuellen Previews) */}
          <div
            aria-hidden
            className={`pointer-events-none absolute bottom-3 right-3 rounded-full bg-night-950/80 px-3 py-1.5 text-xs font-semibold text-white transition-opacity sm:hidden ${
              currentPage % 2 === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            Wische für die Nächste Seite 👉
          </div>

          {/* Zurück-Button (unten links): Mobile nur auf Seite 1 eines Kapitels, Desktop immer wenn es ein vorheriges Kapitel gibt */}
          {previewIndex > 0 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Vorheriges Beispielkapitel"
              className={`absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-night-950/85 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-night-950 active:scale-95 ${
                currentPage % 2 === 0 ? "" : "hidden sm:inline-flex"
              }`}
            >
              ‹ Zurück
            </button>
          )}

          {/* Nächstes-Button (unten rechts): Mobile nur auf Seite 2, Desktop immer wenn es ein weiteres Kapitel gibt */}
          {previewIndex < PREVIEWS.length - 1 && (
            <button
              type="button"
              onClick={next}
              aria-label="Nächstes Beispielkapitel"
              className={`absolute bottom-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-hut px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-hut-600 active:scale-95 ${
                currentPage % 2 === 1 ? "" : "hidden sm:inline-flex"
              }`}
            >
              Nächstes ›
            </button>
          )}
        </div>

        {/* Fortschritts-Punkte: Mobile pro Seite, Desktop pro Kapitel */}
        <div className="mt-3 flex justify-center gap-1">
          {/* Mobile: alle Seiten */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={`m-${i}`}
              type="button"
              aria-label={`Seite ${i + 1} von ${totalPages}`}
              aria-current={i === currentPage ? "page" : undefined}
              onClick={() => goToPage(i)}
              className="flex h-8 w-8 items-center justify-center sm:hidden"
            >
              <span
                className={`h-2.5 rounded-full transition-all ${
                  i === currentPage ? "w-6 bg-mint" : "w-2.5 bg-snow/40"
                }`}
              />
            </button>
          ))}
          {/* Desktop: ein Punkt pro Kapitel */}
          {PREVIEWS.map((_, i) => (
            <button
              key={`d-${i}`}
              type="button"
              aria-label={`Kapitel ${i + 1} von ${PREVIEWS.length}`}
              aria-current={i === previewIndex ? "page" : undefined}
              onClick={() => goToPage(i * 2)}
              className="hidden h-8 w-8 items-center justify-center sm:flex"
            >
              <span
                className={`h-2.5 rounded-full transition-all ${
                  i === previewIndex ? "w-6 bg-mint" : "w-2.5 bg-snow/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
