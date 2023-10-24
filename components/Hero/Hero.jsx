import React from "react";
import s from "./Hero.module.css";
import { Button } from "..";

function Hero() {
	return (
		<section className="section">
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
					<div>
						<div className={s.profileInfo}>
							<h1 className={s.title}>Create unique design for busy people</h1>
							<p className={s.subTitle}>
								Step-by-step plan, from the Idea to Realizaton. Get it on the
								FREE online meeting
							</p>
						</div>
						<div className={s.buttonNoteWrap}>
							<Button>Order meeting</Button>
							<div className={s.consultNote}>
								<svg className={s.consultIcon} width="20" height="20">
									<use href="/icons/icons.svg#icon-clock"></use>
								</svg>
								<div>
									<p className={s.consultNoteText}>
										Meeting duration - 20 min.
									</p>
									<p className={s.consultNoteText}>Free. No obligations.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
