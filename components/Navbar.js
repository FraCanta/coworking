"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/router"; // Changed from "next/navigation"
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";
import Line from "./Line/Line";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  // const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="h-[60px] w-[90%] mx-auto ">
        <div>
          <div className="flex items-center justify-between mt-8  md:space-x-10">
            <div className="flex flex-1 justify-start lg:w-0">
              <Link href="/" className="z-[20]">
                <Image
                  src={Logo}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[130px] lg:w-[200px] "
                />
              </Link>
            </div>
            <div className="flex gap-6 items-center">
              <DarkModeToggle />
              <MdOutlineMenu
                className="dark:text-third text-white w-8 h-8 lg:w-12 lg:h-12 cursor-pointer z-[20] relative"
                onClick={toggleMenu} // Toggle menu on click
              />
            </div>
          </div>
          {/* Mobile menu */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col space-y-4 absolute text-white top-0 left-0 bg-third h-screen w-full z-[30] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <motion.nav className="flex flex-col w-[90%] mx-auto pt-10 pb-6 h-full ">
              <Link
                // className={
                //   pathname == "/factory"
                //     ? "text-base font-bold text-white dark:text-third hover:text-second"
                //     : "text-base font-semibold text-white dark:text-third hover:text-second"
                // }
                href="/factory"
                className="text-9xl"
              >
                Factory
              </Link>
              <Link
                // className={
                //   pathname == "/works"
                //     ? "text-base font-bold text-white dark:text-third hover:text-second"
                //     : "text-base font-semibold text-white dark:text-third hover:text-second"
                // }
                href="/works"
                className="text-9xl"
              >
                Works
              </Link>
              <Link
                // className={
                //   pathname == "/contatti"
                //     ? "text-base font-bold text-white dark:text-third hover:text-second"
                //     : "text-base font-semibold text-white dark:text-third hover:text-second"
                // }
                href="/contatti"
                className="text-9xl"
              >
                Contatti
              </Link>
            </motion.nav>
          </motion.div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </>
  );
};

export default Navbar;
