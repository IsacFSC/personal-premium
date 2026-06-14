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
    <div className="bg-brand-dark pt-20 text-white">
      {/* HERO */}

      <section className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <span className="mb-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm">
              📍 Nossos Studios
            </span>

            <h1 className="font-inter text-4xl font-bold sm:text-6xl">
              Atendimento Exclusivo
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Estamos em dois endereços para atender você com exclusividade.
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
