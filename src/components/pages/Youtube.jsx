import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Footer from "../layout/Footer";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import YoutubeCont from "../include/YoutubeCont";
import Contact from "../layout/Contact";

const Youtube = () => {
  const [youtubes, setYoutube] = useState([]);
  const [youtubeGame, setGame] = useState([]);

  // 서치
  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBhGXXFW53lMjl6Z7QnRF7eGfkBEFE5IU8&part=snippet&maxResults=30&type=video&q=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBhGXXFW53lMjl6Z7QnRF7eGfkBEFE5IU8&part=snippet&maxResults=30&type=video&q=𝗣𝗹𝗮𝘆𝗹𝗶𝘀𝘁`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setYoutube(result.items))
      .catch((error) => console.log("error", error));

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBhGXXFW53lMjl6Z7QnRF7eGfkBEFE5IU8&part=snippet&maxResults=10&type=video&q=공포게임`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setGame(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "reference API"]} />
        <YoutubeSlider youtubeGame={youtubeGame} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;
