import Link from "next/link";

const h2 = "mt-10 text-xl font-semibold text-snow";
const p = "mt-3 leading-relaxed text-snow-200";
const ul = "mt-3 list-disc space-y-1 pl-6 leading-relaxed text-snow-200";

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="underline">← Zurück</Link>
      <h1 className="mt-6 text-3xl font-semibold">Datenschutzerklärung</h1>
      <p className={p}>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Hier erfährst du, welche Daten beim
        Besuch dieser Website und bei einer Bestellung verarbeitet werden, zu welchen Zwecken und auf
        welcher Rechtsgrundlage das geschieht und welche Rechte du hast. Diese Erklärung gilt für
        den Online-Shop „Bennys Winterrätsel“ unter bennys-winterraetsel.de. Personenbezogene Daten sind alle
        Daten, mit denen du persönlich identifiziert werden kannst.
      </p>

      <h2 className={h2}>1. Verantwortlicher</h2>
      <p className={p}>
        Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p className={p}>
        Tom Meistrik
        <br />
        Kelvinstraße 1-3
        <br />
        50996 Köln, Deutschland
        <br />
        Telefon: 0155 66829667
        <br />
        E-Mail: bennyswinterratsel@gmail.com
      </p>
      <p className={p}>
        Die Angaben entsprechen dem <Link href="/impressum" className="underline">Impressum</Link>.
      </p>

      <h2 className={h2}>2. Hosting und Server-Logfiles</h2>
      <p className={p}>
        Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Daten, die
        dein Browser automatisch übermittelt: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
        Browsertyp und Betriebssystem sowie die zuvor besuchte Seite. Die Verarbeitung dient dem
        sicheren und stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO, berechtigtes
        Interesse). Die Logfiles werden nach kurzer Zeit gelöscht, sofern sie nicht zur Aufklärung
        von Missbrauch länger benötigt werden.
      </p>
      <p className={p}>
        Hosting-Anbieter:Vercel: Diese Website wird auf Vercel gehostet, einem Dienst der Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA). Die Verarbeitung der Daten erfolgt aufgrund des berechtigten Interesses des Anbieters an einem stabilen und sicheren Betrieb der Website. Mit dem
        Anbieter besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Falls der Anbieter
        seinen Sitz oder Server außerhalb der EU hat, erfolgt die Übermittlung auf Grundlage des
        EU-US Data Privacy Framework bzw. von Standardvertragsklauseln.
      </p>
      <p className={p}>
        Hinweis: Wir haben keinen Einfluss auf die Datenverarbeitung durch Vercel. Vercel kann beim Besuch dieser Website technische Daten wie IP-Adressen, Browser-Informationen und Zugriffszeiten erheben.
      </p>
      <p className={p}>
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Vercel Datenschutz: Weitere Informationen zur Datenverarbeitung durch Vercel finden Sie in der Vercel Datenschutzerklärung.
        </a>
      </p>
      <p className={p}>
        Eine Weitergabe der Logfile-Daten an Dritte findet nicht statt. Wir behalten uns vor, die
        Logfiles nachträglich zu prüfen, wenn konkrete Anhaltspunkte für eine rechtswidrige Nutzung
        bestehen.
      </p>

      <h2 className={h2}>3. Schriftarten</h2>
      <p className={p}>
        Die verwendeten Schriftarten (Fredoka und Nunito) werden beim Erstellen der Website lokal
        eingebunden und von unserem eigenen Server ausgeliefert. Beim Aufruf der Seite wird keine
        Verbindung zu Google-Servern hergestellt.
      </p>

      <h2 className={h2}>4. Bestellung und Zahlung über Stripe</h2>
      <p className={p}>
        Bestellungen und Zahlungen wickeln wir über den Zahlungsdienstleister Stripe ab. Beim Klick
        auf den Bestell-Button wirst du auf die Checkout-Seite von Stripe weitergeleitet. Dort gibst
        du deine Daten direkt bei Stripe ein.
      </p>
      <p className={p}>Dabei werden insbesondere folgende Daten verarbeitet:</p>
      <ul className={ul}>
        <li>Name, E-Mail-Adresse, Rechnungs- und Lieferadresse</li>
        <li>Zahlungsdaten (z. B. Kartendaten oder Daten der gewählten Zahlungsart)</li>
        <li>Bestellinhalt, Betrag, Zeitpunkt der Bestellung</li>
        <li>technische Daten wie IP-Adresse und Geräteinformationen zur Betrugsprävention</li>
      </ul>
      <p className={p}>
        Rechtsgrundlage ist die Durchführung des Vertrags und vorvertraglicher Maßnahmen (Art. 6
        Abs. 1 lit. b DSGVO) sowie unsere gesetzlichen Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c
        DSGVO). Stripe verarbeitet Daten teilweise auch als eigener Verantwortlicher, etwa zur
        Betrugsprävention und zur Erfüllung gesetzlicher Pflichten.
      </p>
      <p className={p}>
        Anbieter ist Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock,
        Dublin, D02 H210, Irland. Stripe kann Daten an die Stripe, Inc. in den USA übermitteln. Die
        Übermittlung stützt sich auf den Angemessenheitsbeschluss der EU-Kommission
        (EU-US Data Privacy Framework) bzw. auf Standardvertragsklauseln. Weitere Informationen:{" "}
        <a href="https://stripe.com/de/privacy" className="underline" target="_blank" rel="noopener noreferrer">
          stripe.com/de/privacy
        </a>
        .
      </p>
      <p className={p}>
        Welche Zahlungsarten dir bei Stripe angeboten werden (z. B. Kreditkarte, SEPA-Lastschrift,
        Apple Pay, Google Pay, Klarna oder PayPal), hängt von den Einstellungen in unserem
        Stripe-Konto und von deinem Gerät ab. Bei der Nutzung dieser Zahlungsarten werden deine
        Zahlungsdaten über Stripe an den jeweiligen Zahlungsanbieter weitergegeben, soweit das zur
        Zahlungsabwicklung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO). Bei Zahlungsarten wie
        Rechnungs- oder Ratenkauf kann der Anbieter zusätzlich eine Bonitätsprüfung durchführen.
        Über Umfang und Ablauf informiert der jeweilige Anbieter in seiner eigenen
        Datenschutzerklärung. Aktivierte Zahlungsarten in unserem Shop: Karten (Visa, Mastercard, Wero, Revolut Pay, American Express, Discover, Diners Club, Cartes Bancaires, JCB und China UnionPay-Zahlungen), Amazon Pay, Apple Pay, Kakao Pay, Link (by Stripe), MB Way, Naver Pay, PAYCO, PayPal, Samsung Play, Satispay, Bancontact, BLIK, iDEAL Wero, Wero, Pix und Klarna.
      </p>
      <p className={p}>
        Im Stripe-Checkout bestätigst du per Häkchen unsere AGB. Stripe speichert diese Bestätigung
        samt Zeitpunkt zu deiner Bestellung. Das dient uns als Nachweis (Art. 6 Abs. 1 lit. c und f
        DSGVO).
      </p>

      <h2 className={h2}>5. Versanddienstleister</h2>
      <p className={p}>
        Für die Zustellung der Ware arbeiten wir mit folgenden Transportunternehmen zusammen: DHL Paket GmbH, Sträßchensweg 10,
        53113 Bonn. United Parcel Service Deutschland S.à r.l. & Co. OHG, Görlitzer Straße 1, 41460 Neuss, Deutschland. Zum Zweck der Zustellung geben wir Name und Lieferadresse an den Anbieter weiter
        (Art. 6 Abs. 1 lit. b DSGVO). Deine E-Mail-Adresse oder Telefonnummer geben wir nur
        weiter, wenn du dazu ausdrücklich eingewilligt hast (Art. 6 Abs. 1 lit. a DSGVO). Diese
        Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>
      <p className={p}>
        Aufgrund handels- und steuerrechtlicher Pflichten bewahren wir Buchungs- und Rechnungsdaten
        bis zu zehn Jahre auf (§ 147 AO, § 257 HGB).
      </p>

      <h2 className={h2}>6. Kontaktaufnahme und Kontaktformular (Formspree)</h2>
      <p className={p}>
        Wenn du uns über das Kontaktformular schreibst, verarbeiten wir die Angaben, die du
        eingibst: Name, E-Mail-Adresse und Nachricht. Zusätzlich übermittelt dein Browser technische
        Daten wie die IP-Adresse. Wir nutzen die Daten ausschließlich, um deine Anfrage zu
        beantworten.
      </p>
      <p className={p}>
        Für den Versand setzen wir den Dienst Formspree ein. Anbieter ist Formspree, Inc., 1 Grand
        Street, Suite 2, Brooklyn, NY 11249, USA. Beim Absenden werden deine Eingaben an die Server
        von Formspree übertragen und von dort per E-Mail an uns weitergeleitet. Formspree speichert
        die Einsendungen zudem für eine begrenzte Zeit in seinem System. Damit werden Daten in die
        USA übermittelt. Die Übermittlung stützt sich auf Standardvertragsklauseln bzw. auf das
        EU-US Data Privacy Framework, soweit Formspree zertifiziert ist. Mit Formspree besteht oder
        wird ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen. Weitere
        Informationen:{" "}
        <a href="https://formspree.io/legal/privacy-policy" className="underline" target="_blank" rel="noopener noreferrer">
          formspree.io/legal/privacy-policy
        </a>
        .
      </p>
      <p className={p}>
        Rechtsgrundlage ist dein Einverständnis (Art. 6 Abs. 1 lit. a DSGVO), das du durch das
        Absenden und das Setzen des Häkchens im Formular erteilst, bzw. die Durchführung
        vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). Du kannst deine Einwilligung
        jederzeit mit Wirkung für die Zukunft widerrufen. Wir löschen deine Anfrage, sobald sie
        erledigt ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p className={p}>
        Das Formular enthält ein verstecktes Feld zum Schutz vor Spam-Bots. Es verarbeitet keine
        personenbezogenen Daten.
      </p>

      <h2 className={h2}>7. Rezensionen</h2>
      <p className={p}>
        Wenn du eine Rezension schreibst, werden Name, Bewertung und Text im lokalen Speicher
        (localStorage) deines Browsers abgelegt. Sie werden nicht an unsere Server übertragen und
        sind nur auf deinem Gerät sichtbar. Der Speicher ist für die Anzeige deiner Rezension
        technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst die Daten jederzeit löschen,
        indem du die Website-Daten in deinem Browser entfernst.
      </p>

      <h2 className={h2}>8. Cookies und Tracking</h2>
      <p className={p}>
        Wir setzen auf dieser Website selbst keine Cookies und verwenden keine Analyse-,
        Marketing- oder Retargeting-Dienste (z. B. kein Google Analytics, kein Meta Pixel, kein
        Google Ads) und keine Social-Media-Plugins. Deshalb setzen wir derzeit auch kein
        Cookie-Consent-Tool ein. Stripe kann auf der eigenen Checkout-Seite technisch notwendige
        Cookies setzen, etwa zur Betrugsprävention (§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f
        DSGVO). Du kannst deinen Browser so einstellen, dass er dich über Cookies informiert oder
        sie ablehnt. Dann kann der Checkout eingeschränkt funktionieren.
      </p>
      <p className={p}>
        Sobald wir Dienste einsetzen, die deine Einwilligung erfordern, ergänzen wir diese Erklärung
        und holen vorher deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO).
      </p>

      <h2 className={h2}>9. Deine Rechte</h2>
      <p className={p}>Du hast nach der DSGVO folgende Rechte:</p>
      <ul className={ul}>
        <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Unterrichtung über Berichtigung, Löschung oder Einschränkung (Art. 19 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        <li>
          Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21
          DSGVO)
        </li>
      </ul>
      <p className={p}>
        Zur Ausübung deiner Rechte schreib uns an die oben genannte E-Mail-Adresse. Außerdem hast du
        das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO),
        insbesondere in dem Bundesland, in dem du lebst oder arbeitest, oder am Sitz des
        Verantwortlichen.
      </p>

      <p className="mt-4 font-semibold uppercase leading-relaxed text-snow">
        Widerspruchsrecht: Wenn wir deine personenbezogenen Daten aufgrund eines berechtigten
        Interesses verarbeiten, hast du das Recht, aus Gründen, die sich aus deiner besonderen
        Situation ergeben, jederzeit Widerspruch mit Wirkung für die Zukunft einzulegen. Wir
        beenden dann die Verarbeitung, es sei denn, wir können zwingende schutzwürdige Gründe
        nachweisen, die deine Interessen überwiegen, oder die Verarbeitung dient der
        Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>

      <h2 className={h2}>10. Dauer der Speicherung</h2>
      <p className={p}>
        Wir speichern personenbezogene Daten nur so lange, wie es der Zweck erfordert und
        gesetzliche Aufbewahrungsfristen es verlangen:
      </p>
      <ul className={ul}>
        <li>Daten aus Einwilligungen (Art. 6 Abs. 1 lit. a DSGVO): bis zu deinem Widerruf.</li>
        <li>
          Bestell- und Vertragsdaten (Art. 6 Abs. 1 lit. b DSGVO): bis zur vollständigen
          Abwicklung. Danach gelten handels- und steuerrechtliche Fristen von bis zu zehn Jahren.
        </li>
        <li>
          Daten aus berechtigtem Interesse (Art. 6 Abs. 1 lit. f DSGVO): bis zu deinem
          Widerspruch, soweit keine zwingenden Gründe für eine Weiterspeicherung bestehen.
        </li>
        <li>
          Kontaktanfragen: bis die Angelegenheit abschließend geklärt ist, sofern keine
          gesetzlichen Pflichten entgegenstehen.
        </li>
        <li>Server-Logfiles: nur kurzzeitig, siehe Abschnitt 2.</li>
      </ul>

      <h2 className={h2}>11. Datensicherheit</h2>
      <p className={p}>
        Diese Website nutzt zur Sicherheit eine SSL/TLS-Verschlüsselung. Du erkennst sie an „https://" und dem
        Schloss-Symbol in der Adresszeile deines Browsers.
      </p>

      <h2 className={h2}>12. Änderungen dieser Erklärung</h2>
      <p className={p}>
        Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert.
        Es gilt die jeweils hier veröffentlichte Fassung.
      </p>
      <p className={p}>Stand: Oktober 2026</p>
    </main>
  );
}
