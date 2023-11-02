import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import {
	Footer,
	Header,
	Hero,
	ImageDetail,
	Modal,
	Portfolio,
	Prices,
	Stages,
} from "@/components";

export default function Home({ searchParams }) {
	const id = searchParams.image;
	return (
		<main className={styles.main}>
			<Header />
			<Hero />
			<Portfolio />
			<Stages />
			{/* <Prices /> */}
			{id && (
				<Modal>
					<ImageDetail id={id} />
				</Modal>
			)}
			<Footer />
		</main>
	);
}
