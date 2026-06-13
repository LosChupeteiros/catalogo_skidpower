# Skid Power — Identidade Visual & Design System

> **Leia este arquivo antes de criar qualquer página, seção ou componente novo.**
> Ele define a identidade visual da Skid Power e os padrões já usados no projeto.
> O objetivo é que toda parte nova do site pareça ter sido feita pela mesma mão —
> mesma paleta, mesma tipografia, mesmos espaçamentos, mesmos comportamentos.
>
> Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.
> Os tokens vivem em [`app/globals.css`](app/globals.css) dentro de `@theme`, então
> as utilities do Tailwind (`text-gold`, `bg-ink`, `border-line`, etc.) já resolvem
> para as cores corretas. **Use sempre os tokens — nunca cole hex solto no JSX.**

---

## 1. Princípios

1. **Industrial, limpo e premium.** Muito espaço em branco, contraste alto, nada
   poluído. O produto (metal polido) é o herói; a interface é o porta-retrato.
2. **Preto + dourado sobre branco.** Texto preto/grafite, fundo branco/gelo,
   dourado **só** como destaque (nunca como cor de grandes áreas).
3. **Dourado é tempero, não prato.** Use em hover, ícones, detalhes, palavra-chave
   do título, underline ativo, bordas de chips. Se um bloco inteiro ficar dourado,
   está errado.
4. **Movimento sutil e com propósito.** Transições suaves entre estados; nada de
   animação chamativa ou "saltitante". Sempre respeitar `prefers-reduced-motion`.
5. **Tri-idioma desde o início.** Todo texto vem do dicionário i18n
   ([`lib/i18n.ts`](lib/i18n.ts)) em PT/EN/ES. Nunca escreva texto fixo no JSX.

---

## 2. Cores (tokens)

Definidas em `@theme` em [`app/globals.css`](app/globals.css). Use as utilities.

| Token | Hex | Utility | Uso |
|---|---|---|---|
| `--color-ink` | `#1b1b1d` | `text-ink` `bg-ink` | Texto principal, títulos, botão sólido |
| `--color-ink-soft` | `#54555a` | `text-ink-soft` | Parágrafos, corpo de texto |
| `--color-ink-faint` | `#8b8d93` | `text-ink-faint` | Labels, legendas, itens de nav inativos |
| `--color-surface` | `#f5f6f8` | `bg-surface` | Gelo. **Ver regra crítica na seção 8** |
| `--color-surface-card` | `#ffffff` | — | Branco puro de referência |
| `--color-page` | `#0b0b0d` | `bg-page` | Moldura escura atrás do card |
| `--color-gold` | `#c2982f` | `text-gold` `bg-gold` | Dourado base (destaque) |
| `--color-gold-bright` | `#e3bd5a` | `text-gold-bright` | Brilho do gradiente dourado |
| `--color-gold-deep` | `#9c7a1f` | `text-gold-deep` | Dourado escuro (texto sobre claro, eyebrows) |
| `--color-line` | `#e7e8ec` | `border-line` | Bordas finas, divisórias de tabela |

**Dourado metálico em texto:** use a classe utilitária `.text-gold-gradient`
(gradiente que imita o acabamento do logo) — aplique na palavra-chave do título,
não na frase inteira. Exemplo: "Válvulas Esfera **Linha S6800**" (só a 2ª linha).

**Opacidades de dourado usadas como fundo de detalhe:** `bg-gold/10` (chip/ícone em
repouso), `bg-gold/5` (chip de aplicação), `border-gold/30`. Não invente novas
variações fora dessa escala.

**Não use:** vermelho (era a cor da referência original; foi substituído por
dourado), cores saturadas, gradientes coloridos de fundo, sombras coloridas
(exceto a sombra dourada sutil de hover já definida abaixo).

---

## 3. Tipografia

- **Família:** Inter (via `next/font/google`, variável `--font-inter`), fallback
  `Segoe UI, system-ui`. Já configurada no [`app/layout.tsx`](app/layout.tsx).
- **Escala em uso:**

| Papel | Classes |
|---|---|
| Título de slide / H1 | `text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-ink` |
| Eyebrow (sobrelinha) | `text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep` (com um traço `h-px w-7 bg-gold` antes) |
| Subtítulo / lead | `text-lg leading-relaxed text-ink-soft` |
| Corpo | `text-base leading-relaxed text-ink-soft` |
| Label de campo / nav | `text-sm font-medium` (nav) · `text-sm font-semibold text-ink-faint` (label) |
| Micro-label | `text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint` |
| Contador/numeração | `font-mono` |

- **Regras:** títulos sempre `tracking-tight`; uppercase só em eyebrows/labels e
  sempre com `tracking` largo (`0.18em`–`0.22em`). Peso: corpo `400/500`,
  ênfase `600`, títulos `700`.

---

## 4. Forma, espaçamento e elevação

- **Raio:** card principal `rounded-[28px]`; cartões internos `rounded-2xl`;
  ícones em caixa `rounded-xl`; botões e chips `rounded-full`; barra de
  indicador `rounded-full`.
- **Bordas:** sempre finas e claras — `border border-line`. Nada de bordas
  grossas ou escuras. Tabelas usam só divisória superior `border-t border-line`,
  sem grade fechada.
- **Sombra:** card sobre a moldura escura usa `shadow-2xl shadow-black/40`.
  Hover de cartão: `hover:shadow-lg hover:shadow-gold/5`. Botão sólido:
  `shadow-lg shadow-black/10`, e no hover dourado `hover:shadow-gold/30`.
- **Superfícies translúcidas:** elementos sobre o card usam
  `bg-white/50`–`bg-white/60` + `backdrop-blur` + `border-line` (ex.: seletor de
  idioma, botão secundário, cartões de vantagem).
- **Padding de seção:** `px-6 sm:px-10 lg:px-12 xl:px-16`. Header:
  `px-6 py-5 sm:px-10 lg:px-12`.

---

## 5. Componentes — receitas (copie estes padrões)

**Botão primário (sólido, vira dourado no hover):**
```tsx
<a className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5
   text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all
   duration-300 hover:bg-gold hover:shadow-gold/30">
  {label}
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</a>
```

**Botão secundário (outline translúcido):**
```tsx
<a className="group inline-flex items-center gap-2 rounded-full border border-line
   bg-white/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur
   transition-all duration-300 hover:border-gold hover:text-gold">
  {label}
  <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
</a>
```

**Chip / tag (aplicações):**
```tsx
<span className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5
   text-sm font-medium text-gold-deep">{label}</span>
```

**Cartão com ícone (grid de vantagens):**
```tsx
<div className="group flex items-start gap-3.5 rounded-2xl border border-line
   bg-white/55 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5
   hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5">
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
     bg-gold/10 text-gold transition-colors duration-300
     group-hover:bg-gold group-hover:text-white">
    <Icon className="h-5 w-5" />
  </span>
  <p className="pt-1 text-sm font-medium leading-snug text-ink">{text}</p>
</div>
```

**Tabela limpa (especificações):** sem grade; cada linha
`flex items-baseline justify-between gap-6 py-3` e, da 2ª em diante,
`border-t border-line`. Label `text-sm font-semibold text-ink-faint`, valor
`text-sm font-medium text-ink` alinhado à direita.

**Link de nav (com underline dourado animado no item ativo):** item inativo
`text-ink-faint hover:text-ink`; ativo `text-ink` + underline via
`motion.span layoutId="nav-underline"` com `h-[2px] bg-gold`.

**Pill seletor (idioma):** trilho `rounded-full border border-line bg-white/60 p-0.5
backdrop-blur`; item ativo recebe pílula preta animada (`motion.span
layoutId="lang-pill" bg-ink`), texto ativo `text-white`, inativo `text-ink-faint`.

---

## 6. Ícones

- Estilo **linha**, `stroke-width 1.5`, `currentColor`, `strokeLinecap/Linejoin
  round`, viewBox `0 0 24 24`. Tamanho padrão `h-5 w-5` (em caixa) ou `h-4 w-4`
  (inline em botão). Registro central em [`components/icons.tsx`](components/icons.tsx).
- Ícones herdam a cor do pai (geralmente `text-gold` em repouso, branco sobre
  dourado no hover). **Não** use ícones coloridos/preenchidos, exceto os de
  redes sociais (esses são glyphs preenchidos por legibilidade).
- **Redes sociais oficiais:** YouTube, LinkedIn e **WhatsApp** (não usar X/Twitter).

---

## 7. Movimento (Framer Motion)

- **Easing padrão (entrada):** `[0.22, 1, 0.36, 1]` (out-expo suave),
  `duration ~0.5s`. Saída: `[0.4, 0, 1, 1]`, `~0.3s`.
- **Padrão de slide/seção:** container com `staggerChildren: 0.06`; filhos sobem
  `y: 14→0` + fade. Troca de conteúdo via `AnimatePresence mode="wait"` com `key`.
- **Indicadores compartilhados** (underline da nav, pílula de idioma): usar
  `layoutId` + `transition` spring (`stiffness 420–480, damping 34–36`).
- **Hover:** `transition-all duration-300`; movimentos mínimos
  (`-translate-y-0.5`, `translate-x-1`). Nada de bounce/escala forte.
- **Sempre** honrar `prefers-reduced-motion` (já tratado globalmente no CSS).
- **Decisão tomada:** a válvula do vídeo fica **estática** (sem efeito de
  flutuar) — não reintroduzir bob/parallax nela.

---

## 8. Layout & regras críticas (não quebrar)

1. **Sem scroll de página.** A experiência é uma única "placa" de `100vh`. O
   `body` é `overflow-hidden` (em `globals.css`). Conteúdo que muda é trocado
   **in-place** (abas/slides), nunca empilhado para gerar rolagem. Navegação por
   nav do topo, scroll do mouse (baixo = próximo, cima = anterior) e setas do
   teclado — ver [`app/page.tsx`](app/page.tsx).
2. **Moldura:** página com fundo escuro (`bg-page`) e um card branco arredondado
   (`rounded-[28px]`) flutuando com `shadow-2xl shadow-black/40`.
3. **REGRA DO CARD BRANCO (importante):** o card é **branco puro** (`bg-white`),
   igual à placa branca do vídeo da válvula. Isso é proposital: faz o vídeo se
   fundir no fundo em qualquer navegador. **Não** troque o card para gelo
   (`bg-surface`) na coluna do vídeo nem use `mix-blend-mode` para "esconder" o
   vídeo — isso compõe de forma inconsistente na GPU e o retângulo branco do
   vídeo reaparece. Se precisar de gelo, use só em áreas sem vídeo.
4. **Vídeo de produto:** `<video autoplay loop muted playsInline>` sem controles,
   centralizado verticalmente, alinhado à direita e levemente maior que a coluna
   (`w-[131%]` no xl, `right-[-9%]`). Sempre fornecer `webm` + `mp4` + `poster`.
   Loops de montagem/explosão devem ser **boomerang** (forward+reverse) com
   pausas via `tpad` — ver seção "Sobre o vídeo" no [`README.md`](README.md).

---

## 9. i18n

- Dicionário tipado em [`lib/i18n.ts`](lib/i18n.ts): `Record<Locale, Dictionary>`,
  `Locale = "pt" | "en" | "es"`. A estrutura é idêntica entre idiomas para a UI
  nunca ramificar por locale.
- Ao criar conteúdo novo: **adicione a chave nos três idiomas** e leia via
  `dict[locale]`. Nunca hard-code string visível ao usuário.

---

## 10. Checklist para qualquer coisa nova

- [ ] Usou tokens (`text-ink`, `text-gold`, `border-line`…) — zero hex no JSX.
- [ ] Dourado só em destaque/hover/detalhe; fundo branco/gelo; texto preto.
- [ ] Inter; títulos `font-bold tracking-tight`; labels uppercase com tracking largo.
- [ ] Bordas finas `border-line`, raios da escala (full/2xl/xl/[28px]).
- [ ] Botões/chips/cartões seguem as receitas da seção 5.
- [ ] Ícones de linha 1.5 em `currentColor`; sociais = YouTube/LinkedIn/WhatsApp.
- [ ] Animações com o easing/stagger padrão; respeita reduced-motion; válvula estática.
- [ ] Não introduziu scroll de página; respeitou a regra do card branco.
- [ ] Texto em PT/EN/ES no dicionário i18n.
```
