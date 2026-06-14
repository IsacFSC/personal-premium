"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSlider() {
  const slides = [
    {
      id: 1,
      badge: "Exclusivo",
      title: "Criado para quem não tem tempo para o comum.",
      subtitle: "Um estúdio privado de alta performance em Campo Grande.",
      media: "/assets/studio/weight.jpg",
      mediaType: "image",
    },
    {
      id: 2,
      badge: "Privacidade",
      title: "O silêncio que potencializa resultados.",
      subtitle: "Sem filas, sem distrações, sem interrupções.",
      media: "/assets/studio/gym.jpg",
      mediaType: "image",
    },
    {
      id: 3,
      badge: "Performance",
      title: "Cada detalhe foi pensado para sua evolução.",
      subtitle: "Treinamento personalizado em um ambiente controlado.",
      media: "/assets/studio/muscle.jpg",
      mediaType: "image",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* fundo premium */}
      <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/5 to-black/20 z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/5 via-transparent to-black/15 z-10" />

      <div className="mt-10 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
                absolute inset-0 transition-all duration-1000 ease-out
                ${
                  current === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110 blur-[2px]"
                }
              `}
          >
            {slide.mediaType === "image" && (
              <Image
                fill
                priority={index === 0}
                src={slide.media}
                alt={slide.title}
                className="object-cover animate-[kenburns_10s_ease-out_forwards] will-change-transform"
              />
            )}
            {slide.mediaType === "video" && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={slide.media} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>

      {/* ECG subtle
      <div className="absolute inset-0 opacity-20 animate-ecg bg-[url('/ecg.svg')] bg-repeat-x" /> */}

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <span
            className="
              inline-flex items-center
              border border-white/15
              bg-white/5
              backdrop-blur-md
              px-4 py-2
              text-xs uppercase
              tracking-[0.25em]
              text-brand-light
            "
          >
            {slides[current].badge}
          </span>
          <h2
            className="
            mt-6
            font-display
            text-5xl
            md:text-7xl
            text-white
            leading-tight
            bg-white/5
            backdrop-blur-xs
          "
          >
            {slides[current].title}
          </h2>
          <p
            className="
            mt-6
            max-w-xl
            text-lg
            md:text-xl
            text-white/80
          "
          >
            {slides[current].subtitle}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                h-0.5
                transition-all
                duration-500
                ${current === i ? "w-14 bg-white" : "w-6 bg-white/30"}
              `}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10">
          <div key={current} className="h-full bg-white animate-progress" />
        </div>
      </div>
    </section>
  );
}
