"use client";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Tactico-Grunge.otf" });
import React, { useState, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
import Logo from "@/public/assets/logo/logo.svg";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo1",
        delay: 0,
        opacity: 1,
        translateX: 0,
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo2",
        delay: 2,
        opacity: 1,
        translateX: 0,
        duration: 1200,
        easing: "easeInOutExpo",
      })

      .add({
        targets: "#payoff",
        delay: 100,
        opacity: 0,
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 5,
        opacity: 0,
        duration: 1000,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 20);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex h-screen items-center justify-center flex-col overflow-hidden"
      isMounted={isMounted}
    >
      {/* <Image
        id="logo"
        src={Logo}
        alt=""
        width={600}
        height={600}
        className="translate-y-[100px] opacity-0"
      /> */}
      <div className="flex" id="logo">
        <span
          className={`${myFont.className} text-[200px] text-[#368B90] opacity-0`}
          id="logo1"
        >
          CO
        </span>
        <span
          className={`${myFont.className} text-[200px] text-[#bb5471] opacity-0`}
          id="logo2"
        >
          FACTORY
        </span>
      </div>
      <p id="payoff">Agenzia creativa di incontri x brands</p>
    </div>
  );
};

export default SplashScreen;
