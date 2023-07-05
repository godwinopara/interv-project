import Logo from "../assets/logo.svg";
import styles from "./StickyNav.module.css";

const StickyNav = () => {
	const links = ["01. HISTORY", "02. TEAM"];
	return (
		<div className={styles.nav__wrapper}>
			<div className={`${styles.sticky__nav__wrapper} container `}>
				<a href="/">
					<img src={Logo} alt="logo" />
					<h2>
						<span>LOSANGELES</span>
						<span>MOUNTAIN</span>
					</h2>
				</a>
				<nav>
					<ul className={styles.navigations__wrapper}>
						{links.map((link, id) => {
							return (
								<li key={id}>
									<a href="#history">{link}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default StickyNav;
