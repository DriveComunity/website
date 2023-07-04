import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForUsers.css";

let contentArray = [
  [
    "Mark Your Route:",
    "Enter the origin and destination of your trip, along with the date and time of departure. Specify the number of available seats in your vehicle.",
  ],
  [
    "Offer Available Seats:",
    "Provide details about your vehicle, such as make, model, and any additional preferences or requirements. Set a fair price for the available seats, if applicable.",
  ],
  [
    "Receive Booking Requests:",
    "Once your trip is posted, interested passengers can send booking requests. Review the requests and accept those that meet your criteria.",
  ],
  [
    "Enjoy the Shared Journey:",
    "Connect with your passengers and embark on a shared journey. Enjoy the benefits of cost-sharing, reduced traffic, and the opportunity to meet new people.",
  ],
];

const ForDrivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='cards-parent-container'>
      <Navbar />
      <div className='banner'>
        <h2 className='title-banner'>
          FOR
          <br />
          DRIVERS
        </h2>
      </div>
      <div className='cards-container'>
        {contentArray.map((e, index) => (
          <Card key={index} title={e[0]} par={e[1]} number={index + 1 + " |"} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ForDrivers;
