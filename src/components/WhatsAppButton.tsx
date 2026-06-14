"use client";

import { useState, useEffect, useRef } from "react";
import {
  buildWhatsAppUrl,
  WHATSAPP_STORE_1,
  WHATSAPP_STORE_2,
} from "@/lib/whatsapp";

const WA_ICON = (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
);

const stores = [
  {
    label: "Studio Vilas Boas",
    sublabel: "Região Vilas Boas",
    phone: "(67) 99999-9999",
    whatsapp: WHATSAPP_STORE_1,
  },
  {
    label: "Studio Santa Fé",
    sublabel: "Região Santa Fé",
    phone: "(67) 9 9999-9999",
    whatsapp: WHATSAPP_STORE_2,
  },
];

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  placement?: "up" | "down";
  align?: "left" | "right" | "center";
  isFloating?: boolean; // Nova propriedade para controlar se ele vira o botão redondo flutuante da tela
}

export default function WhatsAppButton({
  label = "Solicitar Atendimento",
  className = "",
  placement = "down",
  align = "right",
  isFloating = false,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(!isFloating);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFloating) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isFloating]);

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

  // Alinhamentos dinâmicos do menu dropdown baseado nas props
  const alignmentClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }[align];

  const placementClasses =
    placement === "up" ? "bottom-full mb-3" : "top-full mt-3";

  // Se for o botão flutuante de canto de tela
  if (isFloating) {
    return (
      <div
        ref={wrapperRef}
        className={`fixed right-6 bottom-6 z-[9999] flex flex-col items-end gap-3 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Menu Dropdown Flutuante Premium */}
        <div
          className={`z-50 flex w-72 flex-col gap-1 overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black/80 transition-all duration-300 bottom-full mb-3 absolute right-0 ${
            open
              ? "max-h-60 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <div className="border-b border-zinc-900 px-4 py-3 bg-zinc-900/40">
            <p className="text-[10px] font-bold tracking-[0.15em] text-zinc-400 uppercase">
              Selecione a Unidade VIP
            </p>
          </div>
          {stores.map((store) => (
            <a
              key={store.label}
              href={buildWhatsAppUrl(
                store.whatsapp,
                `Olá! Vim pelo site da Premium Personal e gostaria de agendar uma visita na ${store.label}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-zinc-900"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-black">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {WA_ICON}
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white tracking-wide">
                  {store.label}
                </p>
                <p className="truncate text-[11px] text-zinc-500">
                  {store.sublabel}
                </p>
                <p className="truncate text-[11px] text-zinc-500">
                  {store.phone}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Botão de Performance Flutuante (Preto, Quadrado, Luxo) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Solicitar atendimento"
          aria-expanded={open}
          className="relative flex h-14 w-14 items-center justify-center bg-zinc-950 text-white border border-zinc-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-zinc-900"
        >
          {!open && (
            <span className="absolute inset-0 animate-ping bg-white/5" />
          )}
          <svg
            className="h-6 w-6"
            fill={open ? "none" : "currentColor"}
            stroke={open ? "currentColor" : "none"}
            strokeWidth={open ? 1.5 : 0}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              WA_ICON
            )}
          </svg>
        </button>
      </div>
    );
  }

  // Se for o botão embutido na Navbar (Layout Reto e Sofisticado)
  return (
    <div
      ref={wrapperRef}
      className="relative inline-block text-left w-full lg:w-auto"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`btn-whatsapp w-full lg:w-auto ${className}`}
      >
        <span>{label}</span>
        <svg
          className={`h-4 w-4 shrink-0 opacity-70 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown da Navbar */}
      <div
        className={`absolute ${alignmentClasses} ${placementClasses} z-100 flex w-72 flex-col gap-1 overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl transition-all duration-300 ${
          open
            ? "max-h-60 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="border-b border-zinc-900 px-4 py-2.5 bg-zinc-900/30">
          <p className="text-[9px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Escolha a Unidade
          </p>
        </div>

        {stores.map((store) => (
          <a
            key={store.label}
            href={buildWhatsAppUrl(
              store.whatsapp,
              `Olá! Estou no site da Premium Luxury e quero falar com a unidade ${store.label}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-zinc-900"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-zinc-900 text-zinc-400 group-hover:bg-white group-hover:text-black transition-colors">
              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {WA_ICON}
              </svg>
            </span>
            <div className="min-w-0 text-left">
              <p className="text-xs font-semibold text-zinc-200 tracking-wide group-hover:text-white">
                {store.label}
              </p>
              <p className="truncate text-[10px] text-zinc-500">
                {store.sublabel}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
