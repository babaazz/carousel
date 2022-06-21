import React from "react";

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item">
      <img src={image} alt={image} />
    </div>
  );
};

export default CarouselItem;
