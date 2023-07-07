import React from "react";
import Booking from "../Booking/Booking";
import phoneImg from "../../assets/mockup.png";
import mapIcon from "../../assets/map-icon-white.png";
import "./Description.css";

const cardData = [
  {
    title: "Book or offer your ride.",
    description:
      "If you're a driver, mark your route and offer available seats. If you're a passenger, book a ride on your desired route.",
  },
  {
    title: "Share expenses and reduce traffic.",
    description:
      "By sharing rides, you'll have the opportunity to split expenses and say goodbye to traffic and travel hassles.",
  },
  {
    title: "Encourage social interaction and community:",
    description:
      "Join our community of drivers and passengers, fostering social interaction and building connections during your shared journeys.",
  },
];

const Description = () => {
  return (
    <div className='parent-container'>
      <Booking />
      <div className='img-container'>
        <h1 className='phone-title'>DRIVE COMUNITY</h1>
        <img src={phoneImg} alt='cellphone' className='phone-img' />
      </div>
      <div className='description-container'>
        <div className='content-container'>
          {cardData.map((card, index) => (
            <div className='row-container' key={index}>
              <div className='column-container'>
                <div className='image'>
                  <img src={mapIcon} alt='About Us' />
                </div>
                <div className='content-section'>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
