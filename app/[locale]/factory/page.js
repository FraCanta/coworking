import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Hero from "@/components/Hero";
import localFont from "next/font/local";
import Line from "@/components/Line/Line";
import Paragraph from "@/components/Paragraph/Paragraph";
const myFont = localFont({ src: "../../../fonts/ClearfaceStd-Bold.woff" });
const myFont2 = localFont({ src: "../../../fonts/Sneak-Regular.ttf" });

const i18nNamespaces = ["about", "test"];
const paragraph =
  "Aenean pulvinar fringilla elementum. Pellentesque mollis ipsum id libero posuere feugiat. Donec eget arcu sit amet nulla luctus venenatis a sit amet lectus. Maecenas justo massa, venenatis eu aliquam vel, molestie sit amet nulla.";
async function Factory({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Hero>
          {" "}
          <h1
            className={`${myFont.className} text-[60px] leading-[75px] md:text-[90px] md:leading-[100px] md:w-[100%]  text-white dark:text-third md:text-center lg:w-[70%] mx-auto  2xl:text-[100px] 2xl:leading-[120px] 2xla:text-[120px] 2xla:leading-[130px]`}
          >
            Lorem ipsum dolor sit amet, consecter.
          </h1>
          <div className="lg:w-[65%] mx-auto">
            <p
              className={`${myFont2.className} font-normal text-[20px] md:text-[30px]  text-white dark:text-third md:text-center  2xl:text-[30px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              malesuada felis et sem placerat consectetur at at nulla. 
            </p>
          </div>
        </Hero>
        <div className="w-full bg-[#161617] dark:bg-[#D9D9D9] text-white h-auto py-10 flex flex-col gap-y-20">
          <div className="w-[90%] mx-auto">
            <Line />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto ">
            <div></div>
            <Paragraph paragraph={paragraph} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto">
            <div></div>
            <Paragraph paragraph={paragraph} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto">
            <div></div>
            <Paragraph paragraph={paragraph} />
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}

export default Factory;
