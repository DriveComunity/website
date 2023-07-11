import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForUsers.css";

const contentArray = [
  {
    title: "Mark Your Route:",
    title01: "Mark Your",
    title02: "Route:",
    description:
      "Enter the origin and destination of your trip, along with the date and time of departure. Specify the number of available seats in your vehicle.",
  },
  {
    title: "Offer Available Seats:",
    description:
      "Provide details about your vehicle, such as make, model, and any additional preferences or requirements. Set a fair price for the available seats.",
  },
  {
    title: "Receive Booking Requests:",
    description:
      "Once your trip is posted, interested passengers can send booking requests. Review the requests and accept those that meet your criteria.",
  },
  {
    title: "Enjoy the Shared Journey:",
    description:
      "Connect with your passengers and embark on a shared journey. Enjoy the benefits of cost-sharing, reduced traffic, and the opportunity to meet new people.",
  },
];

const ForDrivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderTitle = (index) => {
    if (index === 0 && window.innerWidth > 640) {
      return (
        <>
          {contentArray[index].title01}
          <br />
          {contentArray[index].title02}
        </>
      );
    } else {
      return contentArray[index].title;
    }
  };

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
          <Card
            key={index}
            title={renderTitle(index)}
            par={e.description}
            number={window.innerWidth <= 640 ? index + 1 : index + 1 + " |"}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ForDrivers;
