import React from "react";
import s from "./Footer.module.css";
import { Logo, Socials } from "..";
import Link from "next/link";

function Footer({ staticData, lang }) {
	const { navigation, workingHours, contacts, siteDevelopment } = staticData;
	const { phone, email } = contacts;

	return (
		<>
			<footer className={`${s.section} section`} id="contacts">
				<div className={`${s.container} container`} data-aos="fade-up">
					{/* <div className={s.imgWrap}>
						<img className={s.image} src="https://fakeimg.pl/100x130" alt="" />
						<img className={s.image} src="https://fakeimg.pl/100x130" alt="" />
						<img className={s.image} src="https://fakeimg.pl/100x130" alt="" />
					</div> */}
					{/* <div className={s.textContainer}>
						<h3 className={s.text}>For more details &nbsp;</h3>
						<h3 className={s.text}>and to order a project:</h3>
					</div> */}
					<div className={s.wrap}>
						<ul className={s.contact}>
							<li>
								<a className={s.contactLink} href={`mailto: ${email}`}>
									{email}
								</a>
							</li>
							<li>
								<a
									className={`${s.contactLink} ${s.navLink}`}
									href={`tel: ${phone}`}
								>
									{phone}
								</a>
							</li>
							<li className={s.hours}>
								<div className={s.greenCircle}></div>
								<p className={s.hoursText}>
									<span>{workingHours.top}</span>
									<span>{workingHours.bottom}</span>
								</p>
							</li>
							<li>
								<Socials />
							</li>
						</ul>

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
					</div>
					<div className={s.logoWrap}>
						<div className={s.logoWrapTop}>
							<Logo />
						</div>
						<div className={s.bottomWrap}>
							{/* <Link href="/policy">Confidenciality Policy</Link> */}

							<a
								className={s.devLink}
								href="https://github.com/Hanna-Bazdyrieva"
								target="_blank"
								rel="noopener noreferrer"
							>
								{siteDevelopment}
							</a>
						</div>
					</div>
				</div>
			</footer>
			<section className={` ${s.footerImgSection}`} />
		</>
	);
}

export default Footer;
