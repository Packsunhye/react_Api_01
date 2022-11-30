import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Footer from "../layout/Footer";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=m5X4p0LRDwNbADL73ildccDupOKpSuXt5fAabpjBmUI&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log(error));
  };

  //메인
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=m5X4p0LRDwNbADL73ildccDupOKpSuXt5fAabpjBmUI&query=purple&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log(error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=m5X4p0LRDwNbADL73ildccDupOKpSuXt5fAabpjBmUI&query=jellyfish&count=10"
    )
      .then((response) => response.json())
      .then((result) => setRandom(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["unsplash", "reference API"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
