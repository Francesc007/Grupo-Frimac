import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Frimac | Soluciones Integrales de Alto Nivel",
  description: "Líderes en obra civil, aire acondicionado industrial e instalaciones especiales en Aguascalientes. Más de 15 años de experiencia transformando la industria.",
  keywords: ["soluciones industriales aguascalientes", "obra civil", "aire acondicionado industrial", "ingeniería industrial", "grupo frimac", "instalaciones especiales"],
  authors: [{ name: "Grupo Frimac" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.grupofrimac.com/",
    title: "Grupo Frimac | Ingeniería y Construcción Industrial",
    description: "Servicios de obra civil y climatización industrial con garantía de calidad.",
    siteName: "Grupo Frimac",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
