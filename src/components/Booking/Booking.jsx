import { useContext } from "react";
import { Context } from "../context/Context";
import PopUp from "../PopUp/PopUp";
import "./Booking.css";

const Booking = () => {
  const { openPopup } = useContext(Context);
  const handleOpenPopup = () => {
    openPopup();
  };
  return (
    <div className='booking-container'>
      <div className='booking-content'>
        <div className='title-section'>
          <h3>Book your Drive in just a few seconds!</h3>
        </div>
        <div className='text-section'>
          <p>
            Share rides, save time! Say goodbye to travel hassles. Book your Drive in seconds and enjoy cost-effective
            and eco-friendly journeys with fellow drivers and passengers. Join our carpooling community today!
          </p>
        </div>
        <div className='download-content'>
          <div className='title-section'>
            <h3>Download Now</h3>
          </div>
          <div className='text-section'>
            <p>
              Revolutionize your travel experience. Download our app now and start enjoying seamless, efficient
              journeys.
            </p>
          </div>
          <div className='button-container'>
            <button onClick={handleOpenPopup} class='market-btn google-btn' rel='noopener noreferrer'>
              <span class='market-button-subtitle'>Download on the</span>
              <span class='market-button-title'>Google Play</span>
            </button>
            <button onClick={handleOpenPopup} class='market-btn apple-btn' rel='noopener noreferrer'>
              <span class='market-button-subtitle'>Download on the</span>
              <span class='market-button-title'>App Store</span>
            </button>
          </div>
          {openPopup && <PopUp />}
        </div>
      </div>
    </div>
  );
};

export default Booking;
