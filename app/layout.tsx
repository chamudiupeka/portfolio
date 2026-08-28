import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Only the weights actually used are requested — the design sets everything at
// 400, with 600 kept on the body face as the one emphasis weight.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chamudi Upeka | Full-Stack Engineer",
  description:
    "Portfolio of Chamudi Upeka, a Computer Science undergraduate at the University of Colombo building full-stack systems, test automation, and applied-AI projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-ink font-body text-offwhite">{children}</body>
    </html>
  );
}
