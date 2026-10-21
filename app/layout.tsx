import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bennys Winterrätsel – Das Adventskalenderbuch | 24 Geschichten & Rätsel",
  description:
    "Die sinnvolle Alternative zum Schoko-Adventskalender: 24 Geschichten und Rätsel, die Konzentration und Logik fördern.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3047",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
