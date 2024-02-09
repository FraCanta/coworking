import React from "react";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import BackButton from "./BackButton";
import Hero from "@/components/Hero";

const i18nNamespaces = ["about", "test"];

async function Factory({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Hero>Factory </Hero>
      </main>
    </TranslationsProvider>
  );
}

export default Factory;
