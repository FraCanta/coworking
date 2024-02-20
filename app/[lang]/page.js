import Hero from "@/components/Hero";
import localFont from "next/font/local";
import Marquee from "@/components/Marquee/Marquee";
import Line from "@/components/Line/Line";
import LavoriSec from "@/components/LavoriSec/LavoriSec";
import LinkMarquee from "@/components/LinkMarquee/LinkMarquee";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../fonts/Sneak-Regular.ttf" });
import { getDictionary } from "../../getDictionary";
import MarqueeItem from "@/components/Marquee/MarqueeItem";

export default async function Home({ params }) {
  const translation = await getDictionary(params.lang);
  console.log(typeof translation.home.marquee);
  const arr = translation.home.marquee;

  const imagePaths = [
    "/assets/logos/logo.png",
    "/assets/logos/logo2.png",
    "/assets/logos/logo3.png",
    "/assets/logos/logo4.png",
    "/assets/logos/logo5.png",
    "/assets/logos/logo6.png",
    "/assets/logos/logo7.png",
    "/assets/logos/logo8.png",
    "/assets/logos/logo9.png",
    "/assets/logos/logo10.png",
    "/assets/logos/logo11.png",
    "/assets/logos/logo12.png",
    "/assets/logos/logo13.png",
    "/assets/logos/logo14.png",
    "/assets/logos/logo15.png",
    "/assets/logos/logo16.png",
    "/assets/logos/logo17.png",
    "/assets/logos/logo18.png",
    "/assets/logos/logo19.png",
    "/assets/logos/logo20.png",
    "/assets/logos/logo21.png",
    "/assets/logos/logo22.png",
  ];

  console.log(imagePaths);
  return (
    <>
      <main>
        <Hero>
          <h1
            className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
          >
            Sì. Siamo un’agenzia di incontri.
          </h1>
          <div className="lg:w-[65%] mx-auto">
            <p
              className={`${myFont2.className} font-normal text-[20px] md:text-[30px]  text-white dark:text-third md:text-center  2xl:text-[30px]`}
            >
              A volte creiamo legami duraturi. Altre volte, invece, nascono dei
              colpi di fulmine, brevi ma intensi, elettrizzanti e memorabili.
            </p>
          </div>
        </Hero>
        <div className="w-[90vw] mx-auto">
          <Line />
        </div>
        <div className="w-[90%] mx-auto flex justify-center items-center mt-10">
          <h2 className="text-[32px]">
            <span
              className={`${myFont.className} mr-2 text-white dark:text-third`}
            >
              Cofactory
            </span>
            <span className={`${myFont2.className} text-pink`}>lovers</span>{" "}
          </h2>
        </div>

        <Marquee translation={translation} />
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
        <LavoriSec />
        <div className="w-[90%] mx-auto">
          <Line />
        </div>
        <div className="w-[90%] mx-auto overflow-hidden">
          <LinkMarquee />
        </div>
        <div className="w-[90%] mx-auto mt-10">
          <Line />
        </div>
      </main>
    </>
  );
}
