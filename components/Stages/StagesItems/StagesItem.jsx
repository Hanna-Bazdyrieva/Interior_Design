import React from "react";
import s from "./StagesItem.module.css";
import Image from "next/image";

function StagesItem({ link, number, title }) {
	return (
		<li className={s.item}>
			<div className={s.number}>{number}</div>
			<h4 className={s.title}>{title}</h4>
			<div className={s.imgWrap}>
				<Image
					className={s.image}
					src={`/images/step${number}.png`}
					alt={title}
					width={640}
					height={480}
					priority
				/>
			</div>
			<a className={s.buttonLink} href={link}>
				<div className={s.button}>See example </div>
			</a>
		</li>
	);
}

export default StagesItem;
