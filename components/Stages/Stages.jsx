import React from "react";
import s from "./Stages.module.css";
import { Button, ImgBorder, Title } from "..";
import Image from "next/image";
import StagesBenefits from "./StagesBenefits/StagesBenefits";

function Stages() {
	return (
		<section className="section" id="stages">
			<div className={`container ${s.stagesContainer}`}>
				<Title id="stages">Stages</Title>
				<div className={s.generalInfo}>
					<div className={s.infoWrap}>
						<h3 className={s.infoTitle}>
							You can save up to 400 hours of your time with our service of Full
							Designer's Support
						</h3>
						<p className={s.infoSubtitle}>
							I will attend the renovation / building / construction project,
							keep in touch with workers and suppliers, control the project
							realization
						</p>
					</div>
					<div className={s.imgWrap}>
						<ImgBorder>
							<Image
								className={s.image}
								src="/images/building.jpg"
								alt="Interior Design"
								width={1200}
								height={200}
								priority
							/>
						</ImgBorder>
					</div>
				</div>
				<div className={s.benefits}>
					<StagesBenefits />
					<StagesBenefits />
					<StagesBenefits />
					<StagesBenefits />
				</div>
				<Button>Order meeting</Button>
			</div>
		</section>
	);
}

export default Stages;
