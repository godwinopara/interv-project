import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={20}
			slidesPerView={4}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className={styles.image__wrapper}
		>
			{images.map((image) => {
				return (
					<SwiperSlide>
						<img src={image.src} alt={image.alt} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Carousel;
