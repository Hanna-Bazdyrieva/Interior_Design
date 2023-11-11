import React from "react";
import s from "./Hero.module.css";
import { Button, ImageDetail, ImgBorder, Modal } from "..";
import Image from "next/image";

function Hero({ staticData }) {
	const { title, text, consultBtn, location, portrait } = staticData;
	const { buttonText, buttonNotes } = consultBtn;
	const { city, country } = location;
	const { alt, portraitName, portraitTitle } = portrait;

	return (
		<>
			<section className={`section ${s.heroSection}`} id="main">
				<a href="" id="main" className="anchor"></a>

				<div className={`container ${s.container}`}>
					<div className={s.wrap}>
						<div className={s.portrateBlock}>
							<div className={s.portraitInfo}>
								<h3 className={s.portraitInfo_name}>{portraitName}</h3>
								<p className={s.portraitInfo_title}>{portraitTitle}r</p>
							</div>
							<div className={s.portraitLocation}>
								<svg className={s.portraitLocation_icon} width="20" height="20">
									<use href="/icons/icons.svg#location2"></use>
								</svg>
								<div className={s.portraitLocation_text}>
									<p>{city}</p>
									<p>{country}</p>
								</div>
							</div>

							<div className={s.portraitContainer}>
								<img
									className={s.portrait}
									srcSet=" images/portrait_mob.jpg 200w, images/portrait_tab.jpg 300w, images/portrait.jpg 400w "
									src="images/portrait_mob.jpg"
								/>
							</div>
						</div>
						<div className={s.infoWrap}>
							<div className={s.profileInfo}>
								<h1 className={s.title} data-aos="fade-down-right">
									{title}
								</h1>
								<p className={s.subTitle}>{text}</p>
								{/* <p className={s.subTitle}>Get it on the FREE online meeting</p> */}
							</div>
							<div className={s.buttonNoteWrap}>
								<Button>{buttonText}</Button>
								<div className={s.consultNote}>
									<svg className={s.consultIcon} width="20" height="20">
										<use href="/icons/icons.svg#icon-clock"></use>
									</svg>
									<div>
										<p className={s.consultNoteText}>{buttonNotes.top}</p>
										<p className={s.consultNoteText}>{buttonNotes.bottom} </p>
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
