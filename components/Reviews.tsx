"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Review = { quote: string; name: string; rating: number };

const STORAGE_KEY = "bennys-winterraetsel-reviews";
const MAX_NAME = 60;
const MAX_TEXT = 600;

const INITIAL_REVIEWS: Review[] = [
  {
    quote:
      "Das Buch ist super ! endlich ein Adventskalender, der nicht nur die Augen, sondern auch den Geist beschäftigt :) Mein Sohn fragt immer, wann wir das nächste Türchen lesen können.",
    name: "Viktoria, Mama von Lucia (6)",
    rating: 5,
  },
  {
    quote:
      " Ich kenne das Buch noch vom letzten Jahr. Endlich ein Adventskalender, bei dem ich mich nicht über Zucker nachdenken muss. Die Rätsel sind genau richtig eingestuft. Es fördert defnitiv das logische Denken.",
    name: "Sandra, Mama von Mia (7)",
    rating: 5,
  },
  {
    quote:
      "Das schönste Geschenk in unserer Adventszeit. Ich habe direkt 3 Stück bestellt, damit jeder seinen eigenen Adventskalender hat. Ein echtes Familienerlebnis.",
    name: "Katharina, Mama von drei Kindern",
    rating: 5,
  },
  {
    quote:
      "Ich war erst skeptisch, ob ein Rätsel Adventskalender bei meiner Tochter ankommt – aber sie ist absolut begeistert! Jeden Morgen ist der erste Weg direkt zum Buch. Perfekte Mischung aus Spannung und Weihnachtsstimmung.",
    name: "Sarah, Mama von Mia (7)",
    rating: 5,
  },
  {
    quote:
      "Als Papa freue ich mich riesig über die gemeinsame Zeit beim Rätseln. Keine Schokolade, dafür echte Vorfreude und tolle Gespräche jeden Abend vor dem Einschlafen. Eine klare Empfehlung für die Adventszeit!",
    name: "Raoul, Papa von Marco (8)",
    rating: 5,
  },
  {
    quote:
      "Ich habe das Buch meinem Neffen geschenkt und meine Schwester sagt es ist es das absolute Highlight im Dezember. Die Rätsel sind genau richtig knifflig und superschön gestalte t. Nächstes Jahr definitiv wieder!",
    name: "Sabine, Tante von Jonas (6)",
    rating: 5,
  },
  {
    quote: "Ein Stern abzug aufgrund des Versands, das Buch brauchte 3 Tage bis es ankam. Zum Glück aber noch vor dem 1. Dezember. Inhaltlich aber top, meine Tochter liebt es! Auch schöne Illustrationen.",
    name: "Silke, Mama von Mia (7)",
    rating: 4,
  },
  {
    quote:
      "Endlich mal kein billiges Plastikspielzeug, das nach zwei Tagen in der Ecke liegt. Meine zwei Mädels knobeln jeden Tag zusammen und können es kaum erwarten, wie die Geschichte weitergeht. Einfach wundervoll gemacht!",
    name: "Maren, Mama von Emma (5) & Maria (8)",
    rating: 5,
  },
  {
    quote:
      "Richtig tolles Konzept! Sogar mein sonst eher lesefauler Sohn bringt mir freiwillig das Buch und möchte wissen, wie das Rätsel gelöst wird. Das hat unsere Adventsroutine komplett bereichert.",
    name: "Stefanie, Mama von Tim (9)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch letztes Jahr von der Tante geschenkt bekommen und mussten es dieses Jahr direkt wieder bestellen. Es ist mittlerweile unsere liebste Familientradition im Dezember geworden!",
    name: "Laura, Mama von Noah (7)",
    rating: 5,
  },
  {
    quote:
      "Die Illustrationen sind so liebevoll gemacht, dass meine Tochter abends oft noch eine Seite länger im Bett bleiben darf, um sie sich anzusehen. Und das Rätsel am nächsten Morgen ist dann das Highlight.",
    name: "Julia, Mama von Leni (6)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch für unsere Enkelin gekauft und sind begeistert. Es ist schön, dass es mal etwas ohne Zucker ist, das die Kinder trotzdem jeden Tag freudig öffnen. Die Rätsel sind altersgerecht und machen auch uns Großeltern Spaß.",
    name: "Renate, Oma von Sophie (7)",
    rating: 5,
  },
  {
    quote:
      "Mein Sohn ist ein kleiner Zappelphilipp und tut sich mit stillsitzen schwer. Aber beim Rätseln ist er plötzlich ganz bei der Sache. Das Buch hat uns wirklich überrascht – absolute Empfehlung!",
    name: "Daniel, Papa von Luis (6)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch für unsere Zwillinge gekauft und es funktioniert wunderbar. Jeder darf abwechselnd das Türchen öffnen, und beim Rätsel helfen sie sich gegenseitig. Das schweißt die beiden richtig zusammen.",
    name: "Nadine, Mama von Paul & Pia (7)",
    rating: 5,
  },
  {
    quote:
      "Ich war auf der Suche nach einem Adventskalender, der nicht nach zwei Tagen vergessen ist. Dieses Buch ist es geworden – und was soll ich sagen, meine Tochter redet jetzt schon vom nächsten Jahr!",
    name: "Anja, Mama von Clara (8)",
    rating: 5,
  },
  {
    quote:
      "Die Geschichten sind warmherzig und die Rätsel fordern genau richtig. Meine Tochter hat sogar angefangen, selbst kleine Rätsel für uns zu erfinden. Das Buch hat bei uns etwas in Gang gesetzt.",
    name: "Petra, Mama von Hannah (9)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch als Geschenk für die Nichte gekauft und es kam super an. Die Verarbeitung ist hochwertig, die Seiten sind schön dick und die Farben leuchten richtig. Man merkt, dass hier Liebe im Detail steckt.",
    name: "Michael, Onkel von Lea (6)",
    rating: 5,
  },
  {
    quote:
      "Meine Tochter hat das Buch von ihrer Patentante bekommen und wir sind beide hin und weg. Es ist so schön, dass es mal etwas ist, das man gemeinsam macht, statt dass das Kind alleine vor dem Kalender sitzt.",
    name: "Christina, Mama von Amelie (7)",
    rating: 5,
  },
  {
    quote:
      "Ich habe das Buch für meine Klasse gekauft und lese jeden Morgen ein Türchen vor. Die Kinder sind jedes Mal mucksmäuschenstill und fiebern mit. Ein wunderbarer Start in den Schultag im Advent!",
    name: "Frau Berger, Grundschullehrerin",
    rating: 5,
  },
  {
    quote:
      "Mein Sohn hat das Buch von seiner Oma bekommen und wir sind alle begeistert. Die Rätsel sind nicht zu leicht, aber auch nicht zu schwer – genau die richtige Mischung. Er ist jedes Mal stolz, wenn er es alleine löst.",
    name: "Katrin, Mama von Felix (8)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch letztes Jahr verschenkt und dieses Jahr gleich zwei bestellt. Es ist einfach ein schönes Geschenk, das nicht in der Ecke landet, sondern jeden Tag Freude bringt. Klare Kaufempfehlung!",
    name: "Stefan, Papa von Marie (6)",
    rating: 5,
  },
  {
    quote:
      "Meine Tochter ist ein großer Fan von Rätseln und dieses Buch hat sie voll getroffen. Sie hat sogar angefangen, die Geschichten ihren Puppen vorzulesen. Das ist für uns das schönste Kompliment.",
    name: "Birgit, Mama von Johanna (7)",
    rating: 5,
  },
  {
    quote:
      "Ich war erst unsicher, ob das Buch nicht zu anspruchsvoll für meine Kleine ist. Aber die Rätsel sind so liebevoll erklärt, dass sie fast alle alleine lösen kann. Und wenn nicht, machen wir es eben zusammen – auch schön!",
    name: "Melanie, Mama von Ida (5)",
    rating: 5,
  },
  {
    quote:
      "Das Buch ist bei uns der Renner. Mein Sohn hat es sogar mit in die Schule genommen, um es seinem Freund zu zeigen. Die beiden knobeln jetzt jeden Tag zusammen. So etwas habe ich bei einem Adventskalender noch nie erlebt.",
    name: "Andreas, Papa von Ben (8)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch für unsere Tochter gekauft, weil sie keine Schokolade mehr wollte. Sie hat sich das ausdrücklich gewünscht, und wir sind froh, dass wir so ein schönes Alternativprodukt gefunden haben. Sie liebt es!",
    name: "Sandra, Mama von Nele (9)",
    rating: 5,
  },
  {
    quote:
      "Die Geschichten sind so schön geschrieben, dass ich beim Vorlesen selbst Gänsehaut bekomme. Und die Rätsel sind der perfekte Abschluss für jeden Tag. Wir freuen uns schon auf den nächsten Advent mit Benny!",
    name: "Tobias, Papa von Emil (6)",
    rating: 5,
  },
  {
    quote:
      "Meine Tochter hat das Buch von ihrer Freundin empfohlen bekommen und wir haben es direkt bestellt. Es hat unsere Erwartungen übertroffen. Die Qualität ist super und der Inhalt ist wirklich durchdacht.",
    name: "Verena, Mama von Mia (7)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch für unsere beiden Jungs gekauft und es ist jeden Morgen ein kleines Fest. Sie streiten sich sogar darum, wer das Türchen öffnen darf. Das ist ein Luxusproblem, das wir gerne haben!",
    name: "Frank, Papa von Leon & Finn (7 & 9)",
    rating: 5,
  },
  {
    quote:
      "Ich habe das Buch für meine Enkelin gekauft und war skeptisch, ob sie sich für ein Buch begeistern kann. Aber sie liebt es! Sie ruft mich sogar an, um mir das Rätsel des Tages zu erzählen. Das ist so schön.",
    name: "Helga, Oma von Emma (7)",
    rating: 5,
  },
  {
    quote:
      "Das Buch ist ein echter Schatz. Die Geschichten sind liebevoll und die Rätsel machen richtig Spaß. Meine Tochter hat es sogar mit in den Urlaub genommen, weil sie nicht darauf verzichten wollte. Klare Empfehlung!",
    name: "Nicole, Mama von Sarah (8)",
    rating: 5,
  },
  {
    quote:
      "Wir haben das Buch als Geschenk für unsere Patenkinder gekauft und es kam super an. Die Eltern haben sich auch gefreut, weil es mal etwas anderes ist als Schokolade. Wir werden es nächstes Jahr wieder bestellen.",
    name: "Ute, Patentante von Max (6)",
    rating: 5,
  },
  {
    quote:
      "Mein Sohn hat das Buch von seiner Tante bekommen und wir sind alle begeistert. Es ist so schön, dass es mal etwas ist, das die ganze Familie zusammenbringt. Die Rätsel sind der Hit!",
    name: "Claudia, Mama von Jonas (7)",
    rating: 5,
  },
];

const field =
  "w-full rounded-2xl border border-night-700/30 bg-cornsilk px-4 py-3 text-base text-night-900 placeholder:text-night-700/50 focus:border-hut focus:outline-none focus:ring-2 focus:ring-hut/30";

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const textRef = useRef<HTMLQuoteElement>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;
    // Prüfen, ob der Text bei geklappter Ansicht abgeschnitten wird
    const check = () => {
      if (expanded) return;
      setClamped(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [expanded, review.quote]);

  return (
    <figure className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl bg-balloon-rose/50 p-5 shadow-sm sm:w-[calc(50%-0.5rem)]">
      <Stars rating={review.rating} />
      <blockquote
        ref={textRef}
        className={`mt-3 whitespace-pre-line break-words text-[16px] leading-relaxed text-night-900 ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        „{review.quote}“
      </blockquote>
      {(clamped || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 self-start text-sm font-semibold text-hut underline-offset-2 hover:underline"
        >
          {expanded ? "Weniger anzeigen" : "Mehr lesen"}
        </button>
      )}
      <figcaption className="mt-auto pt-4 text-sm font-semibold text-night-700">
        — {review.name}
      </figcaption>
    </figure>
  );
}

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
  const [visible, setVisible] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
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

      <div
        ref={boxRef}
        className={`mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl bg-cornsilk shadow-md ring-1 ring-night-900/5 transition-all duration-700 ease-out ${
          visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
        }`}
      >
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
                    <ReviewCard key={`${r.name}-${i}`} review={r} />
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


