"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="z-[999]"
    >
      {theme === "light" ? (
        <RiSunLine width={30} className="text-white" />
      ) : (
        <RiMoonLine width={30} className="dark:text-third" />
      )}
    </button>
  );
};

export default DarkModeToggle;
