import type { Metadata } from "next";
import { Geist, MedievalSharp } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const medieval = MedievalSharp({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-harry-potter",
});

export const metadata: Metadata = {
  title: "Mapa do Maroto",
  description: "Juro solenemente não fazer nada de bom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${medieval.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
