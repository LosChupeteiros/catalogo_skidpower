"use client";

import type { ReactElement } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { Dictionary, SlideId } from "@/lib/i18n";
import { iconRegistry, ArrowRight, DownloadIcon } from "@/components/icons";

interface SlidesProps {
  dict: Dictionary;
  active: SlideId;
}

/* Shared in/out choreography: content slides up a touch and fades, children
   stagger. Reduced-motion users get the instant version via globals.css. */
const container: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06 },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      variants={item}
      className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep"
    >
      <span className="h-px w-7 bg-gold" />
      {children}
    </motion.span>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      variants={item}
      className="text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl xl:text-7xl"
    >
      {children}
    </motion.h1>
  );
}

/* ------------------------------- Each slide ---------------------------- */

function HeroSlide({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Eyebrow>{dict.hero.eyebrow}</Eyebrow>
      <Title>
        {dict.hero.titleLead}
        <br />
        <span className="text-gold-gradient">{dict.hero.titleAccent}</span>
      </Title>
      <motion.p
        variants={item}
        className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft"
      >
        {dict.hero.subtitle}
      </motion.p>
      <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#orcamento"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-gold hover:shadow-gold/30"
        >
          {dict.hero.quote}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#datasheet"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold"
        >
          {dict.hero.datasheet}
          <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
      </motion.div>
    </>
  );
}

function FuncaoSlide({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Eyebrow>S6800</Eyebrow>
      <Title>{dict.funcao.title}</Title>
      <motion.p
        variants={item}
        className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
      >
        {dict.funcao.body}
      </motion.p>
    </>
  );
}

function LinhaSlide({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Eyebrow>S6800</Eyebrow>
      <Title>{dict.linha.title}</Title>
      <motion.p
        variants={item}
        className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
      >
        {dict.linha.body}
      </motion.p>

      <motion.span
        variants={item}
        className="mt-7 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint"
      >
        {dict.linha.applicationsTitle}
      </motion.span>
      <motion.div variants={item} className="mt-3 flex flex-wrap gap-2.5">
        {dict.linha.applications.map((a) => (
          <span
            key={a}
            className="rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold-deep"
          >
            {a}
          </span>
        ))}
      </motion.div>

      <motion.p
        variants={item}
        className="mt-6 max-w-lg border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-ink-soft"
      >
        {dict.linha.footnote}
      </motion.p>
    </>
  );
}

function VantagensSlide({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Eyebrow>S6800</Eyebrow>
      <Title>{dict.vantagens.title}</Title>
      <motion.div
        variants={item}
        className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {dict.vantagens.items.map((adv) => {
          const Icon = iconRegistry[adv.icon];
          return (
            <div
              key={adv.text}
              className="group flex items-start gap-3.5 rounded-2xl border border-line bg-white/55 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <p className="pt-1 text-sm font-medium leading-snug text-ink">
                {adv.text}
              </p>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

function SpecsSlide({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Eyebrow>S6800</Eyebrow>
      <Title>{dict.specs.title}</Title>
      <motion.dl variants={item} className="mt-7 max-w-xl">
        {dict.specs.rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-baseline justify-between gap-6 py-3 ${
              i !== 0 ? "border-t border-line" : ""
            }`}
          >
            <dt className="shrink-0 text-sm font-semibold text-ink-faint">
              {row.label}
            </dt>
            <dd className="text-right text-sm font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </motion.dl>
    </>
  );
}

const SLIDE_MAP: Record<SlideId, (p: { dict: Dictionary }) => ReactElement> = {
  hero: HeroSlide,
  funcao: FuncaoSlide,
  linha: LinhaSlide,
  vantagens: VantagensSlide,
  specs: SpecsSlide,
};

export default function Slides({ dict, active }: SlidesProps) {
  const Current = SLIDE_MAP[active];
  return (
    <div className="relative flex h-full w-full items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex w-full flex-col"
        >
          <Current dict={dict} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
