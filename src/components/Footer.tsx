import { NAV_ITEMS } from "@/constants/nav-items";
import Logo from "./UI/Logo";
import HeaderNavMenuItem from "./HeaderNavMenu/HeaderNavMenuItem";

function Footer() {
  return (
    <footer className="mt-10 w-full flex flex-col gap-4 p-6 bg-[#11141D]/20 max-md:bg-[#11141D]/70">
      <nav className="flex items-center pb-4 justify-between max-md:flex-col max-md:gap-6 border-b border-bottom border-[#FF4DC3]">
        <Logo />
        <ul className="flex items-center justify-center max-md:flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <HeaderNavMenuItem
              key={item.id}
              title={item.title}
              link={item.href}
            />
          ))}
        </ul>
      </nav>
      <span className="text-sm opacity-50 font-semibold max-md:text-center">
        Copyright @ 2025 AVETA. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
