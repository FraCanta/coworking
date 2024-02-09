"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[100px] w-[90%] mx-auto ">
        <div>
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex flex-1 justify-start lg:w-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[100px]  md:w-[200px] "
                />
              </Link>
            </div>

            <nav className="hidden space-x-10 md:flex">
              <Link
                className={
                  pathname == "/factory"
                    ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                    : "text-base font-semibold text-neutral-100 hover:text-neutral-300"
                }
                href="/factory"
              >
                Factory
              </Link>

              <Link
                className={
                  pathname == "/contatti"
                    ? "text-base font-bold text-neutral-100 hover:text-neutral-200"
                    : "text-base font-medium text-neutral-100 hover:text-neutral-300"
                }
                href="/contatti"
              >
                Contatti
              </Link>
            </nav>
          </div>
        </div>
        <div className="h-[0.5px] bg-white rounded-2"></div>
      </div>
    </>
  );
};

export default Navbar;
