// import 'server-only';
const dictionaries = {
	en: () => import("../dictionaries/en.json").then((module) => module.default),
	ru: () => import("../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (lang) => {
	console.log("getDictionary lang", lang);
	return dictionaries[lang]();
};
