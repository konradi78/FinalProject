import classes from "./Category.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Navigation} from "swiper/modules";

function CategoryList() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <section className={classes.categoriesSamples}>
      <div className={classes.title}>
        <h4>Categories</h4>
        <div className={classes.line}></div>
        <Link className={classes.link}to="/categories">All categories</Link>
      </div>
      <div className={classes.slider}>
        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <ul className={classes.categoryWrapper}>
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.id} >
                <CategoryCard key={category.id} {...category} />
              </SwiperSlide>
            );
          })}
        </ul>
      </Swiper>
      </div>
      <ul className={classes.categoryMobileWrapper}>
          {categories.map((category) => <CategoryCard key={category.id} {...category} />)}
      </ul>
      <Link className={classes.mobileLink} to="/categories">All categories</Link>
    </section>
  );
}
export default CategoryList;
