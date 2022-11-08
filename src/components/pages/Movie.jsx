import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import MovieRangKing from "../include/MovieRangKing";
import Contact from "../layout/Contact";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [movieRank, setMoviesRank] = useState([]);

  // 랭킹
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=540588f0940b5e6bdcf873b4608b86f0`)
    .then(response => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setMoviesRank(result.results))
    .catch(error => console.log(error));
  }, []);
  // 서치
  const search = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=${query}`)
    .then(response => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setMovies(result.results))
    .catch(error => console.log(error));
  };
  //메인
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=540588f0940b5e6bdcf873b4608b86f0&query=horror&=1`)
    .then(response => response.json())
    // .then((result) => console.log(result.results))
    .then((result) => setMovies(result.results))
    .catch(error => console.log(error));
  }, []);


  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieRangKing  movieRank={movieRank} />
        <MovieSearch  onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;