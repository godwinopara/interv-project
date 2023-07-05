import { useState } from "react";
import styles from "./Climb.module.css";
import Tab from "./Tab";

const Climb = () => {
	const [tabToShow, setTabToShow] = useState({ tab1: true, tab2: false });
	const [accordionToShow, setAccordionToShow] = useState({ accordion1: true, accordion2: false });

	const tab1 = [
		{ date: "25 Nov 2016", text: "Vestibulum viverra" },
		{ date: "28 Nov 2016", text: "Vestibulum viverra" },
		{ date: "18 Dec 2016", text: "Vestibulum viverra" },
		{ date: "7 Jan 2017", text: "Vestibulum viverra" },
	];
	const tab2 = [
		{ date: "17 Nov 2016", text: "Vestibulum viverra" },
		{ date: "13 Dec 2016", text: "Vestibulum viverra" },
		{ date: "28 Dec 2016", text: "Vestibulum viverra" },
		{ date: "9 Feb 2017", text: "Vestibulum viverra" },
	];

	const handleClickToggleTab1 = () => {
		setTabToShow({ tab1: true, tab2: false });
	};

	const handleClickToggleTab2 = () => {
		setTabToShow({ tab1: false, tab2: true });
	};

	const handleClickToggleAccordion1 = () => {
		setAccordionToShow({ accordion1: true, accordion2: false });
	};
	const handleClickToggleAccordion2 = () => {
		setAccordionToShow({ accordion1: false, accordion2: true });
	};

	return (
		<section>
			<div className="container">
				<div className={styles.heading__wrapper}>
					<h2 className={styles.heading}>
						<div className={styles.heading__number}>02</div>
						<div className={styles.heading__text}>
							<span>CLIMB</span>
							<div className={styles.box}></div>
						</div>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste ab eum reiciendis
						repellat quos, animi voluptas veniam nesciunt in?
					</p>
				</div>
			</div>

			{/* Tab */}
			<section className={styles.tab}>
				<div className={styles.tab__wrapper}>
					<ul className={styles.tab__nav} id="myTab" role="tablist">
						<li onClick={handleClickToggleTab1} className={tabToShow.tab1 ? styles.active : ""}>
							MOUNTAIN 1
						</li>
						<li onClick={handleClickToggleTab2} className={tabToShow.tab2 ? styles.active : ""}>
							MOUNTAIN 2
						</li>
					</ul>
				</div>

				{/* Tab content */}
				{tabToShow.tab1 && <Tab contents={tab1} classname={styles.tab1__bgImg} />}
				{tabToShow.tab2 && <Tab contents={tab2} classname={styles.tab2__bgImg} />}
			</section>

			{/* ACCORDION */}
			<section className={`${styles.accordion} container`}>
				<div>
					<button onClick={handleClickToggleAccordion1}>MOUNTAIN 1</button>
					{accordionToShow.accordion1 && <Tab contents={tab1} classname={styles.tab1__bgImg} />}
				</div>
				<div>
					<button onClick={handleClickToggleAccordion2}>MOUNTAIN 2</button>
					{accordionToShow.accordion2 && <Tab contents={tab2} classname={styles.tab2__bgImg} />}
				</div>
			</section>
		</section>
	);
};

export default Climb;
