"use client";
import React from "react";
import { useEffect, useState } from "react";
import s from "./Header.module.css";
import { LocaleSwitcher, Logo, MobileMenu } from "..";

function Header({ staticData, lang }) {
	const { locales, navigation, langButton, workingHours } = staticData;

	const [menuOpen, setMenuOpen] = useState(false);
	const useMediaQuery = (m, screen) => {
		const [matches, setMatches] = useState(false);

		useEffect(() => {
			const query = `(${m}-width: ${screen}px)`;
			const media = window.matchMedia(query);
			if (media.matches !== matches) {
				setMatches(media.matches);
			}
			const listener = () => setMatches(media.matches);
			window.addEventListener("resize", listener);
			return () => window.removeEventListener("resize", listener);
		}, [matches, screen]);

		return matches;
	};

	const isSmallScreen = useMediaQuery("max", 768);

	return (
		<header className={s.headerSection}>
			<div className={`container ${s.header}`}>
				{!isSmallScreen && (
					<>
						<Logo />

						<nav className={s.navigation}>
							<ul className={s.navList}>
								{navigation.map((item, i) => {
									const { title, linkTo } = item;
									return (
										<li key={i}>
											<a href={`/${lang}/#${linkTo}`} className={s.navLink}>
												{title}
											</a>
										</li>
									);
								})}
							</ul>
						</nav>
						<ul className={s.telephoneWrap}>
							<li>
								<a
									className={`${s.phone} ${s.navLink}`}
									href="tel:+000000000000"
								>
									+000000000000
								</a>
							</li>
							<li className={s.telephoneUnderHours}>
								<div className={s.greenCircle}></div>
								<p className={s.telephoneText}>
									<span>{workingHours.top}&nbsp;</span>
									<span>{workingHours.bottom}</span>
								</p>
							</li>
						</ul>
						<LocaleSwitcher locales={locales} lang={lang} />
					</>
				)}

				{isSmallScreen && (
					<>
						<Logo />

						<LocaleSwitcher locales={locales} lang={lang} />

						{!menuOpen && (
							<>
								<button
									type="button"
									className={s.menuBtnOpen}
									onClick={() => setMenuOpen(true)}
								>
									<svg className={s.menuBtnOpenIcon} width="40" height="40">
										<use href="/icons/icons.svg#icon-menu"></use>
									</svg>
								</button>
							</>
						)}

						{menuOpen && (
							<>
								<button
									type="button"
									className={s.menuBtnOpen}
									onClick={() => setMenuOpen(false)}
								>
									<svg width="40" height="40">
										<use href="/icons/icons.svg#icon-close_40"></use>
									</svg>
								</button>
								<MobileMenu
									setMenu={setMenuOpen}
									staticData={staticData}
									lang={lang}
								/>
							</>
						)}
					</>
				)}
			</div>
		</header>
	);
}

export default Header;

// function Header1() {
// 	return (
// 		<header className="header">
// 			<div className="container header__container">
// 				<Nav />
// 				<ul className="header__contacts">
// 					<li className="header__element">
// 						<a
// 							className="header__note header__note--tel"
// 							href="mailto:info@devstudio.com"
// 						>
// 							{/* <Image
// 								src="/icons/envelope.svg"
// 								alt="envelop"
// 								width={16}
// 								height={12}
// 								className="header__icon header__icon--email"
// 							/> */}
// 							<svg
// 								className="header__icon header__icon--email"
// 								width="16"
// 								height="12"
// 							>
// 								<use href="/icons/icons.svg#envelope"></use>
// 							</svg>
// 							info@devstudio.com
// 						</a>
// 					</li>
// 					<li className="header__element">
// 						<a
// 							className="header__note header__note--email"
// 							href="tel:+380961111111"
// 						>
// 							<svg
// 								className="header__icon header__icon--tel"
// 								width="10"
// 								height="16"
// 							>
// 								<use href="/icons/icons.svg#smartphone"></use>
// 							</svg>
// 							+38 096 111 11 11
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</header>
// 	);
// }
