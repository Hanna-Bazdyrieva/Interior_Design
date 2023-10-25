import React from "react";
import s from "./GalleryItem.module.css";
import Image from "next/image";

function GalleryItem({ items, reverse }) {
	return (
		<>
			<div className={reverse ? `${s.block}  ${s.rev}` : `${s.block}`}>
				<div className={s.biggerChild}>
					<Image
						className={s.biggerImg}
						src={`/images/photo_${items[0]}.jpg`}
						alt={`Interior Design ${items[0]}`}
						width={1200}
						height={200}
						priority
					/>
				</div>
				<div className={s.smallerChild}>
					<Image
						className={s.smallerImg}
						src={`/images/photo_${items[1]}.jpg`}
						alt={`Interior Design ${items[1]}`}
						width={1200}
						height={200}
						priority
					/>
				</div>
			</div>
		</>
	);
}

export default GalleryItem;
