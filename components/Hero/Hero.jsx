import React from "react";
import s from "./Hero.module.css";
import { Button, ImageDetail, ImgBorder, Modal } from "..";
import Image from "next/image";

function Hero() {
	return (
		<>
			<section className={`section ${s.heroSection}`} id="main">
				<a href="" id="main" className="anchor"></a>

				<div className={`container ${s.container}`}>
					<div className={s.wrap}>
						<div className={s.portrateBlock}>
							<div className={s.portraitInfo}>
								<h3 className={s.portraitInfo_name}>Oleksandra Vasylevska</h3>
								<p className={s.portraitInfo_title}>interior designer</p>
							</div>
							<div className={s.portraitLocation}>
								<svg className={s.portraitLocation_icon} width="20" height="20">
									<use href="/icons/icons.svg#location2"></use>
								</svg>
								<div className={s.portraitLocation_text}>
									<p>Located in St.Albans</p>
									<p>United Kingdom</p>
								</div>
							</div>

							<div className={s.portraitContainer}>
								{/* <Image
									className={s.portrait}
									src="/images/portrait.jpg"
									layout="fill"
									sizes="(min-width: 480px) 300px,
                    (min-width: 1280px) 400px,
                    160px"
								/> */}
								<img
									className={s.portrait}
									srcSet=" images/portrait_mob.jpg 200w, images/portrait_tab.jpg 300w, images/portrait.jpg 400w "
									src="images/portrait_mob.jpg"
								/>
							</div>
						</div>
						<div className={s.infoWrap}>
							<div className={s.profileInfo}>
								<h1 className={s.title}>
									Creating custom designs for people who value their time
								</h1>
								<p className={s.subTitle}>
									I'll provide a step-by-step plan from idea to renovation
									implementation during a free consultation{" "}
								</p>
								{/* <p className={s.subTitle}>Get it on the FREE online meeting</p> */}
							</div>
							<div className={s.buttonNoteWrap}>
								<Button>Get a Consultation</Button>
								<div className={s.consultNote}>
									<svg className={s.consultIcon} width="20" height="20">
										<use href="/icons/icons.svg#icon-clock"></use>
									</svg>
									<div>
										<p className={s.consultNoteText}>
											The consultation lasts 20 minutes
										</p>
										<p className={s.consultNoteText}>
											and does not obligate you to anything
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className={s.imageBigWrap}>
					</div> */}
				</div>
			</section>
			<section className={` ${s.heroImgSection}`} />
		</>
	);
}

export default Hero;
