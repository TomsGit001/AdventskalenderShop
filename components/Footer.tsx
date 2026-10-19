"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { Deco } from "./Deco";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpwlynko";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "min-h-[52px] w-full rounded-2xl border border-night-600 bg-night-900/60 px-4 py-3 text-base text-snow placeholder:text-snow/50 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/40";

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const d = new FormData(form);
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: d,
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
        return;
      }
      const data = await res.json().catch(() => null);
      const detail = Array.isArray(data?.errors)
        ? data.errors.map((er: { message?: string }) => er.message).filter(Boolean).join(", ")
        : "";
      setErrorMsg(detail);
      setStatus("error");
    } catch {
      setErrorMsg("Keine Verbindung. Bitte prüfe dein Internet und versuche es erneut.");
      setStatus("error");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-night-950">
      <Deco name="dance" className="hidden sm:left-10 sm:top-4 sm:block sm:w-32" />
      <Deco name="honey" className="hidden sm:bottom-2 sm:right-10 sm:block sm:w-40" />
      <div className="section relative max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="section-title">Schenke deinem Kind einen magischen Advent ❄️</h2>
          <div className="mx-auto mt-6 max-w-sm">
            <CtaButton />
          </div>
        </div>

        {/* Handy: Icons direkt über dem Formular, gut sichtbar */}
        <div className="mb-2 flex items-end justify-center gap-6 sm:hidden">
          <Image src="/images/icon_benny5.png" alt="" aria-hidden width={940} height={1175} className="h-20 w-auto" />
          <Image src="/images/icon_benny3.png" alt="" aria-hidden width={940} height={1175} className="h-20 w-auto" />
        </div>
        <h2 className="text-center text-2xl font-semibold">Fragen? Schreib uns!</h2>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          {/* Honeypot gegen Spam-Bots (für Menschen unsichtbar) */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <input type="hidden" name="_subject" value="Neue Anfrage über Bennys Winterrätsel" />
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold">Name</label>
            <input id="name" name="name" required autoComplete="name" className={field} placeholder="Dein Name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold">E-Mail</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="deine@email.de" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold">Nachricht</label>
            <textarea id="message" name="message" required rows={4} className={field} placeholder="Wie können wir helfen?" />
          </div>
          <label className="flex items-start gap-3 text-sm text-snow-200">
            <input type="checkbox" required className="mt-1 h-5 w-5 accent-mint" />
            <span>
              Ich habe die <Link href="/datenschutz" className="underline">Datenschutzerklärung</Link> gelesen und
              stimme der Verarbeitung meiner Daten zu.
            </span>
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-[56px] w-full rounded-full bg-mint px-8 py-4 font-display text-lg font-semibold text-night-950 transition hover:bg-mint-400 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          </button>
          <div aria-live="polite">
            {status === "success" && (
              <p className="text-center text-sm text-mint">Danke für deine Nachricht! Wir melden uns bald bei dir. 💙</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-[#ff8f84]" role="alert">
                Das Senden hat leider nicht geklappt. {errorMsg || "Bitte versuche es später noch einmal."}
              </p>
            )}
          </div>
        </form>

        <nav className="mt-12 flex flex-wrap justify-center gap-x-6 text-sm text-snow-200">
          <Link href="/impressum" className="py-3 underline">Impressum</Link>
          <Link href="/datenschutz" className="py-3 underline">Datenschutz</Link>
          <Link href="/agb" className="py-3 underline">AGB</Link>
          <Link href="/widerruf" className="py-3 underline">Widerruf</Link>
        </nav>
        <p className="text-center text-xs text-snow/50">© {new Date().getFullYear()} Bennys Winterrätsel</p>
      </div>
    </footer>
  );
}
