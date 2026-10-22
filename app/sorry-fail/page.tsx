import Link from "next/link";
import Snowfall from "@/components/Snowfall";

export const metadata = {
  title: "Etwas ist schiefgelaufen – Bennys Winterrätsel",
};

export default function SorryFail() {
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
              href="mailto:bennyswinterratsel@gmail.com?subject=Problem%20mit%20meiner%20Bestellung"
              className="font-semibold text-white underline underline-offset-2"
            >
              bennyswinterratsel@gmail.com
            </a>
            . Schildere uns kurz, was passiert ist, und gib dabei bitte den{" "}
            <strong className="text-white">Namen an, auf den die Bestellung lief</strong>.
            Damit können wir deine Bestellung schnell finden und das Problem lösen.
          </p>
        </section>

        <Link href="/" className="btn-cta mt-8 sm:w-auto">
          Zurück zur Startseite
        </Link>
      </main>
    </div>
  );
}
