import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dabiri Autos Limited | Quality Vehicles in Lagos",
  description:
    "Your trusted partner for quality Nigerian used and foreign used vehicles. Toyota, Lexus, Mercedes-Benz specialists. iBUY, iSELL, iSWAP services available.",
  openGraph: {
    title: "Dabiri Autos Limited | Quality Vehicles in Lagos",
    description:
      "Your trusted partner for quality Nigerian used and foreign used vehicles in Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
    siteName: "Dabiri Autos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preload" as="image" href="/dabiri-bg.png" />
      </head>
      <body className={`${inter.className} font-body`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
