import "./carousel-item.styles.css";

const CarouselItem = ({ image, stopSlide, startSlide, fade, interval }) => {
  return (
    <div className="carousel-item">
      <img
        className={fade}
        src={image}
        alt={image}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      />
    </div>
  );
};

export default CarouselItem;
