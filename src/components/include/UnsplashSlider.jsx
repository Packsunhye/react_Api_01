import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function UnsplashRandom({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.regular} alt={random.urls.alt_description} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <section className="cont__usplash">
          <div className="container">
            <div className="usplash__random">
              <ul>
                {random.map((random, index) => (
                  <SwiperSlide>
                    <UnsplashRandom key={index} random={random} />
                  </SwiperSlide>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Swiper>
    </>
  );
};

export default UnsplashSlider;
