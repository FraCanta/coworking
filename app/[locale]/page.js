import initTranslations from "../i18n";
import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import TranslationsProvider from "@/components/TranslationsProvider";
import Link from "next/link";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <h1>{t("header")}</h1>
        <ExampleClientComponent />
        <Link href="/about">{t("common:about")}</Link>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
