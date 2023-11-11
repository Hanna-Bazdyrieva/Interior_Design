import React from "react";
import { Socials } from "..";

import s from "./MobileMenu.module.css";

function MobileMenu({ lang, setMenu, staticData }) {
	const { navigation, workingHours } = staticData;

	return (
		<div className={s.menu}>
			<nav className={s.nav}>
				<ul className={s.navList}>
					{navigation.map((item, i) => {
						const { title, linkTo } = item;
						return (
							<li key={i}>
								<a
									href={`/${lang}/#${linkTo}`}
									className={s.navLink}
									onClick={() => setMenu(false)}
								>
									{title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={s.bottomWrap}>
				<a className={`${s.phone} ${s.navLink}`} href="tel:+000000000000">
					+000000000000
				</a>
				<div className={s.telephoneUnderHours}>
					<div className={s.greenCircle}></div>
					<p className={s.telephoneText}>
						<span>{workingHours.top}</span>
						<span>{workingHours.bottom}</span>
					</p>
				</div>
				<Socials />
			</div>
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
