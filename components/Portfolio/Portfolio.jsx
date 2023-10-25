import React from "react";
import Image from "next/image";

import s from "./Portfolio.module.css";
import { GalleryItem } from "..";

function Portfolio() {
	return (
		<section className="section" id="portfolio">
			<div className="container">
				<h2 className={s.header}>Portfolio</h2>
				<GalleryItem items={[2, 3]} />
				<GalleryItem items={[5, 4]} reverse />
				<GalleryItem items={[6, 7]} />
				<GalleryItem items={[9, 8]} reverse />
			</div>
		</section>
	);
}

export default Portfolio;
