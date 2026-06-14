# GreenSouk Mercado Natural (Landing Page)

## Acesso do Projeto online

[🔗 Acesse o projeto aqui](https://greensouk.vercel.app/)

---

## Sobre o projeto

GreenSouk é uma aplicação web desenvolvida com Next.js e Tailwind CSS para apresentar produtos e informações de contato de maneira responsiva e moderna com contato rápido e fácil e localização geográfica.

## Deploy online

O projeto está publicado e acessível em:

- https://greensouk.vercel.app/

## Documentação

- O código está organizado em App router `src/app`, `src/components`, `src/lib` e `public`.
- A aplicação utiliza Next.js 15, React 19, Tailwind CSS 4 e TypeScript.
- A navegação principal está definida em `src/components/Navbar.tsx`.
- O layout global e a configuração de rotas estão em `src/app/layout.tsx` e `src/app/page.tsx`. Estratégicamente como MVP, hardcoded para se tornar um aplicativo real e escalável. Por este motivo não utilizamos aqui ORMs e outros requisitos avançados de backend como nos outros projetos.

## Arquitetura

- `src/app/` contém as páginas da aplicação.
- `src/components/` contém componentes reutilizáveis, como `Navbar`, `Footer`, `ProductCard`, `StoreMap` e botões do WhatsApp.
- `src/lib/` contém utilitários e dados, como `products.ts` e `whatsapp.ts`.
- `public/` contém ativos estáticos usados na interface.

## Instruções de execução

### Pré-requisitos

\*Apesar de ter o link recomendações para rodar localmente:

- Ter node isntalado para executar npm install
- Após ter o npm disponível, executar localmente npm run dev

### Passos

1. Instale as dependências:

```bash
npm install
```

2. Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Acesse localmente:

```
http://localhost:3000
```

### Build de produção

```bash
npm run build
```

### Iniciar o servidor de produção

```bash
npm start
```
