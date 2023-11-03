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
				<Title id="stages">Stages of Work</Title>

				<div className={s.stepsInfo}>
					{/* <h3 className={s.infoTitle}>
						6 steps to the project you are dreaming about, that will save you
						few monthes of construction and a lot of money
					</h3> */}
					<ul className={s.stepsList}>
						<StagesItem
							number={1}
							title="Introduction"
							text="Consulting online. We discuss your general interior preferences"
							link=""
						/>
						<StagesItem
							number={2}
							title="Contract Signing"
							text="We sign a contract. Fill out a questionnaire to consider all your wishes regarding the interior: room functionality, style, color solutions"
							link=""
						/>
						<StagesItem
							number={3}
							title="Object Measurements"
							text="I take measurements of your site"
							link=""
						/>
						<StagesItem
							number={4}
							title="Layout Solution"
							text="I create three layout options for furniture arrangement with the refinement of the chosen one"
							link=""
						/>
						<StagesItem
							number={5}
							title="Design Concept"
							text="I develop a custom design concept that reflects the overall stylistic of the interior and color solutions. I present it in the form of collages for each room"
							link=""
						/>
						<StagesItem
							number={6}
							title="3D Visualization"
							text="I create photorealistic 3D images. I elaborate the interior in a real space"
							link=""
						/>
						<StagesItem
							number={7}
							title="Working Drawings"
							text="I prepare a full set of drawings to implement the design project"
							link=""
						/>
						<StagesItem
							number={8}
							title="Specification"
							text="I make an estimate for finishing materials, furniture items, lighting with price indications and stores. I take into account your budget"
							link=""
						/>
						<StagesItem
							number={9}
							title="Design Project"
							text="I send you the design project in digital format and a paper copy for your builders"
							link=""
						/>
						<li className={s.stagesBtnWrap}>
							{" "}
							<Button>Get a Consultation</Button>
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
