"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import { MenuButton } from "./MenuButton";
import Line from "./Line/Line";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <motion.div
      style={{
        y: isVisible ? "0%" : "-100%",
        transition: {
          duration: 0.8,
          ease: "linear",
          delay: isVisible ? 0 : 0.8,
        }, // Aggiunto il delay
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 backdrop-blur-sm"
    >
      <div className="w-[90%] m-auto flex justify-between items-center py-4 text-white">
        <Link href="/" className="z-[20]" onClick={() => setOpen(false)}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[130px] lg:w-[200px] "
          />
        </Link>
        <div className="flex gap-8 items-center">
          <DarkModeToggle />
          <div
            onClick={() => setOpen(!isOpen)}
            className="block ease-in duration-300 z-20 cursor-pointer"
          >
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="3"
              className="stroke-white dark:stroke-third"
              transition={{ ease: "easeOut", duration: 0.2 }}
              width="40"
              height="20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center w-full h-screen bg-third dark:bg-white text-white dark:text-third"
        >
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3">
            <ul className="h-full flex flex-col gap-6">
              <li
                onClick={() => setOpen(false)}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/factory">Factory</Link>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/works">Works</Link>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/contatti">Contact</Link>
              </li>
            </ul>
            <div></div>
            <div>Frase</div>
          </div>
        </motion.div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </motion.div>
  );
};

export default Navbar;
