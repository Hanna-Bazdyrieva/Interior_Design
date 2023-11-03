import React from "react";
import s from "./Logo.module.css";

function Logo() {
	return (
		<div className={s.logo}>
			<a href="/#main" className={s.navLink}>
				<h3 className={s.logoName}>Oleksandra Vasylevska</h3>
				<p className={s.logoTitle}>interior design</p>
			</a>
		</div>
	);
}
export default Logo;
