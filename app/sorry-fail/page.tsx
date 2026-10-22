"use client";

import { useState } from "react";
import Link from "next/link";
import Snowfall from "@/components/Snowfall";

const SUPPORT_EMAIL = "bennyswinterratsel@gmail.com";

export default function SorryFail() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Fallback: Nutzer kann die Adresse manuell markieren */
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Snowfall />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
        <div aria-hidden className="text-6xl">🎄</div>
        <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
          Da ist leider etwas schiefgelaufen
        </h1>

        <p className="mt-4 text-lg text-snow-200">
          Deine Bestellung konnte gerade nicht abgeschlossen werden. Das tut uns leid!
          Sollte bereits Geld von deinem Konto abgebucht worden sein, mach dir keine Sorgen –
          wir kümmern uns darum.
        </p>

        <section
          aria-label="So erreichen wir dich"
          className="mt-8 w-full rounded-2xl border border-white/15 bg-white/5 p-5 text-left text-sm backdrop-blur-sm sm:p-6"
        >
          <h2 className="font-display text-xl font-semibold">So helfen wir dir weiter</h2>
          <p className="mt-2 text-snow-200">
            Bitte schreib uns eine E-Mail an{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Problem%20mit%20meiner%20Bestellung`}
              className="font-semibold text-white underline underline-offset-2"
            >
              {SUPPORT_EMAIL}
            </a>
            . Schildere uns kurz, was passiert ist, und gib dabei bitte den{" "}
            <strong className="text-white">Namen an, auf den die Bestellung lief</strong>.
            Damit können wir deine Bestellung schnell finden und das Problem lösen.
          </p>

          <button
            type="button"
            onClick={copyEmail}
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <span aria-hidden>📋</span>
            {copied ? "Kopiert!" : "E-Mail kopieren"}
          </button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? "E-Mail-Adresse in die Zwischenablage kopiert." : ""}
          </span>
        </section>

        <Link href="/" className="btn-cta mt-8 sm:w-auto">
          Zurück zur Startseite
        </Link>
      </main>
    </div>
  );
}
