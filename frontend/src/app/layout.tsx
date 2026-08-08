import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScreenshotBlocker from "@/components/layout/ScreenshotBlocker";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-paint",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vijayalakshmi Tanjore Art Gallery | Art That Speaks Soul",
  description: "Explore our curated collection of luxury Tanjore artworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <ScreenshotBlocker />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
