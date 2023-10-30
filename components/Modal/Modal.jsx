"use client";

import { Dialog } from "@headlessui/react";
import { useRef } from "react";

import s from "./Modal.module.css";
import { useRouter } from "next/navigation";

function Modal({ onClose = () => {}, children }) {
	let overlayRef = useRef();
	const router = useRouter();

	return (
		<Dialog
			static
			open={true}
			onClose={() => {
				router.push("/");
			}}
			initialFocus={overlayRef}
			className={s.dialog}
		>
			<Dialog.Overlay ref={overlayRef} className={s.overlay} />
			<div className={s.imgContainer}>{children}</div>
		</Dialog>
	);
}

export default Modal;

// function Modal({ closeModal }) {
// 	return (
// 		<div className={s.backdrop}>
// 			<div className="modal">
// 				<button
// 					type="button"
// 					className="close-button"
// 					onClick={() => closeModal(false)}
// 				>
// 					<svg className="close-button__icon" width="11" height="11">
// 						<use href="/icons/icons.svg#icon-close"></use>
// 					</svg>
// 				</button>
// 				{/* <form
// 					className="order js-speaker-form"
// 					name="order-form"
// 					autocomplete="on"
// 				>
// 					<p className="order__title">Залиште свої дані, ми вам передзвонимо</p>
// 					<div className="order__container">
// 						<div className="order__field-wrap">
// 							<label className="order__label" for="name">
// 								Ім'я
// 							</label>
// 							<input
// 								className="order__field"
// 								type="text"
// 								id="name"
// 								name="name"
// 							/>
// 							<span className="order__icon-wrap">
// 								<svg className="order__icon" width="18" height="18">
// 									<use href="./images/icons.svg#icon-person"></use>
// 								</svg>
// 							</span>
// 						</div>
// 						<div className="order__field-wrap">
// 							<label className="order__label" for="telephone">
// 								Телефон
// 							</label>
// 							<input
// 								className="order__field"
// 								type="tel"
// 								id="telephone"
// 								name="telephone"
// 							/>
// 							<div className="order__icon-wrap">
// 								<svg className="order__icon" width="18" height="18">
// 									<use href="./images/icons.svg#icon-telephone"></use>
// 								</svg>
// 							</div>
// 						</div>
// 						<div className="order__field-wrap">
// 							<label className="order__label" for="email">
// 								Пошта
// 							</label>
// 							<input
// 								className="order__field"
// 								type="email"
// 								id="email"
// 								name="email"
// 							/>
// 							<div className="order__icon-wrap">
// 								<svg className="order__icon" width="18" height="18">
// 									<use href="./images/icons.svg#icon-email"></use>
// 								</svg>
// 							</div>
// 						</div>
// 						<label className="order__label" for="comment">
// 							Коментар
// 						</label>
// 						<textarea
// 							className="order__comment"
// 							id="comment"
// 							name="comment"
// 							rows="5"
// 							placeholder="Введіть текст"
// 						></textarea>
// 					</div>
// 					<label className="checkbox__label" for="agreement">
// 						<input
// 							className="checkbox__field visually-hidden"
// 							id="agreement"
// 							type="checkbox"
// 							name="agreement"
// 							value="agreed"
// 						/>

// 						<svg className="checkbox__icon" width="16" height="15">
// 							<use href="./images/icons.svg#icon-check"></use>
// 						</svg>
// 						<span className="checkbox__text-wrap">
// 							Погоджуюся з розсилкою та приймаю
// 							<a className="checkbox__agreement-link" href="">
// 								{" "}
// 								Умови договору
// 							</a>
// 						</span>
// 					</label>
// 					<button className="order__button button" type="submit">
// 						Відправити
// 					</button>
// 				</form> */}
// 			</div>
// 		</div>
// 	);
// }

// export default Modal;
