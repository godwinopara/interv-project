import styles from "./History.module.css";
import thumbnailImg1 from "../assets/thumbnail1.png";
import thumbnailImg2 from "../assets/thumbnail2.png";
import Carousel from "./Carousel";

const History = () => {
	const images = [
		{ src: thumbnailImg1, alt: "thumbnail of a man standing on a rock" },
		{ src: thumbnailImg2, alt: "thumbnail of a rock covered in with cloud" },
		{ src: thumbnailImg1, alt: "thumbnail of a man standing on a rock" },
		{ src: thumbnailImg2, alt: "thumbnail of a rock covered in with cloud" },
		{ src: thumbnailImg1, alt: "thumbnail of a man standing on a rock" },
		{ src: thumbnailImg2, alt: "thumbnail of a rock covered in with cloud" },
	];

	return (
		<section className={styles.history}>
			<div className="max-w-4xl mx-auto container">
				<h2 className={styles.heading}>
					<span className={styles.heading__number}>01</span>
					<div className={styles.heading__text}>
						<span>HISTORY</span>
						<div className={styles.box}></div>
					</div>
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero aperiam quos vel
					temporibus perspiciatis quis, ad ea velit? Modi perferendis cupiditate nulla libero neque
					eaque debitis inventore quis placeat obcaecati, blanditiis est iste quae distinctio. Sequi
					ut exercitationem ab beatae cumque, aperiam, distinctio tempora inventore perspiciatis
					ratione fugit qui!
				</p>
			</div>
			<div className={styles.thumbnail}>
				{/* <div className={styles.thumbnail__wrapper}>
					<img src={thumbnailImg1} alt="thumbnail of a man standing on a rock" />
					<img src={thumbnailImg2} alt="thumbnail of a rock covered in with cloud" />
					<img src={thumbnailImg1} alt="thumbnail of a man standing on a rock" />
					<img src={thumbnailImg2} alt="thumbnail of a rock covered in with cloud" />
					<img src={thumbnailImg1} alt="thumbnail of a man standing on a rock" />
					<img src={thumbnailImg2} alt="thumbnail of a rock covered in with cloud" />
				</div> */}
				<Carousel images={images} />
			</div>
		</section>
	);
};

export default History;
