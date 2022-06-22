import React from "react";
import "./carousel-item.styles.css";

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item">
      <img src={image} alt={image} />
    </div>
  );
};

export default CarouselItem;
