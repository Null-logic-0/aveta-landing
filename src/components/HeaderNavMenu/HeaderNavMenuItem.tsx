"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavMenuProps = {
  link: string;
  title: string;
};

function HeaderNavMenuItem({ link, title }: HeaderNavMenuProps) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <li>
      <Link
        href={link}
        className={clsx(
          `transition-colors font-semibold text-[16px] ${
            isActive ? "text-[#FF4DC3]" : "text-[#FFFFFF]"
          }`
        )}
      >
        {title}
      </Link>
    </li>
  );
}

export default HeaderNavMenuItem;
