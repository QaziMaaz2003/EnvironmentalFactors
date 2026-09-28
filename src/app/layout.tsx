import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Fraunces,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Environmental Filters by KorganoTech | Landfill Gas to Renewable Methane",
  description:
    "An automated carbon-capture and methane-recovery system developed by KorganoTech with Lawrence Livermore National Laboratory. Separate CO₂ from landfill gas with a reusable filter media.",
};

export const viewport: Viewport = {
  themeColor: "#0f3b44",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
