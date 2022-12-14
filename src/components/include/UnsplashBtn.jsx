import React from "react";

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("cat");
  };
  const onClick2 = () => {
    onSearch("nigth");
  };
  const onClick3 = () => {
    onSearch("dawn");
  };
  const onClick4 = () => {
    onSearch("fox");
  };
  const onClick5 = () => {
    onSearch("jellyfish");
  };
  const onClick6 = () => {
    onSearch("sea");
  };
  const onClick7 = () => {
    onSearch("neon");
  };

  return (
    <section className="cont__usplash">
      <div className="container">
        <div className="btn__box">
          <button type="submit" onClick={onClick1}>
            {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
            cat
          </button>
          <button type="submit" onClick={onClick2}>
            nigth
          </button>
          <button type="submit" onClick={onClick3}>
            dawn
          </button>
          <button type="submit" onClick={onClick4}>
            fox
          </button>
          <button type="submit" onClick={onClick5}>
            jellyfish
          </button>
          <button type="submit" onClick={onClick6}>
            sea
          </button>
          <button type="submit" onClick={onClick7}>
            neon
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnsplashBtn;
