"use client";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Tactico-Grunge.otf" });
import React, { useState, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#background",
        delay: 0,
        opacity: 1,
        duration: 600,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per1",
        delay: 0,
        opacity: 1,
        duration: 600,
        translateX: [-100, 0], // aggiunto translateX con valore negativo        duration: 1000,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per2",
        delay: 0,
        opacity: 1,
        duration: 600,

        translateX: [100, 0],
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per",
        delay: 0,
        rotate: "45deg",
        duration: 700,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per",
        delay: 0,
        scale: 1.25,
        duration: 700,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per",
        delay: 0,
        scale: 1.5,
        duration: 700,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per1",
        delay: 0,
        opacity: 1,
        duration: 600,
        translateX: [0, -300], // aggiunto translateX con valore negativo        duration: 1000,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#per2",
        delay: 0,
        opacity: 1,
        duration: 600,

        translateX: [0, 80],
        easing: "easeInOutQuad",
      })

      .add({
        targets: ["#logo1, #logo2 "],
        opacity: 1,
        duration: 500,
        easing: "easeInOutSine",
        delay: 0,
      })

      .add({
        targets: "#background",
        delay: 0,
        scale: 1.5,
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
      });

    // .add({
    //   targets: "#per",
    //   delay: 0,
    //   opacity: 0,
    //   rotate: "+=2turn",
    //   duration: 800,
    //   easing: "easeInOutSine",
    // })
    // .add({
    //   targets: "#payoff, #icona",
    //   opacity: 1,
    //   duration: 1200,
    //   easing: "easeInOutSine",
    //   delay: 0,
    // })

    // .add({
    //   targets: "#payoff",
    //   delay: 500,
    //   scale: 0,
    //   opacity: 0,

    //   duration: 800,
    //   easing: "easeInOutSine",
    // })
    // .add({
    //   targets: "#logo",
    //   delay: 100,
    //   scale: 1.25,
    //   opacity: 0,
    //   duration: 500,
    //   easing: "easeInOutSine",
    // })
    // .add({
    //   targets: "#logo",
    //   delay: 0,
    //   scale: 0,
    //   opacity: 0,
    //   translateY: -20,
    //   translateX: -10,
    //   duration: 500,
    //   easing: "easeInOutSine",
    // });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex h-screen items-center justify-center flex-col overflow-hidden opacity-0 relative"
      isMounted={isMounted}
      id="background"
    >
      <div className="flex " id="logo">
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
        <div
          id="per"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/assets/logo/per1.svg"
            alt=""
            width={100}
            height={100}
            className="mr-4 opacity-0"
            id="per1"
          />
          <Image
            src="/assets/logo/per2.svg"
            alt=""
            width={60}
            height={60}
            className="opacity-0"
            id="per2"
          />
        </div>
      </div>
      <p
        id="payoff"
        className="opacity-0 text-[1.25rem] md:text-[2rem] text-white flex items-center justify-center"
      >
        Agenzia creativa di incontri{" "}
        <span>
          <Image
            id="icona"
            src="/assets/logo/per.svg"
            alt=""
            width={20}
            height={10}
            className="opacity-0 mx-2 mt-2"
          />
        </span>{" "}
        brands
      </p>
    </div>
  );
};

export default SplashScreen;
