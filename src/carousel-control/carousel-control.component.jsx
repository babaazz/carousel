import "./carousel-control.styles.css";

const CarouselControls = ({
  prev,
  next,
  stopSlide,
  startSlide,
  leftArrow,
  rightArrow,
}) => {
  return (
    <div>
      <button
        className="carousel-control left"
        onClick={prev}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      >
        {leftArrow || "❰"}
      </button>
      <button
        className="carousel-control right"
        onClick={next}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      >
        {rightArrow || "❱"}
      </button>
    </div>
  );
};

export default CarouselControls;
