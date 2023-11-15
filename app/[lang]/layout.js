import { Roboto } from "next/font/google";
// import { Onest } from "next/font/google";

import { Footer, Header, FacebookPixel } from "@/components";
// import { Footer, Header } from "./components";

import { getDictionary } from "@/utils/dictionaries";
import "./globals.css";
import { i18n } from "@/i18n.config";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
// const onest = Onest({ subsets: ["latin"], weight: ["400", "500", "600"] });

// export const metadata = {
// 	title: "Interior Designer Alexandra Vasylevska",
// 	description: "Modern design for busy people",
// };

export async function generateMetadata({ params }) {
	// console.log("layout", params);
	const { meta } = await getDictionary(params.lang);
	const { metadata, twitter, openGraph } = meta;

	return {
		title: metadata.title,
		description: metadata.description,
		metadataBase: new URL(metadata.base),
		// alternates: {
		// 	canonical: process.env.NEXT_PUBLIC_SITE_URL,
		// 	languages: {
		// 		"uk-UA": "/uk",
		// 		"en-US": "/en",
		// 	},
		// },
		keywords: metadata.keywords,
		// twitter,
		// openGraph,
	};
}

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
	// console.log("Layout params", params);

	const { lang } = params;
	// console.log("Layout lang", lang);
	const { header, footer } = await getDictionary(lang);

	return (
		<html lang={lang}>
			<body className={roboto.className} suppressHydrationWarning={true}>
				<Header staticData={header} lang={lang} />
				{children}
				<Footer staticData={footer} lang={lang} />
				<FacebookPixel />
			</body>
		</html>
	);
}
