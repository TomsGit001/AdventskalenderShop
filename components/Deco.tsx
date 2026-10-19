import Image from "next/image";

export type DecoName =
  | "walk" | "sleep" | "honey" | "balloons3" | "dance" | "question"
  | "balloonBear" | "reindeer"
  | "birds" | "trees" | "raven" | "house";

// Dateien liegen in /public/images (Seitenverhältnis ca. 4:5)
const FILES: Record<DecoName, string> = {
  walk: "icon_benny1.png",
  sleep: "icon_benny2.png",
  honey: "icon_benny3.png",
  balloons3: "icon_benny4.png",
  dance: "icon_benny5.png",
  question: "icons_benny_frage.png",
  balloonBear: "icon2.png",
  reindeer: "icon3.png",
  birds: "icon4.png",
  trees: "icon4.png",
  raven: "icon5.png",
  house: "icon5.png",
};

const IMG_W = 940;
const IMG_H = 1175;

// Zuschnitt als Anteil am Originalbild: x, y, Breite, Höhe (0–1).
// icon4.png = Vögel (oben) + Tannen (unten), icon5.png = Rabe (oben) + Haus (unten).
const CROPS: Partial<Record<DecoName, { x: number; y: number; w: number; h: number }>> = {
  birds: { x: 0.0, y: 0.22, w: 0.47, h: 0.35 },
  trees: { x: 0.18, y: 0.64, w: 0.79, h: 0.34 },
  raven: { x: 0.13, y: 0.18, w: 0.38, h: 0.25 },
  house: { x: 0.07, y: 0.49, w: 0.8, h: 0.49 },
};

function Cropped({ name, className }: { name: DecoName; className: string }) {
  const c = CROPS[name]!;
  return (
    <div
      aria-hidden
      className={className}
      style={{
        aspectRatio: `${c.w * IMG_W} / ${c.h * IMG_H}`,
        backgroundImage: `url(/images/${FILES[name]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${100 / c.w}% ${100 / c.h}%`,
        backgroundPosition: `${(c.x / (1 - c.w)) * 100}% ${(c.y / (1 - c.h)) * 100}%`,
      }}
    />
  );
}

/** Dekoratives Bild (absolut positioniert, nicht klickbar). Position/Größe via className. */
export function Deco({ name, className = "" }: { name: DecoName; className?: string }) {
  if (CROPS[name]) {
    return <Cropped name={name} className={`pointer-events-none absolute select-none ${className}`} />;
  }
  return (
    <Image
      src={`/images/${FILES[name]}`}
      alt=""
      aria-hidden
      width={940}
      height={1175}
      sizes="200px"
      className={`pointer-events-none absolute h-auto select-none ${className}`}
    />
  );
}

/** Inline-Icon (z. B. in Karten). */
export function DecoIcon({ name, className = "" }: { name: DecoName; className?: string }) {
  if (CROPS[name]) {
    return <Cropped name={name} className={`select-none ${className}`} />;
  }
  return (
    <Image
      src={`/images/${FILES[name]}`}
      alt=""
      aria-hidden
      width={940}
      height={1175}
      sizes="120px"
      className={`select-none object-contain ${className}`}
    />
  );
}
