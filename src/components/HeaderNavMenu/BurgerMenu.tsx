"use client";

import { useState } from "react";
import AuthButtons from "./AuthButtons";
import { NAV_ITEMS } from "@/constants/nav-items";
import HeaderNavMenuItem from "./HeaderNavMenuItem";
import { motion, AnimatePresence } from "framer-motion";

import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function BurgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button onClick={() => setOpenMenu(true)} className="lg:hidden">
        <GiHamburgerMenu className="text-xl" />
      </button>

      <AnimatePresence>
        {openMenu && (
          <motion.nav
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed flex flex-col  items-center justify-between top-0 bg-[#080918] p-3 mx-auto right-0 h-screen w-full z-50"
          >
            <button
              className="fixed top-2 right-2"
              onClick={() => setOpenMenu(false)}
            >
              <IoMdClose className="text-2xl" />
            </button>
            <ul className="flex flex-col justify-center h-full gap-3 items-center">
              {NAV_ITEMS.map((item) => (
                <HeaderNavMenuItem
                  key={item.id}
                  title={item.title}
                  link={item.href}
                  onClick={() => setOpenMenu(false)}
                />
              ))}
            </ul>
            <div className="mb-20 max-w-[200px] w-full">
              <AuthButtons />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default BurgerMenu;
