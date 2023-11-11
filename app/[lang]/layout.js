import { Roboto } from "next/font/google";
// import { Onest } from "next/font/google";

import { Footer, Header } from "@/components";
// import { Footer, Header } from "./components";

import { getDictionary } from "@/utils/dictionaries";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
// const onest = Onest({ subsets: ["latin"], weight: ["400", "500", "600"] });

// export const metadata = {
// 	title: "Interior Designer Alexandra Vasylevska",
// 	description: "Modern design for busy people",
// };

export async function generateMetadata({ params }) {
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

export default async function RootLayout({ children, params }) {
	const { lang } = params;
	const { header, footer } = await getDictionary(lang);

	return (
		// <html lang="en">
		<html lang={lang}>
			<body className={roboto.className} suppressHydrationWarning={true}>
				<Header staticData={header} lang={lang} />
				{children}
				<Footer staticData={footer} lang={lang} />
			</body>
		</html>
	);
}
