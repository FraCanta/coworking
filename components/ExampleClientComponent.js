"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();
  const userName = "Francesca";

  return <h3>{t("subheader")}</h3>;
}
