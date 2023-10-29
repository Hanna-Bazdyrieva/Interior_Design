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
					<GalleryItem images={[1, 2]} />
					<GalleryItem images={[4, 3]} reverse />
					<GalleryItem images={[5, 6]} />
					<GalleryItem images={[8, 7]} reverse />
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
