import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function MovieRanks(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movieRank.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movieRank.poster_path}`}
          alt={props.movieRank.title}
        />
        <em>
          <span className="title">{props.movieRank.title}</span>
          {/* <span className="star">{props.movieRank.vote_average}</span> */}
        </em>
      </a>
    </li>
  );
}

const MovieRangKing = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <section className="cont__movie">
          <div className="container">
            <div className="movie__rangk">
              <ul>
                {props.movieRank.map((movieRank, index) => (
                  <SwiperSlide>
                    <MovieRanks key={index} movieRank={movieRank} />
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

export default MovieRangKing;
