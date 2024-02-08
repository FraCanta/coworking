"use client";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Tactico-Grunge.otf" });
import React, { useState, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
import Icona from "@/public/assets/logo/per.svg";
import Per1 from "@/public/assets/logo/per1.svg";
import Per2 from "@/public/assets/logo/per2.svg";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#per1",
        delay: 0,
        opacity: 1,
        translateX: [-100, 0], // aggiunto translateX con valore negativo        duration: 1000,
        easing: "spring",
        transformOrigin: "50% 50%",
      })
      .add({
        targets: "#per2",
        delay: 0,
        opacity: 1,
        translateX: [100, 0],
        easing: "spring",
      })
      .add({
        targets: "#per",
        delay: 0,
        rotate: "45deg",
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#per1",
        delay: 0,
        opacity: 0,
        translateY: [-100], // aggiunto translateY con valore negativo
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#per2",
        delay: 0,
        opacity: 0,
        translateY: [100], // aggiunto translateY con valore positivo
        duration: 1000,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo1, #logo2, #payoff",
        delay: 0,
        opacity: 1,
        translateX: 0,
        duration: 1000,
        easing: "easeInOutExpo",
      })

      .add({
        targets: "#logo, #payoff",
        delay: 5,
        scale: 0,
        opacity: 0,
        translateY: -20,
        translateX: -10,
        duration: 1000,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex h-screen items-center justify-center flex-col overflow-hidden relative"
      isMounted={isMounted}
    >
      <div className="flex" id="logo">
        <span
          className={`${myFont.className} text-8xl md:text-[180px] lg:text-[200px] text-[#368B90] opacity-0`}
          id="logo1"
        >
          CO
        </span>
        <span
          className={`${myFont.className} text-8xl md:text-[180px] lg:text-[200px] text-[#bb5471] opacity-0`}
          id="logo2"
        >
          FACTORY
        </span>
      </div>
      <p
        id="payoff"
        className="opacity-0 text-[1.25rem] md:text-[2rem] text-white flex items-center justify-center"
      >
        Agenzia creativa di incontri{" "}
        <span>
          <Image
            id="payoff"
            src={Icona}
            alt=""
            width={20}
            height={10}
            className="opacity-0 mx-2 mt-2"
          />
        </span>{" "}
        brands
      </p>
      <div
        id="per"
        className="flex items-center justify-center absolute top-1/2 left-1/5 translate-1/2"
      >
        <Image
          src={Per1}
          alt=""
          width={100}
          height={100}
          className="mr-4 opacity-0"
          id="per1"
        />
        <Image
          src={Per2}
          alt=""
          width={60}
          height={60}
          className="opacity-0"
          id="per2"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
