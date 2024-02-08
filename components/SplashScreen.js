"use client";

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
        targets: "#logo",
        delay: 0,
        y: -400,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#payoff",
        delay: 100,
        scale: 1,
        duration: 500,
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
      className="flex h-screen items-center justify-center flex-col"
      isMounted={isMounted}
    >
      <Image id="logo" src={Logo} alt="" width={600} height={600} />
      <p id="payoff">Agenzia creativa di incontri x brands</p>
    </div>
  );
};

export default SplashScreen;
