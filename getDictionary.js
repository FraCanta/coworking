const dictionaries = {
  it: () => import("./dictionaries/it.json").then((r) => r.default),
  en: () => import("./dictionaries/en.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
