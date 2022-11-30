import React from "react";

const YoutubeBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("고양이");
  };
  const onClick2 = () => {
    onSearch("강아지");
  };
  const onClick3 = () => {
    onSearch("늑대");
  };
  const onClick4 = () => {
    onSearch("여우");
  };
  const onClick5 = () => {
    onSearch("페럿");
  };

  return (
    <div className="cont__youtube">
      <div className="container">
        <div className="btn__box">
          {/* <input
            ref={inputRef}
            placeholder="검색하세요!"
            onKeyPress={onKeyPress}
          /> */}
          <button type="submit" onClick={onClick1}>
            고양이
          </button>
          <button type="submit" onClick={onClick2}>
            강아지
          </button>
          <button type="submit" onClick={onClick3}>
            늑대
          </button>
          <button type="submit" onClick={onClick4}>
            여우
          </button>
          <button type="submit" onClick={onClick5}>
            페럿
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeBtn;
