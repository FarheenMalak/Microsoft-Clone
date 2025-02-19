import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  // Text for different slides
  const slideTexts = [
    {
      title: "Copilot is your AI companion",
      description:
        "Always by your side, ready to support you whenever and wherever you need it.",
      buttonText: "Download the Copilot app",
      buttonLink: "#",
    },
    {
      title: "Achieve the extraordinary",
      description:
        "Microsoft 365 delivers cloud storage, security, and Microsoft Copilot in your favorite apps – all in one plan.",
      buttonText: "Shop Microsoft 365",
      buttonLink: "#",
    },
  ];

  return (
    <div className="w-full relative mt-20">
      {/* Hero Slider with Shadow Effect */}
      <div className="w-full overflow-hidden relative z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-200/50 to-transparent shadow-md z-20"></div>
        <Slider {...settings}>
          <div>
            <img src="/slide1.avif" alt="Slide 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="/slide2.avif" alt="Slide 2" className="w-full h-auto" />
          </div>
        </Slider>
      </div>

      {/* Dynamic Info Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:bottom-[-60px] w-[95%] md:w-[100%] lg:w-[95%] bg-white py-10 px-6 md:px-12 text-left shadow-lg rounded-lg z-20">
        <h2 className="text-2xl md:text-3xl font-bold">{slideTexts[currentSlide].title}</h2>
        <p className="text-gray-600 mt-3 text-lg">{slideTexts[currentSlide].description}</p>
        <a
          href={slideTexts[currentSlide].buttonLink}
          className="mt-5 inline-block bg-[#0067b8] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-950 transition"
        >
          {slideTexts[currentSlide].buttonText}
        </a>
      </div>
    </div>
  );
};

export default Hero;

