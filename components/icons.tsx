import type { ReactElement, SVGProps } from "react";

/* Thin-stroke line icons tuned to inherit currentColor so the gold accent
   flows from the parent. 1.5px stroke keeps them subtle, as in the brief. */

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ----------------------------- Advantage icons ------------------------- */

export const ValveIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M3 12h5.5M15.5 12H21M12 8.5V4M9.5 4h5" />
  </svg>
);

export const ShieldIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
);

export const TorqueIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12a8 8 0 1 1 4 6.9" />
    <path d="M4 19v-3.5h3.5" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const FlowIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 9h13M3 15h13" />
    <path d="M14 6l4 3-4 3M14 12l4 3-4 3" />
  </svg>
);

export const SphereIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M4.5 10c3 2 12 2 15 0M4.5 14c3-2 12-2 15 0" />
  </svg>
);

export const SealIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="8" width="16" height="8" rx="2" />
    <path d="M8 8V6M12 8V6M16 8V6M8 18v-2M12 18v-2M16 18v-2" />
  </svg>
);

export const iconRegistry = {
  valve: ValveIcon,
  shield: ShieldIcon,
  torque: TorqueIcon,
  flow: FlowIcon,
  sphere: SphereIcon,
  seal: SealIcon,
} as const;

/* ------------------------------- UI icons ------------------------------ */

export const ArrowRight: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const DownloadIcon: Icon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v10M8 11l4 4 4-4M5 19h14" />
  </svg>
);

/* ------------------------------ Social icons --------------------------- */
/* These read better as filled glyphs, so they override the line style. */

export const YoutubeIcon: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.9.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.6.5 8.9.5 8.9.5s7.3 0 8.9-.5a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
  </svg>
);

export const LinkedinIcon: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6zM8.3 18.3H5.5V9.7h2.8v8.6zM6.9 8.5a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3zm11.4 9.8h-2.8v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H9.7V9.7h2.7v1.2h.04c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2v4.6z" />
  </svg>
);

export const WhatsappIcon: Icon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.45-.15-.65.15-.2.3-.74.94-.9 1.13-.17.2-.34.22-.63.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.6.13-.14.3-.34.44-.51.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49l-.55-.01c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.64.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2zm0 18.3a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-3 .79.8-2.93-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
  </svg>
);
