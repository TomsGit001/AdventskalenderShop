import CtaButton from "./CtaButton";
import { Deco, DecoIcon, type DecoName } from "./Deco";

const POINTS: { icon: DecoName; title: string; text: string }[] = [
  { icon: "dance", title: "Rätsel für kleine Detektive", text: "Labyrinthe, Suchbilder, Logikaufgaben und Wortspiele – jeden Tag eine neue Knobelei." },
  { icon: "balloonBear", title: "Abenteuer mit Benny", text: "Der kleine Bär schwebt am Luftballon durch den Winterwald und erlebt jeden Tag etwas Neues." },
  { icon: "walk", title: "Zeit zu zweit", text: "Kurze Geschichten zum rätseln – perfekt für den ruhigen Moment am Abend." },
];

export default function ProductDetails() {
  return (
    <section className="relative overflow-hidden bg-snow text-night-900">
      <Deco name="house" className="bottom-0 left-0 w-28 sm:w-64" />
      <Deco name="raven" className="right-2 top-2 w-16 sm:right-8 sm:top-4 sm:w-28" />
      <div className="section relative">
        <h2 className="section-title text-night-800">24 Türchen. 24 Abenteuer. 🎄</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-night-700">
          Jeden Tag im Advent öffnet ihr gemeinsam ein neues Kapitel: eine liebevolle Geschichte,
          ein kniffliges Rätsel und ein Moment, der bleibt. So wird die Wartezeit auf
          Weihnachten zu einer Zeit, an die dein Kind sich noch lange erinnert.
        </p>

        <ul className="mt-8 space-y-4">
          {POINTS.map((p) => (
            <li key={p.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-md ring-1 ring-night-900/5">
              <DecoIcon name={p.icon} className="h-24 w-20 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-night-800">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-night-700">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-sm">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
