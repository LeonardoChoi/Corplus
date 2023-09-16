import React from "react";
import "./Banner.css";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { IoEllipse } from "react-icons/io5";

import fabricData from "../data/fabricData";
import slides from "../data/slidesData";

function Banner() {
  const [index, setIndex] = React.useState(0);

  const slideStyles = {
    backgroundImage: `url(${slides[index].url})`,
  };

  const nextSlide = () => {
    const isLastSlide = index === slides.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="banner-container">
      <PiCaretLeftBold onClick={prevSlide} className="right-arrow" />
      <div className="banner-img" style={slideStyles}></div>
      <PiCaretRightBold onClick={nextSlide} className="left-arrow" />
      <div className="dotContainer">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <IoEllipse className="slideDots" size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
