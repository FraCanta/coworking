import Hero from "@/components/Hero";
import TranslationsProvider from "@/components/TranslationsProvider";
import React from "react";
import initTranslations from "../../i18n";
const i18nNamespaces = ["home", "common"];

export default async function Works({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <Hero>Works </Hero>
      </main>
    </TranslationsProvider>
  );
}
