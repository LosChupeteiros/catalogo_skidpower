"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LOCALES, type Dictionary, type Locale, type SlideId } from "@/lib/i18n";
import { YoutubeIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
  active: SlideId;
  onNavigate: (id: SlideId) => void;
  onLocale: (l: Locale) => void;
}

const NAV: { id: SlideId; key: keyof Dictionary["nav"] }[] = [
  { id: "hero", key: "valvula" },
  { id: "funcao", key: "funcao" },
  { id: "linha", key: "linha" },
  { id: "vantagens", key: "vantagens" },
  { id: "specs", key: "specs" },
];

const SOCIALS = [
  { Icon: YoutubeIcon, href: "https://youtube.com", key: "youtube" as const },
  { Icon: LinkedinIcon, href: "https://linkedin.com", key: "linkedin" as const },
  { Icon: WhatsappIcon, href: "https://wa.me/5500000000000", key: "whatsapp" as const },
];

export default function Header({
  dict,
  locale,
  active,
  onNavigate,
  onLocale,
}: HeaderProps) {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
      {/* Logo — click returns to the hero slide. */}
      <button
        onClick={() => onNavigate("hero")}
        className="group flex items-center"
        aria-label="Skid Power — início"
      >
        <Image
          src="/logo_preto.png"
          alt="Skid Power"
          width={180}
          height={71}
          priority
          className="h-12 w-auto select-none transition-transform duration-300 group-hover:scale-[1.03] sm:h-14"
        />
      </button>

      {/* Center navigation — drives the left-column slides (no page scroll). */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
        {NAV.map(({ id, key }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {dict.nav[key]}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right cluster: language switch + socials. */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="flex items-center rounded-full border border-line bg-white/60 p-0.5 backdrop-blur">
          {LOCALES.map(({ code, label }) => {
            const isActive = locale === code;
            return (
              <button
                key={code}
                onClick={() => onLocale(code)}
                className={`relative rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-200 ${
                  isActive ? "text-white" : "text-ink-faint hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 480, damping: 36 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-1.5 sm:flex">
          {SOCIALS.map(({ Icon, href, key }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.social[key]}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-ink transition-all duration-200 hover:bg-gold/10 hover:text-gold"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
