import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Footer from "../layout/Footer";
import AboutCont from "../include/AboutCont";
import Contact from "../layout/Contact";

const About = () => {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["About", "reference API"]} />
        <AboutCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default About;
