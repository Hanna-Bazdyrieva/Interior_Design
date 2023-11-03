import Link from "next/link";
import Image from "next/image";
import s from "./page.module.css";
import { Footer, Header } from "@/components";

export default function PolicyPage() {
	return (
		<>
			<div className={s.container}>
				<h2 className={s.title}>POLICY</h2>
				{/* <Link href="/" className={s.backBtn}>
				<svg className={s.backIcon} width="20" height="20">
					<use href="/icons/icons.svg#icon-arrow-left"></use>
				</svg>
				<p className={s.btnText}>Back</p>
			</Link>

			<Image
				className={s.biggerImg}
				src={`/images/portfolio/${id}.jpg`}
				alt={`Interior Design ${id}`}
				width={1200}
				height={200}
				priority
			/> */}
			</div>
		</>
	);
}
