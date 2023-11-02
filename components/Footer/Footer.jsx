import React from "react";
import s from "./Footer.module.css";
import { Socials } from "..";

function Footer() {
	return (
		<footer className={`${s.section} section`} id="contacts">
			<div className="container">
				<div className={s.headerContainer}>
					<h3 className={s.header}>For more details &nbsp;</h3>
					<h3 className={s.header}>and to order a project:</h3>
				</div>
				<div className={s.contact}>
					<a className={s.contactLink} href="tel:+000000000000">
						+000000000000
					</a>
					<a className={s.contactLink} href="mailto: abc@example.com">
						abc@example.com
					</a>
				</div>
				<Socials />
			</div>
		</footer>
	);
}

export default Footer;
