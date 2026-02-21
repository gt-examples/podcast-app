const translations: Record<string, () => Promise<Record<string, unknown>>> = {
  de: () => import("../public/locales/de.json").then((m) => m.default),
  es: () => import("../public/locales/es.json").then((m) => m.default),
  fr: () => import("../public/locales/fr.json").then((m) => m.default),
  ja: () => import("../public/locales/ja.json").then((m) => m.default),
  zh: () => import("../public/locales/zh.json").then((m) => m.default),
};

export default async function loadTranslations(locale: string) {
  const loader = translations[locale];
  if (!loader) return {};
  return loader();
}
