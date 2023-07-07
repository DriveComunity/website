import Booking from "../Booking/Booking";
import phoneImg from "../../assets/mockup.png";
import mapIcon from "../../assets/map-icon-white.png";
import "./Description.css";

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
          <div className='row-container'>
            <div className='column-container'>
              <div className='image'>
                <img src={mapIcon} alt='About Us' />
              </div>
              <div className='content-section'>
                <h3>Book or offer your ride.</h3>
                <p>
                  If you're a driver, mark your route and offer available seats. If you're a passenger, book a ride on
                  your desired route.
                </p>
              </div>
            </div>
          </div>
          <div className='row-container'>
            <div className='column-container'>
              <div className='image'>
                <img src={mapIcon} alt='About Us' />
              </div>
              <div className='content-section'>
                <h3>Share expenses and reduce traffic.</h3>
                <p>
                  By sharing rides, you'll have the opportunity to split expenses and say goodbye to traffic and travel
                  hassles
                </p>
              </div>
            </div>
          </div>
          <div className='row-container'>
            <div className='column-container'>
              <div className='image'>
                <img src={mapIcon} alt='About Us' />
              </div>
              <div className='content-section'>
                <h3>Encourage social interaction and community:</h3>
                <p>
                  Join our community of drivers and passengers, fostering social interaction and building connections
                  during your shared journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
