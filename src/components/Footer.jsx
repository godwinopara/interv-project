import Logo from "../assets/logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.footer__wrapper}`}>
				<a href="/">
					<img src={Logo} alt="logo" />
					<h2>
						<span>LOSANGELES</span>
						<span>MOUNTAIN</span>
					</h2>
				</a>

				<div>
					<p>COPYRIGHT 2023. ALL RIGHT RESERVED.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
