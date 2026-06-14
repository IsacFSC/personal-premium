import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import AboutSlider from "@/components/AboutSlider";
import WhatsAppStoreButton from "@/components/WhatsAppStoreButton";

export const metadata: Metadata = {
  title: "Sobre | Premium Personal Studio",
  description:
    "Conheça a história e filosofia do Premium Personal Studio — um ambiente privado de alta performance criado para empresários e profissionais que valorizam foco, discrição e excelência.",
};

const values = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-brand-light"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z"
        />
      </svg>
    ),
    title: "Excelência",
    description:
      "Cada detalhe da experiência é pensado para evolução contínua e alto padrão de entrega.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-brand-light"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
        />
      </svg>
    ),
    title: "Privacidade",
    description:
      "Ambiente reservado para quem valoriza discrição, foco e tranquilidade total.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-brand-light"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
        />
      </svg>
    ),
    title: "Performance",
    description:
      "Treinamentos estruturados para gerar resultado físico e mental consistente.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-brand-light"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0"
        />
      </svg>
    ),
    title: "Relacionamento",
    description: "Atendimento próximo, humano e totalmente individualizado.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-zinc-950 text-zinc-200">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 mx-auto">
        <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <span className="mb-2 block items-center w-fit justify-center mx-auto gap-2 border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] sm:text-[10px] font-medium tracking-[0.25em] uppercase text-zinc-300">
              Studio Privado • Campo Grande
            </span>

            <h1 className="text-2xl font-bold lg:inline-flex leading-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-amber-200 to-zinc-400 sm:text-3xl lg:text-4xl">
              Nossa História
              <span className="hidden lg:inline font-extrabold pl-2">|</span>
            </h1>

            <span className="font-mono lg:inline-flex px-2 tracking-[0.2em] uppercase text-xl sm:text-4xl text-zinc-300">
              Premium
            </span>
            <span className="font-allura text-3xl sm:text-6xl text-zinc-300">
              Personal
            </span>

            {/* <p className="mx-auto max-w-full sm:text-lg leading-relaxed text-zinc-400">
              Criado para empresários e profissionais que valorizam tempo, foco
              e desempenho. Um ambiente onde o treino se torna estratégia de
              vida.
            </p> */}
          </AnimatedSection>
        </div>
        <AboutSlider />
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-zinc-950 py-16 sm:py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <span className="mb-4 block text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500">
                Origem
              </span>

              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Onde nasceu a visão
              </h2>

              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  O Premium Personal Studio nasceu da percepção de que
                  profissionais de alta responsabilidade precisam de um ambiente
                  completamente diferente de uma academia tradicional.
                </p>

                <p>
                  Excesso de pessoas, distrações constantes e ambientes
                  impessoais não combinam com quem toma decisões importantes
                  diariamente.
                </p>

                <p>
                  Criamos um espaço reservado, com atendimento individual e foco
                  total em performance física e mental.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="relative h-80 overflow-hidden border border-white/10 bg-zinc-900 lg:h-115">
                <Image
                  src="/assets/studio/academy.jpg"
                  alt="Premium Personal Studio"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              <div className="absolute -top-6 -left-6 hidden border border-white/10 bg-zinc-950 p-5 sm:block">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  Anos de evolução
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="bg-zinc-950 py-16 sm:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Filosofia de Treino
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Performance não é sobre intensidade. É sobre precisão,
              consistência e controle.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection
                key={i}
                delay={i * 100}
                className="border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
              >
                <span className="mb-3 block text-2xl">{v.icon}</span>
                <h3 className="mb-2 font-semibold text-white">{v.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {v.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-zinc-950 py-2 lg:py-16 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Entre no ambiente certo
            </h2>

            <p className="mt-4 text-zinc-400">
              Fale com nosso atendimento e conheça o Premium Personal Studio.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppStoreButton
                label="Solicitar Atendimento"
                className="w-fit text-center py-4 mx-2 text-sm font-semibold uppercase tracking-wider bg-white text-black rounded-none"
                placement="up"
                align="center"
              />
              <Link
                href="/studio"
                className="border border-white/15 px-6 py-3 text-white font-semibold uppercase tracking-wider hover:bg-white/5 transition"
              >
                Conhecer Studio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
