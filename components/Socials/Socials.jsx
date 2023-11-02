import React from "react";
import s from "./Socials.module.css";

function Socials() {
	return (
		<div>
			<ul className={s.socials}>
				<li className={s.socialsItem}>
					<a href="" className={s.socialsLink}>
						<svg className={s.socialsIcon} width="20" height="20">
							<use href="/icons/icons.svg#instagram"></use>
						</svg>
					</a>
				</li>
				<li className={s.socialsItem}>
					<a href="" className={s.socialsLink}>
						<svg className={s.socialsIcon} width="20" height="20">
							<use href="/icons/icons.svg#facebook"></use>
						</svg>
					</a>
				</li>
				<li className={s.socialsItem}>
					<a href="" className={s.socialsLink}>
						<svg className={s.socialsIcon} width="20" height="20">
							<use href="/icons/icons.svg#whatsapp"></use>
						</svg>
					</a>
				</li>
				<li className={s.socialsItem}>
					<a href="" className={s.socialsLink}>
						<svg className={s.socialsIcon} width="20" height="20">
							<use href="/icons/icons.svg#telegram"></use>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;
