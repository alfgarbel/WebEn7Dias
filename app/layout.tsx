import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebEn7Días | Web profesional en 7 días",
  description:
    "Creamos webs profesionales para negocios de servicios. Primera versión funcional en 7 días o te devolvemos el dinero.",
  metadataBase: new URL("https://weben7dias.com"),
  icons: {
    icon: "/favicon-icon.png",
    shortcut: "/favicon-icon.png",
    apple: "/favicon-icon.png",
  },
  openGraph: {
    title: "WebEn7Días | Web profesional en 7 días",
    description:
      "Creamos webs profesionales para negocios de servicios. Primera versión funcional en 7 días o te devolvemos el dinero.",
    url: "https://weben7dias.com",
    siteName: "WebEn7Días",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebEn7Días | Web profesional en 7 días",
    description:
      "Creamos webs profesionales para negocios de servicios. Primera versión funcional en 7 días o te devolvemos el dinero.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
