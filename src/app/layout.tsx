import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dabiri Autos Limited | Quality Vehicles in Lagos",
  description: "Your trusted partner for quality Nigerian used and foreign used vehicles. Toyota, Lexus, Mercedes-Benz specialists. iBUY, iSELL, iSWAP services available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
