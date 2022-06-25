import "./carousel-indicators.styles.css";
const CarouselIndicators = ({ slides, currentSlide, switchIdx }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, idx) => (
        <div
          key={idx}
          className={`carousel-indicators-item ${
            idx === currentSlide ? "active" : ""
          }`}
          onClick={() => switchIdx(idx)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
