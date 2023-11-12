"use client";
import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import {
	Hero,
	ImageDetail,
	Modal,
	Portfolio,
	// Prices,
	Stages,
} from "@/components";

// import {
// 	Footer,
// 	Header,
// 	Hero,
// 	ImageDetail,
// 	Modal,
// 	Portfolio,
// 	Prices,
// 	Stages,
// } from "../[lang]/components";

// import { getDictionary } from "@/utils/dictionaries";

import styles from "./page.module.css";
import { getDictionary } from "@/utils/dictionaries";

export default async function Home({ searchParams, params: { lang } }) {
	const id = searchParams.image;
	const { page } = await getDictionary(lang);
	const { hero, portfolio, stages } = page;

	// useEffect(() => {
	// 	AOS.init({
	// 		duration: 800,
	// 		once: false,
	// 	});
	// }, []);

	return (
		<main className={styles.main}>
			<Hero staticData={hero} />
			<Portfolio staticData={portfolio} lang={lang} />
			<Stages staticData={stages} />
			{/* <Prices /> */}
			{id && (
				<Modal>
					<ImageDetail id={id} />
				</Modal>
			)}
		</main>
	);
}
