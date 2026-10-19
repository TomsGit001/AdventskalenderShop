import Link from "next/link";

const h2 = "mt-10 text-xl font-semibold text-snow";
const p = "mt-3 leading-relaxed text-snow-200";

export default function Impressum() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="underline">← Zurück</Link>
      <h1 className="mt-6 text-3xl font-semibold">Impressum</h1>

      <h2 className={h2}>Angaben gemäß § 5 DDG</h2>
      <p className={p}>
        Tom Meistrik
        <br />
        Kelvinstraße 1-3
        <br />
        50996 Köln
        <br />
        Deutschland
      </p>

      <h2 className={h2}>Kontakt</h2>
      <p className={p}>
        Telefon: +49 155 66829667
        <br />
        E-Mail: bennyswinterratsel@gmail.com
      </p>

      <h2 className={h2}>Umsatzsteuer</h2>
      <p className={p}>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE50 490 168 328
      </p>

      <h2 className={h2}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className={p}>
        Tom Meistrik
        <br />
        Kelvinstraße 1-3
        <br />
        50996 Köln
        <br />
        E-Mail: bennyswinterratsel@gmail.com
      </p>

      <h2 className={h2}>Streitbeilegung</h2>
      <p className={p}>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className={h2}>Haftungsausschluss</h2>
      <p className={p}>
        <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt
        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
        keine Gewähr übernehmen.
      </p>
      <p className={p}>
        <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten
        Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
        jeweilige Anbieter oder Betreiber verantwortlich.
      </p>
      <p className={p}>
        <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke
        auf diesen Seiten unterliegen dem deutschen Urheberrecht.
      </p>
    </main>
  );
}

