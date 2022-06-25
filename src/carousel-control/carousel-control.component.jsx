import "./carousel-control.styles.css";

const CarouselControls = ({ prev, next, stopSlide, startSlide }) => {
  return (
    <div>
      <button
        className="carousel-control left"
        onClick={prev}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      >
        &#10096;
      </button>
      <button
        className="carousel-control right"
        onClick={next}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      >
        &#10097;
      </button>
    </div>
  );
};

export default CarouselControls;
