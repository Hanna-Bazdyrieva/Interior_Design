import React from "react";
import s from "./StagesBenefits.module.css";

function StagesBenefits() {
	return (
		<div className={s.benefit}>
			<h4 className={s.title}>
				Benefit and short decsription of what you gget
			</h4>
			<p className={s.text}>
				Detailed description of this super personal benefit Lorem ipsum dolor,
				sit amet consectetur adipisicing elit. Iste, accusantium!
			</p>
		</div>
	);
}

export default StagesBenefits;
