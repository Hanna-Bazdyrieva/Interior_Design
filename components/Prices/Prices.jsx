import React from "react";
import s from "./Prices.module.css";
import { PricesOption, Title } from "..";

function Prices() {
	const pricePlans = [
		{ id: 1, title: "Plan", price: 1000 },
		{ id: 2, title: "Concept", price: 2000 },
		{ id: 3, title: "Project", price: 3000 },
		{ id: 4, title: "Full Board", price: 4000 },
	];
	return (
		<section className="section" id="prices">
			<div className={`container ${s.pricesContainer}`}>
				<Title>Prices</Title>
				<p className={s.pricesSubtitle}>Some important details about plans</p>
				<ul className={s.optionList}>
					{pricePlans.map(({ id, price, title }) => (
						<PricesOption keyProp={id} title={title} price={price} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Prices;
