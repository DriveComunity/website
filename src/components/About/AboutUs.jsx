import { useState, useEffect } from "react";
import "./AboutUs.css";
import topLeftIcon from "../../assets/light-bulb-green.png";
import bottomRightIcon from "../../assets/save-the-planet-green.png";

const AboutUs = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [isLoopActive, setIsLoopActive] = useState(true);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    setIsLoopActive(false);
  };

  useEffect(() => {
    let intervalId = null;

    if (isLoopActive) {
      intervalId = setInterval(() => {
        setSelectedButton((prevButton) => {
          return prevButton === 3 ? 1 : prevButton + 1;
        });
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoopActive]);

  return (
    <div className='container'>
      <img src={topLeftIcon} alt='Top Left Icon' className='top-left-icon' />
      <img src={bottomRightIcon} alt='Bottom Right Icon' className='bottom-right-icon' />

      <h2 className='title'>Get to Know Us</h2>

      <div className='button-container'>
        <button
          className={`aboutUs-button ${selectedButton === 1 ? "selected" : ""}`}
          onClick={() => handleButtonClick(1)}>
          we are
        </button>

        <button
          className={`aboutUs-button ${selectedButton === 2 ? "selected" : ""}`}
          onClick={() => handleButtonClick(2)}>
          we do
        </button>

        <button
          className={`aboutUs-button ${selectedButton === 3 ? "selected" : ""}`}
          onClick={() => handleButtonClick(3)}>
          why us
        </button>
      </div>

      <div className='about-content-container'>
        {selectedButton === 1 && (
          <div className='content'>
            <div className='text'>
              <p>
                We are Drive Comunity, an innovative platform that connects drivers and passengers to facilitate safe
                and convenient ridesharing. We have a mission to transform the way people travel, providing an efficient
                and collaborative alternative.
              </p>
            </div>
          </div>
        )}
        {selectedButton === 2 && (
          <div className='content'>
            <div className='text'>
              <p>
                We offer a simple solution for drivers who regularly travel in their own vehicles. Our application
                allows drivers to register their trips and offer available seats to passengers who share the same route.
                This creates an opportunity to share expenses and reduce traffic congestion while also encouraging
                social interaction and community.
              </p>
            </div>
          </div>
        )}
        {selectedButton === 3 && (
          <div className='content'>
            <div className='text'>
              <p>
                Because we believe in collaborative and sustainable travel. Our platform offers affordable, safe, and
                verified ridesharing options. Join our community for convenient and eco-friendly commuting, enhanced by
                user ratings and feedback. Simplify your daily travels, connect with others, and contribute to a better
                future with Drive Comunity.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
