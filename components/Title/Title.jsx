import React from "react";
import s from "./Title.module.css";

function Title({ children }) {
	return <h2 className={s.title}>{children}</h2>;
}

export default Title;
