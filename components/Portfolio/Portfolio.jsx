import React from "react";
import Image from "next/image";

import s from "./Portfolio.module.css";

function Portfolio() {
	return (
		<section className="section">
			<div className="container">
				<h2>Portfolio</h2>
				<Image
					src="/images/photo1.jpg"
					alt="Interior Design"
					// className={styles.vercelLogo}
					width={1200}
					height={200}
					priority
				/>
			</div>
		</section>
	);
}

export default Portfolio;
