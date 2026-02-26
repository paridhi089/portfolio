import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import "../../index.css";
import replaceUrl from "../../utils/replaceUrl";


const MiniSlide = ({ slides }) => {
  if (!slides || slides.length === 0) return null;
  return (

    <div className="sm:max-w-[350px] mx-auto overflow-hidden">
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
                src={replaceUrl(slide.src)}
                alt={`Slide ${index + 1}`}
                className="h-[550px] w-auto object-contain mx-auto mb-6"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MiniSlide;
