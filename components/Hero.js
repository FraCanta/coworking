"use client";

import React from "react";
import BlurryLights from "./BlurryLights/BlurryLights";
import Line from "./Line/Line";
import { MaskText } from "./maskText";

const Hero = ({ children }) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] flex h-[calc(90vh_-_300px)] w-[90%] flex-col mx-auto items-center justify-center gap-6">
        {children}
      </div>
      <BlurryLights />
      <div className="w-[90vw] mx-auto">
        <Line />
      </div>
    </>
  );
};

export default Hero;
