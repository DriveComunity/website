import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import { Context } from "../context/Context";
import PopUp from "../PopUp/PopUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderComponent = () => {
  const { openPopup } = useContext(Context);
  const handleOpenPopup = () => {
    openPopup();
  };

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: 10, width: "100%", textAlign: "center" }}>
        <ul style={{ margin: 0, padding: 0 }}>
          {dots.map((dot, index) => (
            <li key={index}>
              <button onClick={() => sliderRef.current.slickGoTo(index)}></button>
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff", margin: "0 5px" }}></div>
    ),
  };

  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2705755/pexels-photo-2705755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/620332/pexels-photo-620332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const Slide = ({ image, title }) => (
    <div className='slide'>
      <img src={image} alt={title} />
      <div className='slide-content'>
        <h1>Your Trip, Your Adventure</h1>
        <h5>Let's drive together</h5>
        <button className='download-button' onClick={handleOpenPopup}>
          Get the App
        </button>
      </div>
    </div>
  );

  return (
    <div className='slider-wrapper'>
      <div className='slider-arrows'>
        <button className='left' onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className='right' onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <Slide image={slide.image} />
          </div>
        ))}
      </Slider>
      {openPopup && <PopUp />}
    </div>
  );
};

export default SliderComponent;
