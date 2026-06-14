import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppStoreButton from "@/components/WhatsAppStoreButton";
import React from "react";
import { BiCommentDots } from "react-icons/bi";

const features = [
  {
    // Ícone de uma Coroa Minimalista (Soberania, Exclusividade, Status)
    icon: (
      <svg
        className="h-6 w-6 text-amber-500/90"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747c.224-.863-.385-1.728-1.282-1.728H4.566c-.897 0-1.506.865-1.282 1.728A9.004 9.004 0 0 0 12 21ZM4.566 12.522l1.517-5.31c.224-.785 1.054-1.212 1.74-.897L12 8.25l4.177-1.935c.686-.315 1.516.112 1.74.897l1.517 5.31"
        />
      </svg>
    ),
    title: "Ambiente Ultra-Privado",
    description:
      "Sem filas, sem distrações e sem aglomerações. O espaço ideal para empresários manterem o foco absoluto e a privacidade total durante o treino.",
  },
  {
    // Ícone de um Escudo Linha Fina (Proteção, Resiliência, Descarga Oculta)
    icon: (
      <svg
        className="h-6 w-6 text-amber-500/90"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    title: "Descarga de Stress Eficiente",
    description:
      "Transforme a pressão do mundo dos negócios em potência física. Estrutura projetada para esvaziar a mente e forjar o corpo.",
  },
  {
    // Ícone de Duas Chaves Cruzadas de Concierge (Serviço de Recepção de Hotel 5 Estrelas)
    icon: (
      <svg
        className="h-6 w-6 text-amber-500/90"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
        />
      </svg>
    ),
    title: "Concierge de Performance",
    description:
      "Treinadores de elite que adaptam sua rotina de treinos ao seu calendário de reuniões e viagens, otimizando cada minuto do seu dia.",
  },
  {
    // Ícone de Linhas Geométricas / Diamante Retilinear (Arquitetura e Infraestrutura High-End)
    icon: (
      <svg
        className="h-6 w-6 text-amber-500/90"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9"
        />
      </svg>
    ),
    title: "Infraestrutura High-End",
    description:
      "Equipamentos importados com biomecânica avançada, vestiários padrão spa internacional e amenities de marcas de luxo.",
  },
];

const stats = [
  { value: "100%", label: "Foco em Alta Performance" },
  { value: "2", label: "Studios VIP em Campo Grande" },
  { value: "Restrito", label: "Vagas Limitadas por Ano" },
  {
    // Substituído o texto por um design visual de 5 estrelas douradas e minimalistas
    value: (
      <span className="flex justify-center gap-0.5 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
    ),
    label: "Padrão de Hospitalidade",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        {/* Background Único com Art Direction */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            <source src="/assets/video/video-fundo.mp4" type="video/mp4" />
          </video>

          {/* Overlay lateral */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

          {/* Overlay vertical */}
          <div className="absolute inset-0 bg-linear-to-b from-brand-dark via-black/50 to-black/70" />
        </div>

        {/* Decorative elements - Escondidos no mobile para limpar o visual */}
        <div className="bg-brand-accent/10 absolute top-20 right-10 h-72 w-72 rounded-full blur-3xl hidden md:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-center md:text-left">
            {" "}
            {/* Centralizado no mobile */}
            {/* Badge: Menor no mobile para não ocupar 3 linhas */}
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-none border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md md:text-sm">
              <span className="bg-brand-secondary h-2 w-2 animate-pulse rounded-full" />
              Alta performance e qualidade
            </div>
            <h1 className="font-display animate-slide-up mb-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
              Treinamento <br className="hidden md:block" />
              <span className="text-olive-400 font-display">Personalizado</span>
            </h1>
            <p className="animate-slide-up font-inter mx-auto mb-8 max-w-lg text-base leading-relaxed text-gray-50 md:mx-0 md:text-xl">
              Metodologia exclusiva e profissionais especializados para
              transformar sua saúde, performance e qualidade de vida.
              <span className="hidden sm:inline">
                {" "}
                Experiência e exclusividade.
              </span>
            </p>
            {/* Ações: Empilhadas no mobile, lado a lado no desktop */}
            <div className="animate-slide-up flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/studio"
                className="btn-primary flex w-fit md:w-auto mx-auto md:mx-0 h-14 items-center justify-center gap-2 rounded-xl text-lg md:h-12 md:px-8 md:text-base"
                // Garantia de navegação mesmo com JS desativado
              >
                Conhecer Studio
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <WhatsAppStoreButton
                label="Solicitar atendimento"
                className="flex h-14 items-center justify-center rounded-xl border border-white/30 bg-white/5 text-lg font-semibold text-white backdrop-blur-md md:h-12 md:px-8 md:text-base"
                // Garantia de navegação mesmo com JS desativado
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 pt-5 shadow-xl shadow-black/20 px-70">
          <span className="text-sm font-medium tracking-[0.3em] text-white/80 rounded-tl-4xl rounded-br-4xl px-2.5 uppercase backdrop-blur-3xl shadow-lg shadow-black/30">
            Explore
          </span>
          <div className="flex flex-col items-center -space-y-1.5">
            <svg
              className="animate-chevron-1 text-white/90 h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              className="animate-chevron-2 text-white/80 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              className="animate-chevron-3 text-white/70 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-brand-primary py-8 text-white sm:py-10 relative">
        {/* Overlay lateral */}
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-transparent" />

        {/* Overlay vertical */}
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-black/50 to-black/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 items-baseline text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <p className="font-display text-brand-light text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-brand-light">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES / DIFERENCIAIS ===== */}
      <section className="relative overflow-hidden bg-zinc-950 py-8 sm:py-24 lg:py-28 border-t border-zinc-900">
        {/* Iluminação de fundo sutil vindo do topo (Efeito Luxury Noir) */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-96 w-full max-w-3xl bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 bg-zinc-900/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center sm:mb-20">
            {/* Badge Retilinear */}
            <div className="border-zinc-800 bg-zinc-900/40 text-zinc-400 mb-4 inline-flex items-center gap-2 border px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase rounded-none backdrop-blur-md">
              <span className="h-1.5 w-1.5 bg-amber-500 rounded-none animate-pulse" />
              Padrão Ultra-Exclusive
            </div>

            {/* Título de Alto Impacto */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl uppercase font-sans">
              O Santuário da{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-amber-200 to-zinc-400">
                Alta Performance
              </span>
            </h2>

            <p className="mt-4 mx-auto max-w-2xl text-base md:text-lg text-zinc-500 font-light leading-relaxed">
              Não somos uma academia comum. Somos um clube privado focado em
              ganho de tempo, foco inabalável e blindagem mental para quem
              comanda grandes negócios.
            </p>
          </AnimatedSection>

          {/* Grid de Diferenciais */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <AnimatedSection
                key={i}
                delay={i * 100}
                className="group hover:border-amber-500/30 hover:shadow-black/80 relative overflow-hidden border border-zinc-900 bg-zinc-900/20 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl rounded-none"
              >
                {/* Linha de acento dourada/âmbar no rodapé do card — aparece no hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber-500/80 transition-all duration-500 group-hover:w-full" />

                {/* Container do ícone (Sem cantos arredondados, integrado ao SVG) */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-zinc-800 bg-zinc-900/60 group-hover:bg-zinc-900 group-hover:border-amber-500/50 transition-colors duration-300 rounded-none">
                  {/* Como alteramos a constante para conter o elemento SVG, renderizamos diretamente */}
                  {feature.icon}
                </div>

                {/* Título do Card */}
                <h3 className="mb-3 font-semibold text-white tracking-wide text-lg">
                  {feature.title}
                </h3>

                {/* Descrição do Card */}
                <p className="text-sm leading-relaxed text-zinc-400 font-light">
                  {feature.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="relative overflow-hidden bg-zinc-950 py-8 lg:py-20 sm:py-28 border-t border-zinc-900">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Bloco da Esquerda: Vídeo e Card Flutuante */}
            <AnimatedSection direction="left" className="relative">
              {/* Adicionado rounded-none para a estética de luxo e borda discreta */}
              <div className="relative h-80 overflow-hidden rounded-none border border-zinc-800 bg-zinc-900 shadow-2xl lg:h-125">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover grayscale opacity-80"
                >
                  <source src="/brand/premium.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
                {/* Overlay escuro para dar profundidade e contraste */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>

              {/* Floating card — Design de Grife (Preto e Dourado) */}
              <div className="absolute -right-4 -bottom-4 hidden max-w-xs border border-zinc-800 bg-zinc-950 p-6 shadow-2xl shadow-black sm:block rounded-none">
                <p className="font-mono text-amber-500 text-3xl font-bold tracking-wider">
                  10+ Anos
                </p>
                <p className="text-xs font-medium text-zinc-400 mt-1 uppercase tracking-wider leading-relaxed">
                  Forjando mentes e corpos resilientes em Campo Grande
                </p>
              </div>
            </AnimatedSection>

            {/* Bloco da Direita: Textos de Impacto e Links */}
            <AnimatedSection direction="right">
              {/* Badge Retilinear Premium */}
              <div className="border-zinc-800 bg-zinc-900/40 text-zinc-400 mb-6 inline-flex items-center gap-2 border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] rounded-none backdrop-blur-md">
                <span className="h-1.5 w-1.5 bg-amber-500 rounded-none animate-pulse" />
                A Linhagem Premium
              </div>

              {/* Título com posicionamento de liderança */}
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl uppercase font-sans mb-6">
                Nascemos para quem <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 via-amber-200 to-zinc-400">
                  exige a excelência
                </span>
              </h2>

              {/* Copywriting focado em empresários e descarga de stress */}
              <p className="mb-4 leading-relaxed text-zinc-400 font-light text-base md:text-lg">
                O Premium Personal Studio não nasceu para ser apenas mais uma
                opção no mercado. Surgimos da necessidade de entregar um refúgio
                de alta performance para líderes, empresários e pessoas de
                personalidade forte que não têm tempo a perder.
              </p>

              <p className="mb-8 leading-relaxed text-zinc-400 font-light text-base md:text-lg">
                Aqui, o treino é um compromisso estratégico. Criamos um ambiente
                restrito, sem filas, focado inteiramente na sua descarga de
                estresse diária e na evolução da sua potência física. Sua mente
                comanda grandes negócios; seu corpo precisa sustentar esse
                poder.
              </p>

              {/* Ações com botões em formato retilíneo */}
              <div className="sm:flex flex-wrap block gap-4 space-y-2.5 sm:space-y-0 mx-auto items-center justify-center">
                <Link
                  href="/sobre"
                  className="block text-center px-6 py-3 text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all rounded-none"
                >
                  Nosso Manifesto
                </Link>
                <Link
                  href="/studio"
                  className="block items-center text-center gap-2 rounded-none border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
                >
                  Conhecer o Studio
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== CTA WHATSAPP ===== */}
      <section className="relative overflow-hidden bg-zinc-950 py-8 lg:py-20 sm:py-28 border-t border-zinc-900">
        {/* Background sutil de luxo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-80" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            {/* Badge Retilinear Premium */}
            <span className="mb-8 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase rounded-none backdrop-blur-md">
              <BiCommentDots className="h-4 w-4 text-amber-500" />
              <span>Acesso estritamente reservado</span>
            </span>

            {/* Título de Impacto (Resiliência e Comando) */}
            <h2 className="font-sans font-bold tracking-tight mb-6 text-3xl text-white sm:text-4xl lg:text-5xl uppercase">
              Forje o seu momento <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-100 via-amber-200 to-zinc-400">
                de foco absoluto
              </span>
            </h2>

            {/* Descrição focada em empresários e descarga de estresse */}
            <p className="mx-auto mb-12 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed font-light">
              Deixe a pressão do mercado corporativo do lado de fora. Entre em
              contato com nosso Concierge e garanta sua vaga exclusiva para
              transformar estresse diário em pura potência física.
            </p>

            {/* Botão de Loja Refatorado */}
            <WhatsAppStoreButton
              label="Solicitar Acesso Exclusivo"
              className="px-10 py-5 text-sm font-bold uppercase tracking-widest bg-white text-black hover:bg-zinc-200 transition-all rounded-none shadow-2xl shadow-black/80"
              placement="up"
              align="center"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
