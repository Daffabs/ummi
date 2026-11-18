import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ummi Laila Sakinah, S.Farm. | Portofolio Farmasi Klinis & Akademis",
  description:
    "Dedikasi akademis dan integritas klinis dalam peracikan formula, ketepatan sediaan steril, serta komitmen penuh terhadap keselamatan dan edukasi pengobatan pasien.",
  keywords: [
    "Ummi Laila Sakinah",
    "Farmasi",
    "S.Farm",
    "Portofolio Farmasi",
    "Apoteker",
    "Bhakti Kencana Bandung",
    "Farmasi Klinis",
    "Formulasi Sediaan",
  ],
  authors: [{ name: "Ummi Laila Sakinah" }],
  openGraph: {
    title: "Ummi Laila Sakinah, S.Farm. | Portofolio Farmasi",
    description:
      "Portofolio profesional akademis dan klinis Ummi Laila Sakinah, S.Farm.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-sans text-on-surface antialiased relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
