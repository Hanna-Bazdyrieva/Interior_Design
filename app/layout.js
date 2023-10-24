import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
	title: "Interior Designer Alexandra Vasylevska",
	description: "Modern design for busy people",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
