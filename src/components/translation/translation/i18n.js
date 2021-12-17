import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import TranslationHeaderEN from "../locales/en/TranslationHeader.json";

import TranslationHeaderVI from "../locales/vi/TranslationHeader.json";

// the translations
const resources = {
	en: {
		translation: {
			...TranslationHeaderEN,
		},
	},
	vi: {
		translation: {
			...TranslationHeaderVI,
		},
	},
};

i18n.use(Backend)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "vi",
		debug: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
