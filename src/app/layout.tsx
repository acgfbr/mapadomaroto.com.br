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
  title: "Mapa do Maroto | Juro Solenemente Não Fazer Nada de Bom",
  description:
    "Os senhores Aluado, Rabicho, Almofadinhas e Pontas têm o prazer em apresentar o Mapa do Maroto. Juro solenemente não fazer nada de bom!",
  keywords: [
    "mapa do maroto",
    "harry potter",
    "hogwarts",
    "marauders map",
    "juro solenemente",
    "aluado",
    "rabicho",
    "almofadinhas",
    "pontas",
  ],
  authors: [{ name: "Real Oficial", url: "https://realoficial.com.br" }],
  creator: "Real Oficial",
  metadataBase: new URL("https://mapadomaroto.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mapadomaroto.com.br",
    siteName: "Mapa do Maroto",
    title: "Mapa do Maroto | Juro Solenemente Não Fazer Nada de Bom",
    description:
      "Os senhores Aluado, Rabicho, Almofadinhas e Pontas têm o prazer em apresentar o Mapa do Maroto.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Real Oficial - Cortes Virais: Transforme vídeos longos em curtos!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@acgfbr",
    title: "Mapa do Maroto | Juro Solenemente Não Fazer Nada de Bom",
    description:
      "Os senhores Aluado, Rabicho, Almofadinhas e Pontas têm o prazer em apresentar o Mapa do Maroto.",
    images: ["https://mapadomaroto.com.br/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${medieval.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
