import React from "react";
import s from "./Hero.module.css";

function Hero() {
	return (
		<section>
			<div className="container">
				<div className={s.wrap}>
					<div className={s.portrateBlock}>
						<div className={s.portraitInfo}>
							<h3 className={s.portraitInfo_name}>Alexandra Vasylevska</h3>
							<p className={s.portraitInfo_title}>Interior Designer</p>
						</div>

						<div className={s.portraitContainer}>
							<img className={s.image} src="images/sasha.jpg" />
						</div>
					</div>
					<div className={s.profileInfo}>
						<h1 className={s.title}>Create unique design for busy people</h1>
						<p className={s.subTitle}>
							Step-by-step plan, from the Idea to Realizaton. Get it on the FREE
							online consultation
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
