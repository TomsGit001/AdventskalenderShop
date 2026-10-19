import CtaButton from "./CtaButton";
import Reviews from "./Reviews";
import { Deco, DecoIcon, type DecoName } from "./Deco";

const BENEFITS: { icon: DecoName; title: string; text: string }[] = [
  { icon: "balloons3", title: "Konzentration & Logik", text: "Rätsel, die spielerisch das Denken fördern." },
  { icon: "honey", title: "Statt Schokolade", text: "Die sinnvolle Alternative – ganz ohne Zucker." },
  { icon: "sleep", title: "24 Rätsel- und Geschichten-Momente", text: "Jeden Abend ein Türchen voller Geborgenheit." },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-snow text-night-900">
      <Deco name="trees" className="bottom-0 right-0 w-28 sm:w-72" />
      <Deco name="birds" className="left-0 top-2 hidden w-24 sm:block sm:w-44" />
      <div className="section relative">
        <h2 className="section-title text-night-800">Warum Mütter dieses Buch lieben 💙</h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md ring-1 ring-night-900/5 sm:flex-col sm:text-center"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-balloon-blue/40">
                <DecoIcon name={b.icon} className="h-[130%] w-auto max-w-none" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-night-800">{b.title}</h3>
                <p className="mt-1 text-[15px] leading-snug text-night-700">{b.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Reviews />

        <div className="mx-auto mt-10 max-w-sm">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
