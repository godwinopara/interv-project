import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
	return (
		<Swiper
			slidesPerView={1}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			breakpoints={{
				768: { slidesPerView: 2, spaceBetween: 20 },
				1024: { slidesPerView: 3, spaceBetween: 20 },
				1100: { slidesPerView: 4, spaceBetween: 20 },
			}}
			className={styles.image__wrapper}
		>
			{images.map((image, id) => {
				return (
					<SwiperSlide key={id}>
						<img src={image.src} alt={image.alt} />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Carousel;
