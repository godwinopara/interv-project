import styles from "./Tab.module.css";

const Tab = ({ contents, classname }) => {
	return (
		<div className={`${classname} ${styles.tab__content__wrapper}`}>
			<div className="container">
				<div className={`${styles.tab__content}`}>
					<h2>SCHEDULE</h2>
					{contents.map((content, id) => (
						<p key={id}>
							{content.date} <span>{content.text}</span>
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tab;
