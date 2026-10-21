import Link from "next/link";
import {
  DELIVERY_DAYS_MAX,
  DELIVERY_DAYS_MIN,
  PRODUCT_NAME,
  PRODUCT_PRICE_CENTS,
  SHIPPING_CENTS,
  SHIPPING_COUNTRIES,
  TAX_NOTE,
  formatEuro,
} from "@/lib/config";

const h2 = "mt-10 text-xl font-semibold text-snow";
const p = "mt-3 leading-relaxed text-snow-200";
const ul = "mt-3 list-disc space-y-1 pl-6 leading-relaxed text-snow-200";

export const metadata = { title: "AGB – Bennys Winterrätsel" };

export default function Agb() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="underline">← Zurück</Link>
      <h1 className="mt-6 text-3xl font-semibold">
        Allgemeine Geschäftsbedingungen mit Kundeninformationen
      </h1>

      <h2 className={h2}>Inhaltsverzeichnis</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-6 leading-relaxed text-snow-200">
        <li>Geltungsbereich</li>
        <li>Vertragsschluss</li>
        <li>Widerrufsrecht</li>
        <li>Preise und Zahlungsbedingungen</li>
        <li>Liefer- und Versandbedingungen</li>
        <li>Eigentumsvorbehalt</li>
        <li>Mängelhaftung (Gewährleistung)</li>
        <li>Einlösung von Geschenkgutscheinen</li>
        <li>Anwendbares Recht</li>
        <li>Alternative Streitbeilegung</li>
      </ol>

      <h2 className={h2}>1) Geltungsbereich</h2>
      <p className={p}>
        1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) von Tom Meistrik (Name des
        Verkäufers, nachfolgend „Verkäufer“) gelten für alle Verträge über die Lieferung von Waren,
        die ein Verbraucher oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer hinsichtlich
        der vom Verkäufer in seinem Online-Shop dargestellten Waren abschließt. Hiermit wird der
        Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas
        anderes vereinbart.
      </p>
      <p className={p}>
        1.2 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu
        Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen
        beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine
        natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei
        Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen
        beruflichen Tätigkeit handelt.
      </p>

      <h2 className={h2}>2) Vertragsschluss</h2>
      <p className={p}>
        2.1 Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine
        verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines
        verbindlichen Angebots durch den Kunden.
      </p>
      <p className={p}>
        2.2 Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte
        Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in
        den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat,
        durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches
        Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.
      </p>
      <p className={p}>
        2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,
      </p>
      <ul className={ul}>
        <li>
          indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung
          in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der
          Auftragsbestätigung beim Kunden maßgeblich ist, oder
        </li>
        <li>
          indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim
          Kunden maßgeblich ist, oder
        </li>
        <li>indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
      </ul>
      <p className={p}>
        Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt
        zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme
        des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und
        endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt
        der Verkäufer das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies
        als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine
        Willenserklärung gebunden ist.
      </p>
      <p className={p}>
        2.4 Die Zahlungsabwicklung erfolgt über den Zahlungsdienstleister Stripe Payments Europe,
        Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, D02 H210, Irland (im
        Folgenden: „Stripe“) sowie über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden: „PayPal“), unter Geltung der PayPal-Nutzungsbedingungen, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/useragreement-full oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar unter https://www.paypal.com/de/webapps/mpp/ua/privacywax-full.
        Zahlt der Kunde
        mittels einer im Online-Bestellvorgang auswählbaren Zahlungsart, erklärt der Verkäufer
        schon jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der Kunde den den
        Bestellvorgang abschließenden Button anklickt.
      </p>
      <p className={p}>
        2.5 Bei Auswahl der Zahlungsart "Amazon Payments" erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister Amazon Payments Europe s.c.a., 38 avenue John F. Kennedy, L-1855 Luxemburg (im Folgenden: „Amazon“), unter Geltung der Amazon Payments Europe Nutzungsvereinbarung, einsehbar unter https://payments.amazon.de/help/201751590. Wählt der Kunde im Rahmen des Online-Bestellvorgangs „Amazon Payments“ als Zahlungsart aus, erteilt er durch Klicken des den Bestellvorgang abschließenden Buttons zugleich auch einen Zahlungsauftrag an Amazon. Für diesen Fall erklärt der Verkäufer schon jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der Kunde durch Klicken des den Bestellvorgang abschließenden Buttons den Zahlungsvorgang auslöst.
      </p>
      <p className={p}>
        2.6 Bei der Abgabe eines Angebots über das Online-Bestellformular des Verkäufers wird der
        Vertragstext nach dem Vertragsschluss vom Verkäufer gespeichert und dem Kunden nach
        Absendung von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) übermittelt.
        Eine darüber hinausgehende Zugänglichmachung des Vertragstextes durch den Verkäufer erfolgt
        nicht.
      </p>
      <p className={p}>
        2.7 Vor verbindlicher Abgabe der Bestellung über das Online-Bestellformular des Verkäufers
        kann der Kunde mögliche Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm
        dargestellten Informationen erkennen. Ein wirksames technisches Mittel zur besseren
        Erkennung von Eingabefehlern kann dabei die Vergrößerungsfunktion des Browsers sein, mit
        deren Hilfe die Darstellung auf dem Bildschirm vergrößert wird. Seine Eingaben kann der
        Kunde im Rahmen des elektronischen Bestellprozesses so lange über die üblichen Tastatur-
        und Mausfunktionen korrigieren, bis er den den Bestellvorgang abschließenden Button
        anklickt.
      </p>
      <p className={p}>
        2.8 Für den Vertragsschluss steht ausschließlich die deutsche Sprache zur Verfügung.
      </p>
      <p className={p}>
        2.9 Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und
        automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm
        zur Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser
        Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat der
        Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von
        diesem mit der Bestellabwicklung beauftragten Dritten versandten E-Mails zugestellt werden
        können.
      </p>

      <h2 className={h2}>3) Widerrufsrecht</h2>
      <p className={p}>3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</p>
      <p className={p}>
        3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus der{" "}
        <Link href="/widerruf" className="underline">Widerrufsbelehrung</Link> des Verkäufers.
      </p>

      <h2 className={h2}>4) Preise und Zahlungsbedingungen</h2>
      <p className={p}>
        4.1 Der Preis für „{PRODUCT_NAME}“ beträgt {formatEuro(PRODUCT_PRICE_CENTS)} pro Exemplar.
        Alle Preise {TAX_NOTE} Die Versandkosten betragen{" "}
        {SHIPPING_CENTS === 0 ? "0,00 € (versandkostenfreie Lieferung)" : formatEuro(SHIPPING_CENTS)}.
      </p>
      <p className={p}>
        4.2 Bei Lieferungen in Länder außerhalb der Europäischen Union können im Einzelfall weitere
        Kosten anfallen, die der Verkäufer nicht zu vertreten hat und die vom Kunden zu tragen
        sind. Hierzu zählen beispielsweise Kosten für die Geldübermittlung durch Kreditinstitute
        (z. B. Überweisungsgebühren, Wechselkursgebühren) oder einfuhrrechtliche Abgaben bzw.
        Steuern (z. B. Zölle). Solche Kosten können in Bezug auf die Geldübermittlung auch dann
        anfallen, wenn die Lieferung nicht in ein Land außerhalb der Europäischen Union erfolgt,
        der Kunde die Zahlung aber von einem Land außerhalb der Europäischen Union aus vornimmt.
      </p>
      <p className={p}>
        4.3 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop des Verkäufers
        mitgeteilt.
      </p>
      <p className={p}>
        4.4 Die Zahlungsabwicklung erfolgt über Stripe. Die einzelnen über Stripe angebotenen
        Zahlungsarten werden dem Kunden im Checkout mitgeteilt (aktivierte Zahlungsarten: Karten (Visa, Mastercard,  Wero, Revolut Pay, American Express, Discover, Diners Club, Cartes Bancaires, JCB und China UnionPay-Zahlungen), Amazon Pay, Apple Pay, Kakao Pay, Link (by Stripe), MB Way, Naver Pay, PAYCO, PayPal, Samsung Play, Satispay, Bancontact, BLIK, iDEAL Wero, Wero, Pix und Klarna).
        Zur Abwicklung von Zahlungen kann sich Stripe weiterer Zahlungsdienste bedienen, für die
        ggf. besondere Zahlungsbedingungen gelten, auf die der Kunde ggf. gesondert hingewiesen
        wird. Weitere Informationen sind unter{" "}
        <a href="https://stripe.com/de/legal" className="underline" target="_blank" rel="noopener noreferrer">
          stripe.com/de/legal
        </a>{" "}
        abrufbar. Die Zahlung wird mit Abschluss der Bestellung fällig.
      </p>
      <p className={p}>
        4.5 Bei Auswahl der Zahlungsart „PayPal Lastschrift“ zieht PayPal den Rechnungsbetrag nach Erteilung eines SEPA-Lastschriftmandats, nicht jedoch vor Ablauf der Frist für die Vorabinformation im Auftrag des Verkäufers vom Bankkonto des Kunden ein. Vorabinformation ("Pre-Notification") ist jede Mitteilung (z.B. Rechnung, Police, Vertrag) an den Kunden, die eine Belastung mittels SEPA-Lastschrift ankündigt. Wird die Lastschrift mangels ausreichender Kontodeckung oder aufgrund der Angabe einer falschen Bankverbindung nicht eingelöst oder widerspricht der Kunde der Abbuchung, obwohl er hierzu nicht berechtigt ist, hat der Kunde die durch die Rückbuchung des jeweiligen Kreditinstituts entstehenden Gebühren zu tragen, wenn er dies zu vertreten hat.
      </p>

      <h2 className={h2}>5) Liefer- und Versandbedingungen</h2>
      <p className={p}>
        5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene
        Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion
        ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich. Wir
        liefern in folgende Länder: {SHIPPING_COUNTRIES.join(", ")}. Die voraussichtliche
        Lieferzeit beträgt {DELIVERY_DAYS_MIN} bis {DELIVERY_DAYS_MAX} Werktage nach Zahlungseingang.
      </p>
      <p className={p}>
        5.2 Scheitert die Zustellung der Ware aus Gründen, die der Kunde zu vertreten hat, trägt
        der Kunde die dem Verkäufer hierdurch entstehenden angemessenen Kosten. Dies gilt im
        Hinblick auf die Kosten für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht
        wirksam ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des Widerrufsrechts
        durch den Kunden die in der Widerrufsbelehrung des Verkäufers hierzu getroffene Regelung.
      </p>
      <p className={p}>
        5.3 Der Verkäufer behält sich das Recht vor, im Falle nicht richtiger oder nicht
        ordnungsgemäßer Selbstbelieferung vom Vertrag zurückzutreten. Dies gilt nur für den Fall,
        dass die Nichtlieferung nicht vom Verkäufer zu vertreten ist und dieser mit der gebotenen
        Sorgfalt ein konkretes Deckungsgeschäft mit dem Zulieferer abgeschlossen hat. Der
        Verkäufer wird alle zumutbaren Anstrengungen unternehmen, um die Ware zu beschaffen. Im
        Falle der Nichtverfügbarkeit oder der nur teilweisen Verfügbarkeit der Ware wird der Kunde
        unverzüglich informiert und die Gegenleistung unverzüglich erstattet.
      </p>
      <p className={p}>5.4 Selbstabholung ist aus logistischen Gründen nicht möglich.</p>
     

      <h2 className={h2}>6) Eigentumsvorbehalt</h2>
      <p className={p}>
        Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des
        geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.
      </p>

      <h2 className={h2}>7) Mängelhaftung (Gewährleistung)</h2>
      <p className={p}>
        7.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der gesetzlichen Mängelhaftung.
      </p>
      <p className={p}>
        7.2 Handelt der Kunde als Verbraucher, so wird er gebeten, angelieferte Waren mit
        offensichtlichen Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer
        hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat dies keinerlei
        Auswirkungen auf seine gesetzlichen oder vertraglichen Mängelansprüche.
      </p>

      <h2 className={h2}>8) Anwendbares Recht</h2>
      <p className={p}>
        Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland
        unter Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei
        Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch
        zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen
        Aufenthalt hat, entzogen wird.
      </p>

      <h2 className={h2}>9) Alternative Streitbeilegung</h2>
      <p className={p}>
        Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      
      </p>
      <p className={p}>Stand: Oktober 2026</p>
    </main>
  );
}
