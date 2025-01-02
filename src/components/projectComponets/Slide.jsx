import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import "../../index.css";

const Slide = ({ slides }) => {
  return (
    <div className="max-w-[1000px] max-h-[750px] mx-auto overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel"
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="h-[700px] w-auto object-contain mx-auto mb-6"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
