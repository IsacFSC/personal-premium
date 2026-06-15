import "./globals.css";
import type { Metadata } from "next";
import {
  Allura,
  Inter,
  Playfair_Display,
  Quicksand,
  Baloo_2,
  Cormorant_Garamond,
} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppStoreButton from "@/components/WhatsAppButton";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura-var",
  display: "swap",
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo2-var",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://personal-premium-studio.vercel.app",
      "http://localhost:3000",
  ),

  title: {
    default: "Premium Personal | Seu próximo nível começa aqui",
    template: "%s | Premium Personal",
  },

  description:
    "Premium Personal: performance, estética e bem-estar. Experiência exclusiva de treino para quem busca alto nível.",

  keywords: [
    "personal trainer",
    "premium personal",
    "Campo Grande MS",
    "performance",
    "estética",
    "bem-estar",
    "treino personalizado",
    "alto nível",
  ],

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "brand/premium.jpg",
    shortcut: "brand/premium.jpg",
    apple: "brand/premium.jpg",
  },

  openGraph: {
    title: "Premium Personal | Seu próximo nível começa aqui",
    description:
      "Performance, estética e bem-estar. Experiência exclusiva de treino para quem busca alto nível.",
    url: "/",
    siteName: "Premium Personal",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "brand/premium.jpg",
        width: 512,
        height: 512,
        alt: "Premium Personal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Personal | Seu próximo nível começa aqui",
    description:
      "Performance, estética e bem-estar. Experiência exclusiva de treino para quem busca alto nível.",
    images: ["brand/premium.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${quicksand.variable} ${baloo2.variable} ${cormorant.variable} ${allura.variable} font-sans`}
    >
      <body className="bg-brand-bg font-sans text-gray-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppStoreButton isFloating={true} />
      </body>
    </html>
  );
}
