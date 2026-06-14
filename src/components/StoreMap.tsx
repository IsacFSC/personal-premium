"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";

interface StoreMapProps {
  lat: number;
  lng: number;
  name: string;
  googleMapsUrl: string;
  containerClassName?: string;
}

export default function StoreMap({
  lat,
  lng,
  name,
  googleMapsUrl,
  containerClassName = "h-32",
}: StoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [lat, lng],
        zoom: 15,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        keyboard: false,
        attributionControl: false,
      });

      mapRef.current = map;

      // Tiles CartoDB Voyager — ruas legíveis, tons neutros elegantes
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 19 },
      ).addTo(map);

      // Marcador customizado com pulse animado na cor da marca
      const icon = L.divIcon({
        html: `
          <div class="gs-pin">
            <div class="gs-pin__core"></div>
            <div class="gs-pin__ring"></div>
            <div class="gs-pin__ring gs-pin__ring--delay"></div>
          </div>`,
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([lat, lng], { icon }).addTo(map);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [lat, lng]);

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${name} no Google Maps`}
      className="group relative isolate block"
    >
      {/* Container do mapa */}
      <div
        ref={containerRef}
        role="img"
        aria-label={`Mapa da localização: ${name}`}
        className={`group-hover:ring-brand-accent/50 group-hover:shadow-brand-accent/20 w-full overflow-hidden rounded-none ring-1 ring-white/10 transition-all duration-300 group-hover:shadow-lg ${containerClassName}`}
      />

      {/* Overlay CTA no hover */}
      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-colors duration-300 group-hover:bg-black/45">
        <span className="flex translate-y-2 items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-semibold text-gray-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Ver no Google Maps
        </span>
      </div>
    </a>
  );
}
