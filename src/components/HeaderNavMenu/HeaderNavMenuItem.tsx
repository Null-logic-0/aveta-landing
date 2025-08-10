"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderNavMenuProps = {
  link: string;
  title: string;
};

export default function HeaderNavMenuItem({ link, title }: HeaderNavMenuProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const update = () => setHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    setHash(window.location.hash || "");
  }, [pathname, searchParams]);

  const [rawBase = "", rawHash = ""] = link.split("#");
  const hashPart = rawHash ? `#${rawHash}` : "";

  const isActive = rawHash
    ? rawBase
      ? pathname === (rawBase || "/") && hash === hashPart
      : hash === hashPart
    : false;

  return (
    <li>
      <Link
        href={link}
        scroll={true}
        className={clsx(
          "transition-colors font-semibold text-[16px] transform hover:text-[#FF4DC3]",
          isActive ? "text-[#FF4DC3]" : "text-[#FFFFFF]"
        )}
      >
        {title}
      </Link>
    </li>
  );
}
