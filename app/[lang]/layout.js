"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export default function RootLayout({ children, params }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  console.log(params);
  return (
    <html lang={params.lang}>
      <body>
        {/* {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : ( */}
        <>
          <ThemeProvider attribute="class">
            <Navbar />

            {children}
            <Footer />
          </ThemeProvider>
        </>

        {/* )} */}
      </body>
    </html>
  );
}
