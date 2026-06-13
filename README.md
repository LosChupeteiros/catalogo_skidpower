# Skid Power — Válvula Esfera Linha S6800

Página de produto de tela cheia (sem scroll) inspirada no reel de referência,
construída com **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

> **Antes de criar novas partes do site, leia [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)** —
> identidade visual, tokens, padrões de componente e regras de layout da Skid Power.

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # produção
```

## Como funciona

- **Sem scroll de página.** O `body` é `overflow-hidden` e toda a experiência
  vive em uma única "placa" de `100vh`. A navegação superior (Função · Linha
  S6800 · Vantagens · Especificações) **troca os slides da coluna esquerda
  in-place** — estado em `app/page.tsx` (`active`), transições com
  `AnimatePresence` em `components/Slides.tsx`.
- **Scroll do mouse navega os slides**: roda para baixo → próximo, para cima →
  anterior (com trava de ~850ms para 1 gesto = 1 slide). Setas do teclado
  (←/→/↑/↓) também funcionam.
- **Coluna do vídeo** (`components/VideoStage.tsx`): `<video autoplay loop muted
  playsinline>` sem controles, centralizado verticalmente e alinhado à direita.
  Usa `mix-blend-mode: multiply` para fundir a placa branca do reel ao card.
- **i18n** (PT/EN/ES) em `lib/i18n.ts` — dicionário tipado, sem dependências.
- **Cores Skid Power**: fundo gelo, tinta preta, accent **dourado** (tokens em
  `app/globals.css` via `@theme`).

## Sobre o vídeo da válvula

O `valve.mp4` original vai de *montado → totalmente explodido*; em loop simples
ele "saltaria" no fim. Por isso foi re-encodado como **boomerang** (forward +
reverse concatenados) com **pausas** (`tpad`): ~2,5s segurando a peça separada
antes de voltar e ~2,5s montada — dando tempo de ver os dois estados. O loop é
perfeitamente contínuo (monta ↔ desmonta para sempre). Gerados em `public/`:

- `valve-loop.webm` (VP9) e `valve-loop.mp4` (H.264, faststart) — o navegador
  escolhe o melhor formato.
- `valve-poster.jpg` — primeiro quadro, paint instantâneo.

Comando usado (ffmpeg):

```bash
ffmpeg -i valve.mp4 -filter_complex \
  "[0:v]split[a][b];[a]tpad=stop_mode=clone:stop_duration=2.5[f];\
   [b]reverse,tpad=stop_mode=clone:stop_duration=2.5[r];\
   [f][r]concat=n=2:v=1[v]" -map "[v]" -an \
  -c:v libx264 -profile:v high -preset slow -crf 18 -pix_fmt yuv420p \
  -movflags +faststart public/valve-loop.mp4
```

## Assets

`public/logo_preto.png` (cabeçalho) · `public/marcadagua.png` (marca d'água
sutil na esquerda) · vídeos do produto. Trocar o vídeo é só substituir os
arquivos `valve-loop.*` em `public/`.
