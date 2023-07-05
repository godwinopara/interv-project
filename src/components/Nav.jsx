import Logo from "../assets/logo.svg";
import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<div className="container">
			<div className={styles.nav__wrapper}>
				<a href="/">
					<img src={Logo} alt="logo" className={styles.logo} />
				</a>
				<nav>
					<ul className={styles.navigations}>
						<li>
							<a href="#history">01. HISTORY</a>
						</li>
						<li>
							<a href="#team">02. TEAM</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
