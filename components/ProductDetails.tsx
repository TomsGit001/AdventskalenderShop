import Image from "next/image";
import CtaButton from "./CtaButton";
import { Deco } from "./Deco";

const BENEFITS: { emoji: string; title: string; text: string }[] = [
  {
    emoji: "🧠",
    title: "Spielerische Logik",
    text: "Tägliche Rätsel, die stolz machen & das Selbstbewusstsein stärken.",
  },
  {
    emoji: "🕯️",
    title: "Echte Qualitätszeit",
    text: "5–10 Minuten magisches Vorleseritual vor dem Einschlafen.",
  },
  {
    emoji: "🌿",
    title: "Gesund durch den Dezember",
    text: "100 % bildschirmfrei & ohne Süßigkeiten – bei maximalem Rätselspaß!",
  },
];

export default function ProductDetails() {
  return (
    <section className="relative overflow-hidden bg-[#67bed9] text-night-900">
      <Deco name="house" className="bottom-0 left-0 w-28 sm:w-64" />
      <Deco name="raven" className="right-2 top-2 w-16 sm:right-8 sm:top-4 sm:w-28" />
      <div className="section relative">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Autorenfoto */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-night-100 shadow-xl ring-1 ring-night-900/5">
              <Image
                src="/images/profilbild.jpg"
                alt="Tom, Autor von Bennys Winterrätsel"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority={false}
              />
            </div>
            {/* Dekorativer Akzent hinter dem Bild */}
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-mint/20 blur-2xl"
            />
          </div>

          {/* Text */}
          <div>
            <span className="inline-flex items-center rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-night-800 ring-1 ring-mint/40">
              Über den Autor
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-night-800 sm:text-4xl">
              Hi, ich bin Tom! 👋
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-relaxed text-night-700">
              <p>
                Erinnerst du dich noch an das Vorfreude-Kribbeln im Dezember? Ich mich auf jeden
                Fall! Und genau dieses Gefühl möchte ich zurückbringen – ganz ohne Zucker und
                Plastikmüll.
              </p>
              <p>
                Schon als Kind habe ich Rätsel geliebt. Während meines
                Wirtschaftsinformatik-Studiums wurde mir noch einmal besonders klar, wie
                entscheidend logisches Denken für die Zukunft unserer Kinder ist und wie sehr uns
                diese analytischen Fähigkeiten später im Leben weiterhelfen. Aus genau dieser
                Leidenschaft heraus entstand{" "}
                <strong className="font-semibold text-night-800">Bennys Winterrätsel</strong>.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-semibold text-night-800">
              Warum Eltern &amp; Kinder es lieben:
            </h3>
            <ul className="mt-4 space-y-3">
              {BENEFITS.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-3 rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-night-900/5"
                >
                  <span aria-hidden className="text-2xl leading-none">
                    {b.emoji}
                  </span>
                  <p className="leading-relaxed text-night-700">
                    <strong className="font-semibold text-night-800">{b.title}:</strong>{" "}
                    {b.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg leading-relaxed text-night-700">
              Die Kinderzeit verfliegt so schnell und manche Dezember-Momente sind einmalig. Lass
              uns dieses Jahr gemeinsame Erinnerungen schaffen, die bleiben!
            </p>

            <div className="mt-8 max-w-sm">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
