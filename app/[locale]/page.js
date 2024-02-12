import Hero from "@/components/Hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ["home", "common"];
import localFont from "next/font/local";
import Marquee from "@/components/Marquee";
import Line from "@/components/Line/Line";
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
              className={`${myFont.className} text-[60px] leading-[75px] lg:text-[120px] text-white lg:text-center lg:w-[70%] mx-auto lg:leading-[130px] `}
            >
              Sì. Siamo un’agenzia di incontri.
            </h1>
            <p
              className={`${myFont2.className} font-normal text-[20px] lg:text-[40px] text-white lg:text-center lg:w-[65%] mx-auto lg:leading-[59px]`}
            >
              A volte creiamo legami duraturi. Altre volte, invece, nascono dei
              colpi di fulmine, brevi ma intensi, elettrizzanti e memorabili{" "}
            </p>
          </Hero>
          <div className="w-[90%] mx-auto flex justify-center items-center mt-10">
            <h2 className="text-[32px]">
              <span className={`${myFont.className} mr-2`}>Cofactory</span>
              <span className={`${myFont2.className} text-pink`}>
                lovers
              </span>{" "}
            </h2>
          </div>
          <Marquee />
          <div className="w-[90%] mx-auto">
            <Line />
          </div>
          <div className="w-[90%] mx-auto h-screen">lavori</div>
        </main>
      </TranslationsProvider>
    </>
  );
}
