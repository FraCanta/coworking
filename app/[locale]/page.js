import Hero from "@/components/Hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ["home", "common"];
import localFont from "next/font/local";
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
              className={`${myFont.className} text-[60px] leading-[75px] lg:text-[120px] text-white lg:text-center lg:w-[70%] mx-auto lg:leading-[130px]`}
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
        </main>
      </TranslationsProvider>
    </>
  );
}
