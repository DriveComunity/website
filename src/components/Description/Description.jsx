import Booking from "../Booking/Booking";
// import PhoneSketch from "../PhoneSketch/PhoneSketch";
import "./Description.css";

const Description = () => {
  return (
    <div className='parent-container'>
      <Booking />
      <div className='img-container'>
        {/* <div className='animation-container'>
          <PhoneSketch />
        </div> */}
        <h1 className='phone-title'>DRIVE COMUNITY</h1>
        {/* {window.innerWidth <= 1024 && <h1 className='phone-title'>DriveMe</h1>} */}
        <img src='src/assets/mockup.png' alt='cellphone' className='phone-img' />
      </div>
      <div className='description-container'>
        <div className='content-container'>
          <div className='row-container'>
            <div className='column-container'>
              <div className='image'>
                <img src='src\assets\map-icon-white.png' alt='About Us' />
              </div>
              <div className='content-section'>
                <h2>Book or offer your ride.</h2>
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
                <img src='src\assets\map-icon-white.png' alt='About Us' />
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
                <img src='src\assets\map-icon-white.png' alt='About Us' />
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
