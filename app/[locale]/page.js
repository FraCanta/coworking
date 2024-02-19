import Hero from "@/components/Hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ["home", "common"];
import localFont from "next/font/local";
import Marquee from "@/components/Marquee";
import Line from "@/components/Line/Line";
import LavoriSec from "@/components/LavoriSec/LavoriSec";
import LinkMarquee from "@/components/LinkMarquee/LinkMarquee";
const myFont = localFont({ src: "../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../fonts/Sneak-Regular.ttf" });

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
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
                A volte creiamo legami duraturi. Altre volte, invece, nascono
                dei colpi di fulmine, brevi ma intensi, elettrizzanti e
                memorabili.
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
          <Marquee />
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
      </TranslationsProvider>
    </>
  );
}
