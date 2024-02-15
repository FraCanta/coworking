"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";
import Line from "./Line/Line";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[60px] w-[90%] mx-auto ">
        <div>
          <div className="flex items-center justify-between mt-8  md:space-x-10">
            <div className="flex flex-1 justify-start lg:w-0">
              <Link href="/" className="z-[9999]">
                <Image
                  src={Logo}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[130px] lg:w-[200px] "
                />
              </Link>
            </div>
            <DarkModeToggle />
            <nav className="hidden space-x-10 md:flex z-[9999]">
              <Link
                className={
                  pathname == "/factory"
                    ? "text-base font-bold text-white dark:text-third hover:text-second"
                    : "text-base font-semibold text-white dark:text-third hover:text-second"
                }
                href="/factory"
              >
                Factory
              </Link>
              <Link
                className={
                  pathname == "/works"
                    ? "text-base font-bold text-white dark:text-third hover:text-second"
                    : "text-base font-semibold text-white dark:text-third hover:text-second"
                }
                href="/works"
              >
                Works
              </Link>

              <Link
                className={
                  pathname == "/contatti"
                    ? "text-base font-bold text-white dark:text-third hover:text-second"
                    : "text-base font-semibold text-white dark:text-third hover:text-second"
                }
                href="/contatti"
              >
                Contatti
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </>
  );
};

export default Navbar;
