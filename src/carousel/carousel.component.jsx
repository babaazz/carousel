import React from "react";
import { useState, useEffect } from "react";
import CarouselItem from "../carousel-item/carousel-item.component";
import "./carousel.styles.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 5000);
    return () => {
      clearInterval(slideInterval);
      console.log("interval cleared");
    };
  }, []);
  console.log(currentSlide);
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((image, idx) => (
          <CarouselItem image={image} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
