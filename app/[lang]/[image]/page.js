import Link from "next/link";
import Image from "next/image";
import s from "./page.module.css";

export default function ImagePage({ params: image }) {
	const id = image.image;

	return (
		<div className={s.container}>
			<h2 className={s.title}>{`${id} Project`}</h2>
			<Link href="/" className={s.backBtn}>
				<svg className={s.backIcon} width="20" height="20">
					<use href="/icons/icons.svg#icon-arrow-left"></use>
				</svg>
				<p className={s.btnText}>Back</p>
			</Link>

			<Image
				className={s.biggerImg}
				src={`/images/portfolio/${id}.jpg`}
				alt={`Interior Design ${id}`}
				width={1200}
				height={200}
				priority
			/>

			{/* <div className="absolute inset-0">
				<div className="flex items-center justify-center h-screen">
					<div className="w-1/2">
						<ImageDetail image={image} />
					</div>
				</div>
			</div> */}
		</div>
	);
}

// export function getStaticPaths() {
// 	return {
// 		paths: [
// 			// { params: { image: "1" } },
// 			{ params: { image: "2" } },
// 			{ params: { image: "3" } },
// 			// { params: { image: "4" } },
// 			// { params: { image: "5" } },
// 			// { params: { image: "6" } },
// 		],
// 		fallback: "blocking",
// 	};
// }

// export function getStaticProps(context) {
// 	return {
// 		props: {
// 			image: context.params.image,
// 		},
// 	};
// }

// function BackIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       {...props}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M10 19l-7-7m0 0l7-7m-7 7h18"
//       />
//     </svg>
//   );
// }
