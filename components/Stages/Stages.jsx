import React from "react";
import s from "./Stages.module.css";
import { Button, ImgBorder, Title } from "..";
import Image from "next/image";
import StagesBenefits from "./StagesBenefits/StagesBenefits";
import StagesItem from "./StagesItems/StagesItem";

function Stages() {
	return (
		<section className="section" id="stages">
			<div className={`container ${s.stagesContainer}`}>
				<Title id="stages">Stages</Title>

				<div className={s.stepsInfo}>
					<h3 className={s.infoTitle}>
						6 steps to the project you are dreaming about, that will save you
						few monthes of construction and a lot of money
					</h3>
					<ul className={s.stepsList}>
						<StagesItem
							number={1}
							title="Consultation and technical assignment"
							link=""
						/>
						<StagesItem number={2} title="Planning solutions" link="" />
						<StagesItem number={3} title="Collages" link="" />
						<StagesItem number={4} title="3D visualization" link="" />
						<StagesItem number={5} title="Charts" link="" />
						<StagesItem
							number={6}
							title="Calculation and specification"
							link=""
						/>
					</ul>
				</div>

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
					<div className={s.benefitPhoto}>
						<img
							className={s.image}
							src={`/images/interior_1.jpg`}
							alt="Interior photo"
						/>
					</div>
					<div className={s.benefitPhoto}>
						<img
							className={s.image}
							src={`/images/interior_2.jpg`}
							alt="Interior photo"
						/>
					</div>
					<StagesBenefits />
					<StagesBenefits />
				</div>
				<Button>Order meeting</Button>
			</div>
		</section>
	);
}

export default Stages;
