import React from "react";

const MovieBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("Adventure Time");
  };
  const onClick2 = () => {
    onSearch("Steven Universe");
  };
  const onClick3 = () => {
    onSearch("Disney");
  };
  const onClick4 = () => {
    onSearch("PIXAR");
  };
  const onClick5 = () => {
    onSearch("Animation");
  };
  const onClick6 = () => {
    onSearch("Zombi");
  };
  const onClick7 = () => {
    onSearch("Thriller ");
  };

  return (
    <section className="cont__Movie">
      <div className="container">
        <div className="btn__box">
          <button type="submit" onClick={onClick1}>
            {/* {unsplashInfo.map((text, index) => (
              <UnsplashText key={index} text={text.text} />
            ))} */}
            Adventure Time
          </button>
          <button type="submit" onClick={onClick2}>
            Steven Universe
          </button>
          <button type="submit" onClick={onClick3}>
            Disney
          </button>
          <button type="submit" onClick={onClick4}>
            PIXAR
          </button>
          <button type="submit" onClick={onClick5}>
            Animation
          </button>
          <button type="submit" onClick={onClick6}>
            Zombi
          </button>
          <button type="submit" onClick={onClick7}>
            Thriller
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieBtn;
