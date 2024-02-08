import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <main className="relative  ">
          <h1>Home</h1>
        </main>
      </TranslationsProvider>
    </>
  );
}
