"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "./LocaleSwitcher.module.css";

function LocaleSwitcher({ locales, lang }) {
	// console.log("locales, lang", locales, lang);
	const pathName = usePathname();

	const redirectedPathName = (locale) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = locale;
		return segments.join("/");
	};

	return (
		<ul className={s.langList}>
			{locales.map((locale) => {
				// console.log("localr lang", locale, lang);
				if (locale === lang) {
					return (
						<li className={s.langItem} key={locale}>
							<Link
								href={redirectedPathName(locale)}
								className={`${s.langLink} ${s.inactive}`}
							>
								{locale}
							</Link>
						</li>
					);
				}
				return (
					<li className={s.langItem} key={locale}>
						<Link href={redirectedPathName(locale)} className={s.langLink}>
							{locale}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default LocaleSwitcher;
