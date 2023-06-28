import React from "react";
import "./Options.css";
import driverIcon from "../../assets/driver.png";
import carIcon from "../../assets/sports-car.png";
import { Link } from "react-router-dom";

const Options = () => {
  const cardsData = [
    {
      id: 1,
      title: "Become a Driver",
      text: "Share your trips, reduce costs, and contribute to a greener future. Join us as a driver today!",
      image: driverIcon,
      link: "/fordrivers",
    },
    {
      id: 2,
      title: "Become a Passenger",
      text: "Discover convenient rides, save money, and connect with fellow travelers. Join as a passenger!",
      image: carIcon,
      link: "/forpassengers",
    },
  ];

  return (
    <section>
      <div className='cards-option-container'>
        {cardsData.map((card) => (
          <div className='card-option' key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <Link to={card.link} className='option-btn'>
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Options;
