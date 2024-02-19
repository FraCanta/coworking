"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import Line from "./Line/Line";
import Logo from "@/public/assets/logo/logo.svg";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";
import { MenuButton } from "./MenuButton";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  // const [textColor, setTextColor] = useState("white");
  const [isOpen, setOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        // setTextColor("#000000");
      } else {
        setColor("transparent");
        // setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="w-[90%] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="z-[20]">
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-[130px] lg:w-[200px] "
          />
        </Link>
        <div className="flex gap-4 items-center">
          <DarkModeToggle />
          <div onClick={handleNav} className="block ease-in duration-300 z-20">
            {/* {nav ? (
              <RiCloseFill
                size={40}
                className="text-white dark:text-third cursor-pointer "
              />
            ) : (
              <IoMenuOutline
                size={40}
                className="text-white dark:text-third cursor-pointer ease-in duration-300"
              />
            )} */}
            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="4"
              className="stroke-white dark:stroke-third"
              transition={{ ease: "easeOut", duration: 0.2 }}
              width="40"
              height="20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute top-0 left-0 right-0 bottom-0 flex items-center w-full h-screen bg-third dark:bg-white text-white dark:text-third  ease-in duration-300"
              : "absolute top-0 left-[-100%] right-0 bottom-0 flex items-center w-full h-screen bg-third dark:bg-white text-white dark:text-third  ease-in duration-300 z-20"
          }
        >
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3">
            <ul className="h-full flex flex-col gap-6">
              <li
                onClick={handleNav}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/factory">Factory</Link>
              </li>
              <li
                onClick={handleNav}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/works">Works</Link>
              </li>
              <li
                onClick={handleNav}
                className="text-[4rem] lg:text-[8rem] cursor-pointer transition hover:text-gray-500"
              >
                <Link href="/contatti">Contact</Link>
              </li>
            </ul>
            <div></div>
            <div>Frase</div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </div>
  );
};

export default Navbar;
