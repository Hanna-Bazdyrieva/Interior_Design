import React from "react";
import s from "./PricesOption.module.css";
import { Button } from "..";

function PricesOption({ title, keyProp, price }) {
	const details = ["first detail", "second detail", "3 detail", "4 detail"];
	return (
		<li key={keyProp} className={s.option}>
			<h3 className={s.optionTitle}>{title}</h3>
			<h4 className={s.optionPrice}>{price} &euro;</h4>
			<ul className={s.optionDetailsList}>
				{details.map((detail, i) => (
					<li key={i} className={s.optionDetail}>
						{detail}
					</li>
				))}
			</ul>
			<Button>Order</Button>
		</li>
	);
}

export default PricesOption;
