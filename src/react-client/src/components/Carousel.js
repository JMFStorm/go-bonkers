import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/all";

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);
  const { place } = props;

  // function for slides
  const nextSlide = () => {
    setCurrent(current === place.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? place.length - 1 : current - 1);
  };

  return (
    place &&
    place.map((item, index) => {
      return place.length === 1 ? (
        <div key={item.url}>
          <img src={item.url} alt={item.name} />
        </div>
      ) : (
        <div key={item.url} className={index === current ? "slide active" : "slide"}>
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {index === current && <img src={item.url} alt={item.name} className="image_carousel" />}
        </div>
      );
    })
  );
};

export default Carousel;
