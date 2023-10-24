import React from "react";
import s from "./Button.module.css";

function Button({ children }) {
	return (
		<div className={s.buttonWrap}>
			<a className={s.buttonLink} href="">
				{children}
			</a>
		</div>
	);
}

export default Button;
