import React from "react";
import "./Banner.css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import fabricData from "../data/fabricData";
import slides from "../data/slidesData";

function Banner() {
  const [index, setIndex] = React.useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[index].url})`,
  };

  const nextSlide = (e) => {
    return setIndex();
  };

  return (
    <div className="banner-container">
      <PiCaretLeftBold className="right-arrow" />
      <div className="banner-img" style={slideStyles}></div>
      <PiCaretRightBold className="left-arrow" />
    </div>
  );
}

export default Banner;
