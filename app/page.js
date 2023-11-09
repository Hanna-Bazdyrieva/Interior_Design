"use client";
import styles from "./page.module.css";
import {
	Hero,
	ImageDetail,
	Modal,
	Portfolio,
	Prices,
	Stages,
} from "@/components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home({ searchParams }) {
	const id = searchParams.image;
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<main className={styles.main}>
			<Hero />
			<Portfolio />
			<Stages />
			{/* <Prices /> */}
			{id && (
				<Modal>
					<ImageDetail id={id} />
				</Modal>
			)}
		</main>
	);
}
