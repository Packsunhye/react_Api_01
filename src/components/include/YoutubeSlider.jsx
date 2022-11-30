import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function GameRandom({ game }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${game.id.videoId}`}>
        <img
          src={game.snippet.thumbnails.medium.url}
          alt={game.snippet.channelTitle}
        />
        <em>
          <span>{game.snippet.title}</span>
        </em>
      </a>
    </li>
  );
}

function YoutubeSlider({ youtubeGame }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <section className="cont__youtube">
          <div className="container">
            <div className="youtube__random">
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
