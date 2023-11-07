import React from "react";
import s from "./Footer.module.css";
import { Logo, Socials } from "..";
import Link from "next/link";

function Footer() {
	return (
		<>
			<footer className={`${s.section} section`} id="contacts">
				<div className={`${s.container} container`}>
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
								<a className={s.contactLink} href="mailto: abc@example.com">
									abc@example.com
								</a>
							</li>
							<li>
								<a
									className={`${s.contactLink} ${s.navLink}`}
									href="tel:+000000000000"
								>
									+000000000000
								</a>
							</li>
							<li className={s.hours}>
								<div className={s.greenCircle}></div>
								<p className={s.hoursText}>
									<span>Mon-Fri</span> <span>9:00am - 4:00pm</span>
								</p>
							</li>
							<li>
								<Socials />
							</li>
						</ul>

						<nav className={s.navigation}>
							<ul className={s.navList}>
								<li>
									<a href="#main" className={s.navLink}>
										Home
									</a>
								</li>
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
								{/* <li>
									<a href="#prices" className={s.navLink}>
										Prices
									</a>
								</li> */}
								<li>
									<a href="#contacts" className={s.navLink}>
										Contacts
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className={s.logoWrap}>
						<div className={s.logoWrapTop}>
							<Logo />
						</div>
						{/* <div className={s.logo}>
							<a href="#main">
								<h3 className={s.logoName}>Oleksandra Vasylevska</h3>
								<p className={s.logoTitle}>interior design</p>
							</a>
						</div> */}
						<div className={s.bottomWrap}>
							{/* <Link href="/policy">Confidenciality Policy</Link> */}

							<a
								href="https://github.com/Hanna-Bazdyrieva"
								target="_blank"
								rel="noopener noreferrer"
							>
								Site development
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
