import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import StudioCard from "@/components/StudioCard";
import { studios } from "@/data/studios";
import { SiX } from "react-icons/si";
import { Music2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Contato | Studio Premium",
  description:
    "Agende uma conversa privada e descubra uma nova forma de treinar.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-dark pt-8 lg:pt-20 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-20">
        {/* Waves Background */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
          >
            <path
              d="M0 400C240 300 480 500 720 400C960 300 1200 500 1440 400"
              stroke="rgba(245,158,11,0.15)"
              strokeWidth="2"
              fill="none"
              className="animate-[wave_12s_ease-in-out_infinite]"
            />

            <path
              d="M0 500C240 400 480 600 720 500C960 400 1200 600 1440 500"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              fill="none"
              className="animate-[wave_16s_ease-in-out_infinite_reverse]"
            />

            <path
              d="M0 600C240 500 480 700 720 600C960 500 1200 700 1440 600"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              fill="none"
              className="animate-[wave_20s_ease-in-out_infinite]"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <span className="mb-2 block w-fit mx-auto border border-white/10 bg-white/5 px-2 py-1.5 text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-300">
              Atendimento Exclusivo
              <span className="ml-1 items-center text-brand-secondary h-2.5 w-2.5 rounded-full animate-pulse">•</span>
              <span className="ml-1">Campo Grande</span>
            </span>

            <h1 className="text-2xl font-bold lg:inline-flex leading-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-amber-200 to-zinc-400 sm:text-3xl lg:text-4xl">
              Entre em Contato
              <span className="hidden lg:inline font-extrabold pl-2">|</span>
            </h1>

            <span className="font-mono lg:inline-flex px-2 tracking-[0.2em] uppercase text-xl sm:text-4xl text-zinc-300">
              Premium
            </span>

            <span className="font-allura text-3xl sm:text-6xl text-zinc-300">
              Experience
            </span>

            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400">
              Escolha a unidade mais conveniente para você e descubra uma experiência
              de treinamento personalizada, discreta e focada em resultados.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STUDIOS */}

      <section className="bg-black/40 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {studios.map((studio, index) => (
              <AnimatedSection key={studio.label} delay={index * 150}>
                <StudioCard studio={studio} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-brand-accent">
                  Premium Personal Studio
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white">
                  Conecte-se com nossa comunidade
                </h2>

                <p className="mt-4 text-gray-400">
                  Conteúdo exclusivo sobre treinamento personalizado,
                  transformação física, saúde, longevidade e performance.
                </p>
              </div>

              <div className="flex justify-center gap-2 lg:justify-end">
                {/* ícones */}
                <div className="mt-10 flex justify-around gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-14 w-14 items-center justify-around rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
