import React from "react";
import BlurryLights from "./BlurryLights";

const Hero = ({ children }) => {
  return (
    <>
      <div className="relative flex min-h-[calc(90vh_-_60px)] w-[90%] flex-col gap-6 md:gap-10  mx-auto items-center justify-center">
        {children}
      </div>
      <div className="w-[90%] mx-auto h-[0.5px] bg-white rounded-2"></div>
      <BlurryLights />
    </>
  );
};

export default Hero;
