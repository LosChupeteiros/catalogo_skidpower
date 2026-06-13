"use client";

import { useEffect, useRef } from "react";

/* The valve reel lives in the right column: vertically centered, pushed to the
   edge and slightly oversized so it reads as imposing — mirroring the
   inspiration. The clip is a seamless forward+reverse boomerang, so it never
   hard-cuts. We force playback on mount because some browsers defer autoplay
   until the element is interactive. */
export default function VideoStage() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => undefined);
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <div className="pointer-events-none relative h-full w-full">
      {/* The reel ships on a pure-white plate and the card is pure white too, so
          the plate is invisible with no blend mode at all. We deliberately avoid
          mix-blend-mode here: it composited inconsistently across GPUs and made
          the white plate resurface as a rectangle on some machines. */}
      <video
        ref={ref}
        className="absolute right-[-6%] top-1/2 h-auto w-[140%] max-w-none -translate-y-1/2 sm:w-[132%] lg:right-[-11%] lg:w-[138%] xl:right-[-9%] xl:w-[131%]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/valve-poster.jpg"
        disablePictureInPicture
        controls={false}
      >
        <source src="/valve-loop.webm" type="video/webm" />
        <source src="/valve-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
