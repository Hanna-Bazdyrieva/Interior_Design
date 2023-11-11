import React from "react";
import s from "./Title.module.css";

function Title({ children }) {
	return (
		// <h2 className={`${s.title} animate__animated animate__slideInLeft `}>
		<h2 className={s.title} data-aos="fade-right">
			{children}
		</h2>
	);
}

export default Title;
