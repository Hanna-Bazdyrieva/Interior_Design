"use client";

import React, { useState } from "react";
import s from "./GalleryItem.module.css";
import Image from "next/image";
import Link from "next/link";

function GalleryItem({ images, reverse, lang }) {
	return (
		<>
			<div className={reverse ? `${s.block}  ${s.rev}` : `${s.block}`}>
				<div className={s.biggerChild}>
					<Link href={`/${lang}/?image=${images[0]}`}>
						<Image
							className={s.biggerImg}
							src={`/images/portfolio/${images[0]}.jpg`}
							alt={`Interior Design ${images[0]}`}
							width={1200}
							height={200}
							quality={80}
						/>
					</Link>
				</div>
				<div className={s.smallerChild}>
					<Link href={`/${lang}/?image=${images[1]}`}>
						<Image
							className={s.biggerImg}
							src={`/images/portfolio/${images[1]}.jpg`}
							alt={`Interior Design ${images[1]}`}
							quality={80}
							width={1200}
							height={200}
						/>
					</Link>
				</div>
			</div>
			{/* {isModalOpen && <Modal closeModal={setIsModalOpen} />} */}
		</>
	);
}

export default GalleryItem;
