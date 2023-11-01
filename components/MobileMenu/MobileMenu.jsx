import React from "react";
import s from "./MobileMenu.module.css";
import { Socials } from "..";

function MobileMenu({ setMenu }) {
	return (
		<div className={s.menu}>
			<button
				type="button"
				className={s.menuBtnClose}
				onClick={() => setMenu(false)}
			>
				<svg width="40" height="40">
					<use href="/icons/icons.svg#icon-close_40"></use>
				</svg>
			</button>
			<div className={s.logo}>
				<a href="#main" className={s.navLink}>
					<h3 className={s.logoName}>Aleksandra Vasylevska</h3>
					<p className={s.logoTitle}>Interior Designer</p>
				</a>
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li>
						<a href="#portfolio" className={s.navLink}>
							Portfolio
						</a>
					</li>
					<li>
						<a href="#stages" className={s.navLink}>
							Stages
						</a>
					</li>
					<li>
						<a href="#prices" className={s.navLink}>
							Prices
						</a>
					</li>
					<li>
						<a href="#contacts" className={s.navLink}>
							Contacts
						</a>
					</li>
				</ul>
				<a className={`${s.phone} ${s.navLink}`} href="tel:+380677870178">
					38-067-7870178
				</a>
			</nav>

			<Socials />
		</div>
	);
}

export default MobileMenu;

// function MobileMenu({ setMenu }) {
// 	return (
// 		<div className="menu__container">
// 			<div className="menu__wrap container">
// 				<div className="menu__top-wrap">
// 					<button
// 						type="button"
// 						className="menu__btn-close"
// 						onClick={() => setMenu(false)}
// 					>
// 						<svg width="40" height="40">
// 							<use
// 								className="menu__icon--close"
// 								href="/icons/icons.svg#icon-close_40"
// 							></use>
// 						</svg>
// 					</button>
// 					<ul className="menu__navigation">
// 						<li className="menu__item">
// 							<a
// 								href="/"
// 								className={
// 									pathname === "/"
// 										? "menu__link menu__link--current"
// 										: "menu__link"
// 								}
// 							>
// 								Студія
// 							</a>
// 						</li>
// 						<li className="menu__item">
// 							<a
// 								href="/portfolio"
// 								className={
// 									pathname === "/portfolio"
// 										? "menu__link menu__link--current"
// 										: "menu__link"
// 								}
// 							>
// 								Портфоліо
// 							</a>
// 						</li>
// 						<li className="menu__item">
// 							<a href="/" className="menu__link">
// 								Контакти
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 				<div className="menu__bottom-wrap">
// 					<ul className="menu__contacts">
// 						<li className="menu__element">
// 							<a
// 								className="menu__note menu__note--tel"
// 								href="tel:+380961111111"
// 							>
// 								+38 096 111 11 11
// 							</a>
// 						</li>
// 						<li className="menu__element">
// 							<a
// 								className="menu__note menu__note--email"
// 								href="mailto:info@devstudio.com"
// 							>
// 								info@devstudio.com
// 							</a>
// 						</li>
// 					</ul>
// 					<ul className="menu__social-list">
// 						<li className="menu__soc-item">
// 							<a href="" className="menu__soc-link">
// 								{" "}
// 								Instagram{" "}
// 							</a>
// 						</li>
// 						<li className="menu__soc-item">
// 							<a href="" className="menu__soc-link">
// 								{" "}
// 								Twitter{" "}
// 							</a>
// 						</li>
// 						<li className="menu__soc-item">
// 							<a href="" className="menu__soc-link">
// 								{" "}
// 								Facebook{" "}
// 							</a>
// 						</li>
// 						<li className="menu__soc-item">
// 							<a href="" className="menu__soc-link">
// 								{" "}
// 								LinkedIn{" "}
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
