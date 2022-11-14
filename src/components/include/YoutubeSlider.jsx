import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination /*Autoplay*/ } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function GameRandom({ game }) {
  return (
    <li>
      <img
        src={game.snippet.thumbnails.medium.url}
        alt={game.snippet.channelTitle}
      />
      <em>
        <span>{game.snippet.title}</span>
      </em>
    </li>
  );
}

function YoutubeSlider({ youtubeGame }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={false}
        modules={[EffectCoverflow, Pagination /*Autoplay*/]}
        className="mySwiper"
      >
        <section className="cont__youtube">
          <div className="container">
            <div className="usplash__random">
              <ul>
                {youtubeGame.map((game, index) => (
                  <SwiperSlide>
                    <GameRandom key={index} game={game} />
                  </SwiperSlide>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Swiper>
    </>
  );
}

export default YoutubeSlider;
