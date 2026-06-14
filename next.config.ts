import type { NextConfig } from "next";

const securityHeaders = [
  // Impede que o site seja embutido em iframes (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Impede que o browser adivinhe o MIME type (MIME sniffing attacks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Controla o referrer enviado em navegações externas
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desativa acesso a câmera, microfone e outros recursos sensíveis
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), browsing-topics=()",
  },
  // Content Security Policy: define origens confiáveis para cada tipo de recurso
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js injeta scripts inline para hidratação (SSR → CSR)
      "script-src 'self' 'unsafe-inline'",
      // Tailwind e estilos inline + fontes do Google
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fontes do Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Imagens: local, data URIs, blob (Leaflet), Unsplash e tiles CartoDB
      "img-src 'self' data: blob: https://images.unsplash.com https://*.basemaps.cartocdn.com",
      // Requisições fetch/XHR apenas para a própria origem
      "connect-src 'self'",
      // Nenhum iframe de terceiros
      "frame-src 'none'",
      // Proíbe plugins (Flash, Java applets, etc.)
      "object-src 'none'",
      // Impede que scripts alterem a base URL da página
      "base-uri 'self'",
      // Formulários só podem enviar para a própria origem
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
