import Link from "next/link";

const h2 = "mt-10 text-xl font-semibold text-snow";
const p = "mt-3 leading-relaxed text-snow-200";

export const metadata = { title: "Widerrufsbelehrung – Bennys Winterrätsel" };

export default function Widerruf() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="underline">← Zurück</Link>
      <h1 className="mt-6 text-3xl font-semibold">Widerrufsbelehrung</h1>

      <h2 className={h2}>Widerrufsrecht</h2>
      <p className={p}>
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
        widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir
        benannter Dritter, der nicht Beförderer ist, die Waren in Besitz genommen hast bzw. hat.
        Bei mehreren Exemplaren in einer Bestellung, die getrennt geliefert werden, beginnt die Frist
        mit Erhalt der zuletzt gelieferten Ware.
      </p>
      <p className={p}>
        Um dein Widerrufsrecht auszuüben, musst du uns
      </p>
      <p className={p}>
        [Vor- und Nachname / Firma, Straße und Hausnummer, PLZ und Ort, E-Mail-Adresse, ggf.
        Telefonnummer]
      </p>
      <p className={p}>
        mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine
        E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür
        das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
        Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des
        Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
      </p>

      <h2 className={h2}>Folgen des Widerrufs</h2>
      <p className={p}>
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten
        haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
        daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene,
        günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn
        Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses
        Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
        Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn,
        mit dir wurde ausdrücklich etwas anderes vereinbart. Wir können die Rückzahlung verweigern,
        bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass
        du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.
      </p>
      <p className={p}>
        Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem
        Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtest, an uns zurückzusenden
        oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von
        vierzehn Tagen absendest. Du trägst die unmittelbaren Kosten der Rücksendung der Waren.
        Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust
        auf einen zum Prüfen der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
        notwendigen Umgang mit ihnen zurückzuführen ist.
      </p>

      <h2 className={h2}>Muster-Widerrufsformular</h2>
      <p className={p}>
        (Wenn du den Vertrag widerrufen willst, dann fülle bitte dieses Formular aus und sende es
        zurück.)
      </p>
      <div className="mt-3 rounded-2xl border border-night-600 p-4 leading-relaxed text-snow-200">
        <p>An [Name/Firma, Anschrift, E-Mail-Adresse des Unternehmers]:</p>
        <p className="mt-2">
          Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den
          Kauf der folgenden Waren (*): Bennys Winterrätsel – Das Adventskalenderbuch
        </p>
        <p className="mt-2">Bestellt am (*) / erhalten am (*): ____________</p>
        <p className="mt-2">Name des/der Verbraucher(s): ____________</p>
        <p className="mt-2">Anschrift des/der Verbraucher(s): ____________</p>
        <p className="mt-2">
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ____________
        </p>
        <p className="mt-2">Datum: ____________</p>
        <p className="mt-3 text-sm">(*) Unzutreffendes streichen.</p>
      </div>
    </main>
  );
}
