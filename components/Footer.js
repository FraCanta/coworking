import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/Tactico-Grunge.otf" });

function Footer() {
  return (
    <div className="w-full bg-[#161617] text-white h-auto py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-y-[40px] lg:gap-y-[150px] ">
        <div className="text-[1.625rem]">
          <span
            className={`${myFont.className} text-[3.625rem] text-[#368B90] `}
            id="logo1"
          >
            CO
          </span>
          <span
            className={`${myFont.className} text-[3.625rem] text-[#bb5471] `}
            id="logo2"
          >
            FACTORY
          </span>
        </div>
        <div className="text-[1.625rem]"></div>
        <div className="text-[1.25rem] 2xl:text-[1.625rem] grid grid-cols-1 gap-6">
          Ideiamo, progettiamo e realizziamo campagne di comunicazione congiunta
          tra i brand, sulle box ma non solo.
          <div className="flex gap-4">
            <div>
              Pronto per un match?
              <div className="flex">
                <button>info@cofactory.it</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[1.625rem]"></div>
        <div className="text-[1.625rem]">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/works">Works</Link>
            </li>{" "}
            <li>
              <Link href="/factory">Factory</Link>
            </li>{" "}
            <li>
              <Link href="/contatti">Contatti</Link>
            </li>
          </ul>
        </div>
        <div className="order-last lg:order-none">© 2024</div>
        <div></div>
        <div>Privacy Policy</div>
        <div></div>
        <div>Socials Link</div>
      </div>
    </div>
  );
}

export default Footer;
