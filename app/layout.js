import { Roboto } from "next/font/google";
// import { Onest } from "next/font/google";

import "./globals.css";
import { Footer, Header } from "@/components";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });
// const onest = Onest({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
	title: "Interior Designer Alexandra Vasylevska",
	description: "Modern design for busy people",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className} suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
