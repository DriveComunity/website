import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import { Context } from "../context/Context";
import PopUp from "../PopUp/PopUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import arrowLeft from "../../assets/left-arrow-white.png";
import arrowRight from "../../assets/right-arrow-white.png";

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
            <li
              key={index}
              className={`custom-dot ${dot.props.className === "slick-active" ? "active" : ""}`}
              style={{ width: "5px", height: "5px" }}>
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
        "https://images.unsplash.com/photo-1524645343120-a4ae9f7d4343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Your Trip, Your Adventure",
      subtitle: "Let's drive together. Share rides!",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2705755/pexels-photo-2705755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Become a Driver",
      subtitle: "Share your trips, reduce costs",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1617180705595-58e1bde06b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Become a Passenger",
      subtitle: "Say goodbye to travel hassles! join as a passenger.",
    },
  ];

  const Slide = ({ image, title, subtitle }) => (
    <div className='slide'>
      <img src={image} alt={title} />
      <div className='slide-content'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
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
          <img src={arrowLeft} alt='arrow-left' />
        </button>
        <button className='right' onClick={goToNextSlide}>
          <img src={arrowRight} alt='arrow-right' />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <Slide image={slide.image} title={slide.title} subtitle={slide.subtitle} />
          </div>
        ))}
      </Slider>
      {openPopup && <PopUp />}
    </div>
  );
};

export default SliderComponent;
