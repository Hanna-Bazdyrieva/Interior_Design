import React from "react";
import s from "./ImgBorder.module.css";

function ImgBorder({ children }) {
	return <div className={s.imgContainer}>{children}</div>;
}

export default ImgBorder;
