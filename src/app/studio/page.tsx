"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StudioArea, studioAreas } from "@/lib/studioArea";
import Image from "next/image";
import Icon from "../../../public/assets/academia.png";
import PremiumPulse from "@/components/PremiumPulse";

console.log("studioAreas:", studioAreas);

export default function StudioSection() {
  return (
    <section className="mx-auto py-24 bg-brand-dark text-white overflow-hidden">
      <PremiumPulse />
      <div className="text-center mb-12 flex flex-col grid-cols-2 justify-center">
        <div className="relative flex items-center gap-3 group select-none">
          {/* Imagem de fundo */}
          <div className="absolute inset-0 lg:top-32 flex items-center justify-center pointer-events-none z-0">
            <Image
              src={Icon}
              width={340}
              height={340}
              alt="Premium Personal"
              priority
              className="object-cover opacity-15 group-hover:opacity-25 transition-all duration-500"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex items-center -top-8 lg:top-4 mx-auto flex-col grid-cols-1 gap-3">
            <h1 className="sm:text-6xl text-4xl mx-auto font-bold font-inter text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-amber-200 to-zinc-400 tracking-wider">
              Studio
            </h1>

            <div className="flex flex-col justify-center">
              <span className="block font-mono pl-6 relative sm:left-3 top-1 lg:left-4 lg:top-5 text-sm sm:text-4xl uppercase tracking-[0.30em] text-olive-400 leading-none">
                Premium
              </span>

              <span className="block font-allura text-[40px] sm:text-8xl tracking-wider text-white transition-colors leading-none -mt-1">
                Personal
              </span>
            </div>
          </div>
        </div>

        <p className="relative z-10 text-gray-200 -mt-8 sm:mt-0 text-[22px] sm:text-4xl font-allura sm:tracking-wider">
          Experiência e sofisticação na vida fitness.
        </p>
      </div>

      {/* Removido o grid tradicional para permitir que o scroll individual de cada bloco funcione melhor verticalmente */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto px-6">
        {studioAreas?.map((area) => (
          <StudioCardKey key={area.id} area={area} />
        ))}
      </div>
    </section>
  );
}

// Componente isolado para gerenciar o scroll de cada item individualmente
function StudioCardKey({ area }: { area: StudioArea }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitora o progresso do scroll especificamente deste container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efeito Parallax da Imagem: Move a imagem verticalmente (-10% a 10%) criando profundidade
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Efeito Parallax do Texto: Move mais devagar que a imagem para dar efeito de camadas (layers)
  const yText = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  // Efeito de Opacidade/Fade no texto conforme entra na tela
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-12 items-center py-2 border-b border-white/10 last:border-none"
    >
      {/* Camada 1: Container da Imagem com Overflow Hidden */}
      <div className="relative bg-white overflow-hidden rounded-[20px] aspect-video w-full isolate">
        {area.mediaType === "image" ? (
          <motion.img
            src={area.media}
            alt={area.title}
            style={{ y: yImage, scale: 1.2 }}
            className="absolute inset-0 w-full h-[120%] object-cover origin-center"
          />
        ) : (
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            style={{ y: yImage, scale: 1.2 }}
            className="absolute inset-0 w-full h-[120%] object-cover origin-center"
          >
            <source src={area.media} type="video/mp4" />
          </motion.video>
        )}
      </div>

      {/* Camada 2: Bloco de Texto em outra camada de velocidade */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="text-left md:pl-6"
      >
        <span className="font-national-park tracking-[0.3em] uppercase text-brand-muted block text-sm">
          {area.badge}
        </span>

        <h2 className="mt-4 font-cormorant text-2xl sm:text-5xl lg:text-6xl text-white leading-tight">
          {area.title}
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-brand-muted">
          {area.description}
        </p>
      </motion.div>
    </div>
  );
}
