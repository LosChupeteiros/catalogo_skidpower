"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Slides from "@/components/Slides";
import VideoStage from "@/components/VideoStage";
import { dictionary, type Locale, type SlideId } from "@/lib/i18n";

/* Ordered slide ring — drives keyboard arrows and the dot indicator. */
const ORDER: SlideId[] = ["hero", "funcao", "linha", "vantagens", "specs"];

export default function Page() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [active, setActive] = useState<SlideId>("hero");
  const dict = dictionary[locale];

  /* Clamped step (no wrap-around): scrolling past the ends simply stops, which
     feels more natural than looping when the gesture is a wheel/trackpad. */
  const go = useCallback((dir: 1 | -1) => {
    setActive((cur) => {
      const i = ORDER.indexOf(cur);
      const next = Math.min(Math.max(i + dir, 0), ORDER.length - 1);
      return ORDER[next];
    });
  }, []);

  /* Arrow keys flip slides. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  /* Wheel/trackpad: down → next slide, up → previous. The page itself never
     scrolls (body is overflow-hidden); we translate the gesture into a slide
     step and lock briefly so one swipe = one slide instead of skipping. */
  const lock = useRef(false);
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (lock.current) return;
      if (Math.abs(e.deltaY) < 12) return; // ignore tiny inertia ticks
      lock.current = true;
      go(e.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => {
        lock.current = false;
      }, 850);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [go]);

  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden bg-page p-0 sm:p-3 lg:p-4">
      {/* The single, fixed-height plate. Everything lives inside; nothing scrolls. */}
      {/* Card is pure white — identical to the reel's white plate — so the video
          melts into it with or without blend support. This is what makes the
          surface uniform across every browser/GPU (no resurfacing rectangle). */}
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl shadow-black/40 sm:rounded-[28px]">
        <Header
          dict={dict}
          locale={locale}
          active={active}
          onNavigate={setActive}
          onLocale={setLocale}
        />

        {/* Body: content left, valve reel right. Collapses to stacked on small
            screens while still never producing page scroll. */}
        <div className="relative grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* LEFT — watermark + transitioning content */}
          <section className="relative z-20 flex items-center px-6 pb-10 sm:px-10 lg:px-12 xl:px-16">
            <Image
              src="/marcadagua.png"
              alt=""
              aria-hidden
              width={520}
              height={360}
              priority
              className="pointer-events-none absolute -left-10 bottom-0 w-[60%] max-w-[420px] select-none opacity-[0.20]"
            />
            <div className="relative z-10 w-full">
              <Slides dict={dict} active={active} />
            </div>
          </section>

          {/* RIGHT — valve video stage (hidden on the narrowest screens to keep
              the layout honest without scroll) */}
          {/* No z-index here on purpose: a stacking context on this section
              would isolate the video's mix-blend-mode and the white plate would
              resurface as a rectangle. The text section's z-20 already keeps the
              copy above the bleeding reel. */}
          <section className="relative hidden lg:block">
            <VideoStage />
          </section>
        </div>

        {/* Slide indicator — quiet progress cue, also clickable. */}
        <div className="pointer-events-none absolute bottom-6 left-6 z-20 flex items-center gap-2 sm:left-10 lg:left-12 xl:left-16">
          {ORDER.map((id) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                aria-label={`Slide ${id}`}
                className="pointer-events-auto h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 26 : 8,
                  background: isActive ? "var(--color-gold)" : "var(--color-line)",
                }}
              />
            );
          })}
        </div>

        {/* Vertical step counter on the right edge, echoing the reel framing. */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute bottom-6 right-6 z-20 hidden items-baseline gap-1 font-mono text-ink-faint lg:flex"
        >
          <span className="text-2xl font-semibold text-ink">
            {String(ORDER.indexOf(active) + 1).padStart(2, "0")}
          </span>
          <span className="text-sm">/ {String(ORDER.length).padStart(2, "0")}</span>
        </motion.div>
      </div>
    </main>
  );
}
