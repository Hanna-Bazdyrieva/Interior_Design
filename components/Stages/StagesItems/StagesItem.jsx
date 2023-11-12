import React from "react";
import s from "./StagesItem.module.css";
import Image from "next/image";

function StagesItem({ link, number, text, title }) {
	return (
		<li className={s.item}>
			<div className={s.number}>{number}</div>
			<div className={s.wrap}>
				<h4 className={s.title}>{title}</h4>
				<p>{text}</p>
				<div className={s.imgWrap}>
					<Image
						className={s.image}
						src={`/images/stages/step${number}.jpg`}
						alt={title}
						width={400}
						height={267}
						quality={80}
					/>
				</div>
			</div>
			{/* <a className={s.buttonLink} href={link}>
				<div className={s.button}>See example </div>
			</a> */}
		</li>
	);
}

export default StagesItem;
