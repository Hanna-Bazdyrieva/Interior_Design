"use client";

import React, { useState } from "react";
import s from "./GalleryItem.module.css";
import Image from "next/image";
import Link from "next/link";
// import { Modal } from "..";

function GalleryItem({ images, reverse }) {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<div className={reverse ? `${s.block}  ${s.rev}` : `${s.block}`}>
				<div
					className={s.biggerChild}
					// onClick={() => setIsModalOpen(true)}
				>
					<Link href={`/${images[0]}`}>
						<Image
							className={s.biggerImg}
							src={`/images/portfolio/${images[0]}.jpg`}
							alt={`Interior Design ${images[0]}`}
							width={1200}
							height={200}
							priority
						/>
					</Link>
				</div>
				<div className={s.smallerChild}>
					<Link href={`/${images[1]}`}>
						<Image
							className={s.biggerImg}
							src={`/images/portfolio/${images[1]}.jpg`}
							alt={`Interior Design ${images[1]}`}
							width={1200}
							height={200}
							priority
						/>
					</Link>
				</div>
			</div>
			{/* {isModalOpen && <Modal closeModal={setIsModalOpen} />} */}
		</>
	);
}

export default GalleryItem;
