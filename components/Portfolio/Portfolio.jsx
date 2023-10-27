import React from "react";
import Image from "next/image";

import s from "./Portfolio.module.css";
import { GalleryItem, Title } from "..";

function Portfolio() {
	return (
		<section className="section" id="portfolio">
			<div className={`container ${s.portfolioContainer}`}>
				<Title>Portfolio</Title>
				<div className={s.gallery}>
					<GalleryItem items={[2, 3]} />
					<GalleryItem items={[5, 4]} reverse />
					<GalleryItem items={[6, 7]} />
					<GalleryItem items={[9, 8]} reverse />
				</div>{" "}
			</div>
		</section>
	);
}

export default Portfolio;
