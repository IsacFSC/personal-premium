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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://premiumpersonal.vercel.app/",
  ),
  title: {
    default: "Premium — Personal | Seu próximo nível começa aqui.",
    template: "%s | Premium Personal ",
  },
  description:
    "Premium - Performance, estética e bem-estar. Experiência exclusiva de treino. Para quem busca alto nível",
  keywords: [
    "Personal ",
    "Premium",
    "Bonito - MS",
    "Performance",
    "Estética",
    "Bem-estar",
    "Treino",
    "Alto nível",
    "Exclusivo",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Premium — Personal ",
    images: [
      {
        url: "/brand/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Premium — Personal ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/logo.jpg"],
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
