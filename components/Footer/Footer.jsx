import React from "react";
import s from "./Footer.module.css";

function Footer() {
	return (
		<footer className={`${s.section} section`}>
			<div className="container">
				<div className={s.headerContainer}>
					<h3 className={s.header}>Get all the information&nbsp;</h3>
					<h3 className={s.header}>and order your design project</h3>
				</div>
				<div className={s.contact}>
					<a className={s.contactLink} href="tel:+380675555555">
						38-067--555-5555
					</a>
					<a className={s.contactLink} href="mailto: abc@example.com">
						abc@example.com
					</a>
				</div>
				<ul className={s.socials}>
					<li className={s.socialsItem}>
						<a href="" className={s.socialsLink}>
							<svg className={s.socialsIcon} width="20" height="20">
								<use href="/icons/icons.svg#instagram"></use>
							</svg>
						</a>
					</li>
					<li className={s.socialsItem}>
						<a href="" className={s.socialsLink}>
							<svg className={s.socialsIcon} width="20" height="20">
								<use href="/icons/icons.svg#facebook"></use>
							</svg>
						</a>
					</li>
					<li className={s.socialsItem}>
						<a href="" className={s.socialsLink}>
							<svg className={s.socialsIcon} width="20" height="20">
								<use href="/icons/icons.svg#twitter"></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
