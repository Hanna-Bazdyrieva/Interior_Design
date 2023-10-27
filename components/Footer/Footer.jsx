import React from "react";
import s from "./Footer.module.css";
import { Socials } from "..";

function Footer() {
	return (
		<footer className={`${s.section} section`} id="contacts">
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
				<Socials />
			</div>
		</footer>
	);
}

export default Footer;
