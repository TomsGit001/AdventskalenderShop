import Link from "next/link";

export default function Danke() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-12 text-center">
      <div aria-hidden className="text-6xl">🎄</div>
      <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">Vielen Dank für deine Bestellung!</h1>
      <p className="mt-4 text-lg text-snow-200">
        Deine Zahlung war erfolgreich. Eine Bestätigung bekommst du per E-Mail. Viel Freude mit
        Bennys Winterrätsel!
      </p>
      <Link href="/" className="btn-cta mt-8 sm:w-auto">Zurück zur Startseite</Link>
    </main>
  );
}
