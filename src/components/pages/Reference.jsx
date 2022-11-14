import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ReferCont from "../include/ReferCont";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

// 클래스 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 푹
// 변수 : 저장, 추가, 변경 --> 자동

function Reference() {
  const [references, setReerences] = useState([]);

  // useEffect(() => {
  //   fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json" )
  //     .then((response) => response.json())
  //     // .then((result) => console.log(result.data.htmlRefer))
  //     .then((result) => setReerences(result.data.htmlRefer)) //배열까지 불러옴 map은 반복문
  //     .catch((error) => console.log("error", error));
  // }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Packsunhye/react_api/main/util/reference_1105.json"
    )
      .then((response) => response.json())
      // .then(result => console.log(result.data.htmlRefer))
      .then((result) => setReerences(result.cssRefer))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}
export default Reference;
