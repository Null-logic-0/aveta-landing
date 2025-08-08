"use client";
import { useState } from "react";
import HeroVideo from "./HeroVideo";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

function HeroIntroSection() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="flex h-screen relative max-lg:hidden">
      <div
        className={`w-full h-full relative  ${
          videoEnded ? "z-10" : "z-50"
        } overflow-hidden`}
      >
        <HeroVideo onEnd={() => setVideoEnded(true)} />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8A38F5] to-[#FF4DC3] opacity-30 z-10" />
      </div>

      {videoEnded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bg-black/50 shadow-2xl flex h-full w-full justify-center items-center z-20"
        >
          <HeroContent />
        </motion.div>
      )}
    </section>
  );
}

export default HeroIntroSection;
