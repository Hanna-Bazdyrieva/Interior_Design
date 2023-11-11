import React from "react";
import Image from "next/image";
import { Button, ImgBorder, Title } from "..";
import StagesBenefits from "./StagesBenefits/StagesBenefits";
import StagesItem from "./StagesItems/StagesItem";
import { stages } from "./StagesTexts";
import s from "./Stages.module.css";

function Stages({ staticData: { title, stagesList, stagesBtn } }) {
	return (
		<section className="section" id="stages">
			<div className={`container ${s.stagesContainer}`}>
				<Title id="stages">{title}</Title>

				<div className={s.stepsInfo}>
					{/* <h3 className={s.infoTitle}>
						6 steps to the project you are dreaming about, that will save you
						few monthes of construction and a lot of money
					</h3> */}
					<ul className={s.stepsList}>
						{stagesList.map(({ stageNumber, stageTitle, stageText }) => (
							<StagesItem
								key={stageNumber}
								number={stageNumber}
								title={stageTitle}
								text={stageText}
								link=""
							/>
						))}

						<li className={s.stagesBtnWrap}>
							<Button>{stagesBtn}</Button>
						</li>
					</ul>
				</div>

				{/* <div className={s.generalInfo}>
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
				</div> */}
			</div>
		</section>
	);
}

export default Stages;
