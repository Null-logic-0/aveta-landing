"use client";

import { useEffect } from "react";

type ScrollHashUpdaterProps = {
  sectionIds: string[];
};

export default function ScrollHashUpdater({
  sectionIds,
}: ScrollHashUpdaterProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, "", `#${id}`);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return null;
}
