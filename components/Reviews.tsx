"use client";

import { useEffect, useRef, useState } from "react";

type Review = { quote: string; name: string; rating: number };

const STORAGE_KEY = "bennys-winterraetsel-reviews";
const MAX_NAME = 60;
const MAX_TEXT = 600;

const INITIAL_REVIEWS: Review[] = [
  {
    quote:
      "Das Buch ist super! Endlich ein Adventskalender, der nicht nur die Augen, sondern auch den Geist beschäftigt :) Mein Sohn fragt immer, wann wir das nächste Türchen lesen können.",
    name: "Julia, Mama von Leo (6)",
    rating: 5,
  },
  {
    quote:
      "Endlich ein Adventskalender, bei dem ich mich nicht über Zucker nachdenken muss. Die Rätsel sind genau richtig eingestuft. Es fördert definitiv das logische Denken.",
    name: "Sandra, Mama von Mia (7)",
    rating: 5,
  },
  {
    quote:
      "Das schönste Geschenk in unserer Adventszeit. Auch die älteren Geschwister rätseln mit – ein echtes Familienerlebnis.",
    name: "Katharina, Mama von drei Kindern",
    rating: 5,
  },
];

const field =
  "w-full rounded-2xl border border-night-700/30 bg-white px-4 py-3 text-base text-night-900 placeholder:text-night-700/50 focus:border-hut focus:outline-none focus:ring-2 focus:ring-hut/30";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="text-gold-600" role="img" aria-label={`${rating} von 5 Sternen`}>
      {"★".repeat(rating)}
      <span className="text-night-700/25">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default function Reviews() {
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [ownReviews, setOwnReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [justSent, setJustSent] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Gespeicherte eigene Rezensionen laden
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setOwnReviews(parsed);
      }
    } catch {
      /* ignorieren */
    }
  }, []);

  const reviews = [...INITIAL_REVIEWS, ...ownReviews];
  const average = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const name = String(d.get("name") ?? "").trim().slice(0, MAX_NAME);
    const quote = String(d.get("quote") ?? "").trim().slice(0, MAX_TEXT);
    if (!name || !quote) return;

    const next = [...ownReviews, { name, quote, rating }];
    setOwnReviews(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignorieren */
    }

    form.reset();
    setRating(5);
    setFormOpen(false);
    setJustSent(true);

    // Neue Rezension ans Ende der Reihe scrollen
    setTimeout(() => {
      const el = listRef.current;
      if (el) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    }, 100);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = listRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mt-16">
      <h2 className="section-title text-night-800">Was andere Mütter sagen</h2>

      <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-night-900/5">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="reviews-panel"
          onClick={() => setOpen(!open)}
          className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-xl text-gold-600" aria-hidden>★★★★★</span>
            <span className="font-display text-lg font-semibold text-night-800">
              {average.toFixed(1).replace(".", ",")} von 5
            </span>
            <span className="text-sm text-night-700">
              ({reviews.length} {reviews.length === 1 ? "Rezension" : "Rezensionen"})
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-hut">
            {open ? "Zuklappen" : "Rezensionen lesen"}
            <span className={`text-2xl leading-none transition-transform ${open ? "rotate-45" : ""}`}>+</span>
          </span>
        </button>

        <div
          id="reviews-panel"
          className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-night-900/10 px-5 pb-5 pt-5">
              {/* Horizontale Reihe: sprengt die Seite nicht, egal wie viele Rezensionen */}
              <div className="relative">
                <div
                  ref={listRef}
                  className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:thin]"
                >
                  {reviews.map((r, i) => (
                    <figure
                      key={`${r.name}-${i}`}
                      className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl bg-balloon-rose/50 p-5 shadow-sm sm:w-[calc(50%-0.5rem)]"
                    >
                      <Stars rating={r.rating} />
                      <blockquote className="mt-3 max-h-40 overflow-y-auto whitespace-pre-line break-words text-[16px] leading-relaxed text-night-900">
                        „{r.quote}“
                      </blockquote>
                      <figcaption className="mt-auto pt-4 text-sm font-semibold text-night-700">
                        — {r.name}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                {reviews.length > 2 && (
                  <div className="mt-1 hidden justify-center gap-3 sm:flex">
                    <button
                      type="button"
                      aria-label="Vorherige Rezensionen"
                      onClick={() => scrollBy(-1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-night-900/10 text-xl text-night-900 hover:bg-night-900/20"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Nächste Rezensionen"
                      onClick={() => scrollBy(1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-night-900/10 text-xl text-night-900 hover:bg-night-900/20"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>

              {justSent && (
                <p className="mt-3 text-center text-sm font-semibold text-mint-600" role="status">
                  Danke für deine Rezension! 💙 Sie wurde der Reihe hinzugefügt.
                </p>
              )}

              {/* Eigene Rezension schreiben (ebenfalls aufklappbar) */}
              <div className="mt-4 text-center">
                <button
                  type="button"
                  aria-expanded={formOpen}
                  onClick={() => setFormOpen(!formOpen)}
                  className="rounded-full border-2 border-hut px-6 py-3 font-display font-semibold text-hut transition hover:bg-hut hover:text-white"
                >
                  {formOpen ? "Abbrechen" : "✍️ Eigene Rezension schreiben"}
                </button>
              </div>

              <div className={`grid transition-all duration-300 ${formOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <form onSubmit={onSubmit} className="mx-auto mt-5 max-w-xl space-y-4 text-left">
                    <fieldset>
                      <legend className="mb-1 text-sm font-semibold text-night-800">Deine Bewertung</legend>
                      <div className="flex gap-1" role="radiogroup" aria-label="Sterne">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            type="button"
                            role="radio"
                            aria-checked={rating === n}
                            aria-label={`${n} ${n === 1 ? "Stern" : "Sterne"}`}
                            onClick={() => setRating(n)}
                            className={`flex h-11 w-11 items-center justify-center text-3xl transition ${
                              n <= rating ? "text-gold-600" : "text-night-700/25"
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor="review-name" className="mb-1 block text-sm font-semibold text-night-800">
                        Name
                      </label>
                      <input
                        id="review-name"
                        name="name"
                        required
                        maxLength={MAX_NAME}
                        className={field}
                        placeholder="z. B. Anna, Mama von Tim (6)"
                      />
                    </div>
                    <div>
                      <label htmlFor="review-text" className="mb-1 block text-sm font-semibold text-night-800">
                        Deine Rezension
                      </label>
                      <textarea
                        id="review-text"
                        name="quote"
                        required
                        rows={4}
                        maxLength={MAX_TEXT}
                        className={field}
                        placeholder="Wie hat euch das Buch gefallen?"
                      />
                    </div>
                    <button type="submit" className="btn-cta">
                      Rezension abschicken
                    </button>
                  </form>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-night-700/60">
                Die ersten drei Stimmen sind Platzhalter – bitte durch echte Kundenbewertungen ersetzen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


