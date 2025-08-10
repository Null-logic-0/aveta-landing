import Logo from "../UI/Logo";
import BurgerMenu from "./BurgerMenu";
import AuthButtons from "./AuthButtons";
import { NAV_ITEMS } from "@/constants/nav-items";
import HeaderNavMenuItem from "./HeaderNavMenuItem";

function HeaderNavMenu() {
  return (
    <header className="px-6 py-3   backdrop-blur-md bg-[#11141D]/50  fixed w-full z-50">
      <nav className="flex items-center justify-between">
        <Logo />
        <ul className="flex items-center justify-center gap-6 max-lg:hidden">
          {NAV_ITEMS.map((item) => (
            <HeaderNavMenuItem
              key={item.id}
              title={item.title}
              link={item.href}
            />
          ))}
        </ul>
        <div className="max-lg:hidden">
          <AuthButtons />
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
}

export default HeaderNavMenu;
