"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <html>
      <body>
        {/* {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : ( */}
        <>
          <Navbar />

          {children}
        </>
        {/* )} */}
      </body>
    </html>
  );
}
