import React from "react";
import CarouselItem from "../carousel-item/carousel-item.component";

const Carousel = ({ slides }) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((image, idx) => (
          <CarouselItem image={image} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
