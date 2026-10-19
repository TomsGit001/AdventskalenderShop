import Image from "next/image";
import CtaButton from "./CtaButton";
import Snowfall from "./Snowfall";
import { Deco } from "./Deco";
import { PRODUCT_PRICE_CENTS, SHIPPING_CENTS, TAX_NOTE, formatEuro } from "@/lib/config";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-night-950 via-night-800 to-night-600">
      <Snowfall />

      {/* Deko */}
      {/* Rentiere: klein oben rechts, über dem Titel (Handy) bzw. rechts oben (Desktop) */}
      <Deco name="reindeer" className="-right-3 -top-4 w-24 opacity-95 sm:-right-2 sm:top-0 sm:w-48 lg:right-[3%] lg:w-60" />
      {/* Bär mit Ballons: nur Desktop seitlich, am Handy sitzt er neben dem Buch */}
      <Deco name="balloonBear" className="left-[3%] top-[42%] hidden w-40 animate-float lg:block xl:w-56" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-0 pt-6 text-center sm:pt-10">
        {/* Logo / Titel: Bild hat viel Rand, daher breiter als der Bildschirm skaliert */}
        <h1 className="w-[145vw] max-w-none sm:w-[950px] lg:w-[1300px]">
          <Image
            src="/images/benny_titel.png"
            alt="Bennys Winterrätsel"
            width={2000}
            height={460}
            priority
            sizes="(max-width: 640px) 145vw, (max-width: 1024px) 950px, 1300px"
            className="h-auto w-full drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
          />
        </h1>
        <p className="-mt-3 font-display text-base font-medium uppercase tracking-wide text-gold sm:-mt-8 sm:text-xl lg:text-2xl">
          Das Adventskalenderbuch – 24 Geschichten und Rätsel
        </p>

        <h2 className="mt-8 text-2xl font-semibold leading-snug text-snow sm:text-4xl">
          Die sinnvollste Adventszeit für dein Kind ✨
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-snow-200 sm:text-lg">
          24 Türchen voller Magie, Rätselspaß und gemeinsamer Momente – statt Zucker
          gibt es Staunen, Lachen und leuchtende Kinderaugen.
        </p>

        {/* 3D-Mockup Platzhalter */}
        <div className="relative mt-6 w-64 sm:w-80">
          {/* Handy/Tablet: Ballonbär eigenständig animiert, unabhängig vom Buch, weiter oben */}
          <Deco name="balloonBear" className="-left-14 bottom-[45%] w-20 animate-float sm:-left-24 sm:w-28 lg:hidden" />
          {/* Buch: eigene, etwas flachere Schwebe-Animation */}
          <div className="relative animate-float-soft">
            {/* "Made in Germany" Sticker rechts unten am Buch */}
            <Image
              src="/images/made-in-germany-icon.png"
              alt="Made in Germany"
              width={1920}
              height={1920}
              className="absolute -bottom-3 -right-5 z-10 h-[84px] w-[84px] rotate-[12deg] drop-shadow-[0_6px_14px_rgba(0,0,0,0.4)] sm:-bottom-4 sm:-right-8 sm:h-28 sm:w-28"
            />
            <Image
              src="/images/buch_bild1.png"
              alt="Bennys Winterrätsel – Das Adventskalenderbuch"
              width={940}
              height={1190}
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="h-auto w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        <div className="relative z-10 mt-8 w-full max-w-sm">
          <CtaButton />
          <p className="mt-3 text-sm text-snow-200">
            {formatEuro(PRODUCT_PRICE_CENTS)} · {TAX_NOTE}{" "}
            {SHIPPING_CENTS === 0 ? "" : `· zzgl. ${formatEuro(SHIPPING_CENTS)} Versand`}
          </p>
          <p className="mt-1 text-sm text-snow-200">📦 Sicher bezahlen · Schnelle Lieferung · Versandkostenfrei</p>
        </div>
      </div>

      {/* Schneelandschaft */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative -mt-6 block h-16 w-full sm:h-24"
        aria-hidden
      >
        <path
          d="M0,70 C240,20 420,110 720,70 C1020,30 1200,100 1440,50 L1440,120 L0,120 Z"
          fill="#F6FAFD"
        />
      </svg>
    </header>
  );
}
