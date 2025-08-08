"use client";

import { useRef, useEffect } from "react";

type HeroVideoProps = {
  onEnd: () => void;
};

function HeroVideo({ onEnd }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("ended", onEnd);

    return () => {
      video.removeEventListener("ended", onEnd);
    };
  }, [onEnd]);

  return (
    <video
      ref={videoRef}
      src="/hero-video.mov"
      autoPlay
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );
}

export default HeroVideo;
