"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  buildWhatsAppUrl,
  WHATSAPP_STORE_1,
  WHATSAPP_STORE_2,
} from "@/lib/whatsapp";
import Image from "next/image";
import Icon from "./../../public/assets/academia.png";
import { useState } from "react";
import { SiX } from "react-icons/si";
import { Music2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// Mapa carregado apenas no client (Leaflet requer window/document)
const StudioMap = dynamic(() => import("@/components/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="h-32 w-full animate-pulse rounded-xl bg-white/5" />
  ),
});

const studios = [
  {
    label: "Academia 1 — Studio Vilas Boas",
    address: "Av. Cel Pôrto Carrero, 100",
    city: "Campo Grande – MS",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_1,
    lat: -20.484572,
    lng: -54.5961881,
    mapsUrl: "https://www.google.com/maps?q=-20.484572,-54.5961881",
  },
  {
    label: "Academia 2 — Santa Fé",
    address: "Rua das Garças, 3163",
    city: "Campo Grande – MS",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_2,
    lat: -20.4485561,
    lng: -54.5858249,
    mapsUrl: "https://www.google.com/maps?q=-20.4485561,-54.5858249",
  },
];

export default function Footer() {
  const [openStudio, setOpenStudio] = useState<string | null>(null);

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand — 2 colunas */}
          <div className="lg:col-span-2">
            {/* Logo e Nome da Marca */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative select-none"
            >
              <div className="absolute inset-y-0 left-0 z-0 flex items-center pointer-events-none opacity-40 group-hover:opacity-50 transition-opacity duration-300">
                <Image
                  src={Icon}
                  width={80}
                  height={80}
                  alt="Premium Personal"
                  priority
                  className="rounded-xl bg-brand-accent/10 object-cover opacity-60"
                />
              </div>
              {/* Texto visível em todas as telas, se adequando ao espaço */}
              <div className="relative z-10 -left-1 flex flex-col justify-center mix-blend-plus-lightning">
                <span className="block font-mono pl-5 text-[9px] uppercase tracking-[0.25em] text-zinc-300 leading-none">
                  Premium
                </span>
                <span className="block font-allura text-2xl tracking-wider text-white group-hover:text-zinc-300 transition-colors leading-none -mt-1">
                  Personal
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400 pt-3">
              Do campo à sua mesa, levamos o melhor da natureza com qualidade,
              carinho e preços acessíveis. Cuidar de você é a nossa missão.
            </p>
            {/* Social */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
              >
                <BsInstagram
                  size={22}
                  className="text-gray-400 transition-colors group-hover:text-brand-accent"
                />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
              >
                <FaFacebook
                  size={22}
                  className="text-gray-400 transition-colors group-hover:text-brand-accent"
                />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
              >
                <Music2
                  size={22}
                  className="text-gray-400 transition-colors group-hover:text-brand-accent"
                />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
              >
                <SiX
                  size={20}
                  className="text-gray-400 transition-colors group-hover:text-brand-accent"
                />
              </a>
            </div>
          </div>

          {/* Links — 1 coluna */}
          <div>
            <h4 className="mb-5 font-semibold text-white">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/studio", label: "Studio" },
                { href: "/sobre", label: "Sobre a Academia" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white text-sm text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nossos Studios com Leaflet — 2 colunas */}
          <div className="lg:col-span-2">
            <h4 className="mb-5 font-semibold text-white">Nossos Studios</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {studios.map((studio) => (
                <div key={studio.label} className="space-y-3">
                  {/* Label do studio */}
                  <p className="text-[10px] font-semibold tracking-widest text-white/50 uppercase">
                    {studio.label}
                  </p>

                  {/* Mini-mapa interativo */}
                  <StudioMap
                    lat={studio.lat}
                    lng={studio.lng}
                    name={studio.label}
                    googleMapsUrl={studio.mapsUrl}
                  />

                  {/* Informações do studio */}
                  <div className="rounded-sm border border-zinc-600 p-4">
                    {/* <span>{studio.label}</span> */}

                    <button
                      onClick={() =>
                        setOpenStudio(
                          openStudio === studio.label ? null : studio.label,
                        )
                      }
                      className="group flex w-full items-center justify-between py-0 text-center"
                    >
                      <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                        Detalhes do Studio
                      </span>

                      <svg
                        className={`h-4 w-4 text-zinc-200 transition-transform duration-300 ${
                          openStudio === studio.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openStudio === studio.label
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-3 pt-3">
                        <div className="space-y-1 text-sm text-zinc-300">
                          <p>{studio.address}</p>
                          <p className="text-xs text-zinc-300">{studio.city}</p>
                        </div>

                        <a
                          href={buildWhatsAppUrl(
                            studio.whatsapp,
                            `Olá! Vim pelo site e gostaria de falar com a ${studio.label}.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#111]
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-white
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:bg-[#111]/40
                          "
                        >
                          Falar no WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Academia&Studio Premium Personal. Todos
            os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Campo Grande – MS &nbsp;·&nbsp;{" "}
            <span className="text-gray-400">© OpenStreetMap contributors</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
