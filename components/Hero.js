import React from "react";
import BlurryLights from "./BlurryLights/BlurryLights";
import Line from "./Line/Line";

const Hero = ({ children }) => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] flex min-h-[calc(90vh_-_60px)] w-[90%] flex-col gap-6 md:gap-10  mx-auto items-center justify-center mt-20">
        {children}
      </div>
      <BlurryLights />
      <div className="w-[90%] mx-auto">
        <Line />
      </div>
    </>
  );
};

export default Hero;
