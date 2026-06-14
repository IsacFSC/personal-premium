"use client";

import { useState, useEffect, useRef } from "react";
import {
  buildWhatsAppUrl,
  WHATSAPP_STORE_1,
  WHATSAPP_STORE_2,
} from "@/lib/whatsapp";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const stores = [
  {
    label: "Studio Vilas Boas",
    sublabel: "Região Vilas Boas",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_1,
  },
  {
    label: "Studio Santa Fé",
    sublabel: "Região Santa Fé",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_2,
  },
];

interface Props {
  /** Texto exibido no botão */
  label?: string;
  /** Classes extras para o botão */
  className?: string;
  /** Direção em que o balão abre. "up" (padrão) = acima; "down" = abaixo */
  placement?: "up" | "down";
  /** Alinhamento horizontal do balão. "center" (padrão) | "right" */
  align?: "center" | "right";
}

export default function WhatsAppStoreButton({
  label = "Conhecer o studio",
  className = "",
  placement = "up",
  align = "center",
}: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isUp = placement === "up";
  const isCenter = align === "center";

  const balloonPos = isUp ? "bottom-full mb-3" : "top-full mt-3";
  const balloonAlign = isCenter ? "left-1/2 -translate-x-1/2" : "right-0";

  // Suavização do slide alterada para a paleta escura (Luxury)
  const balloonSlide = open
    ? "pointer-events-auto translate-y-0 opacity-100"
    : `pointer-events-none ${isUp ? "translate-y-2" : "-translate-y-2"} opacity-0`;

  // Seta de indicação do balão (agora com cor sólida escura zinc-950)
  const arrowPos = isUp ? "-bottom-1.75" : "-top-1.75";
  const arrowBorder = isUp ? "border-r border-b" : "border-l border-t";
  const arrowAlign = isCenter ? "left-1/2 -translate-x-1/2" : "right-5";

  return (
    <div
      ref={wrapperRef}
      className="relative inline-flex flex-col items-center w-full lg:w-auto"
    >
      {/* Balão Seletor de Unidades (Estética Dark Mode / Luxo) */}
      <div
        className={`absolute z-50 ${balloonPos} ${balloonAlign} w-64 overflow-hidden rounded-none border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/90 transition-all duration-200 ${balloonSlide}`}
      >
        {/* Header Balão */}
        <div className="border-b border-zinc-900 bg-zinc-900/30 px-4 py-2.5">
          <p className="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
            Selecione uma Unidade VIP
          </p>
        </div>

        {/* Lista de Studios */}
        {stores.map((store) => (
          <a
            key={store.label}
            href={buildWhatsAppUrl(
              store.whatsapp,
              `Olá! Vim através do site da Premium Luxury — Unidade ${store.label}. Gostaria de solicitar informações sobre os planos de alta performance.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-zinc-900"
          >
            {/* Ícone sem cantos arredondados */}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors group-hover:bg-white group-hover:text-black group-hover:border-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={WA_PATH} />
              </svg>
            </span>

            <div className="min-w-0 text-left">
              <p className="text-xs font-semibold text-zinc-200 tracking-wide group-hover:text-white">
                {store.label}
              </p>
              <p className="truncate text-[10px] text-zinc-500">
                {store.sublabel} · {store.phone}
              </p>
            </div>

            {/* Seta interna minimalista */}
            <svg
              className="ml-auto h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        ))}
        <div className="h-1" />

        {/* Seta Indicadora Externa do Balão */}
        <span
          className={`absolute ${arrowPos} ${arrowBorder} ${arrowAlign} h-3.5 w-3.5 rotate-45 border-zinc-800 bg-zinc-950`}
        />
      </div>

      {/* Botão de Disparo */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`btn-whatsapp justify-center w-full rounded-none tracking-wider font-semibold uppercase ${className}`}
      >
        <svg
          className="h-4 w-4 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={WA_PATH} />
        </svg>
        <span>{label}</span>
      </button>
    </div>
  );
}
