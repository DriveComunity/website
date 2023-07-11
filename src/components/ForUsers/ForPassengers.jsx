import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForUsers.css";

const contentArray = [
  {
    title: "Search for Rides:",
    title01: "Search for ",
    title02: "Rides:",
    description:
      "Enter your desired origin, destination, and travel date to find available rides matching your criteria. Browse through the list of options.",
  },
  {
    title: "Book a Ride:",
    title01: "Book a ",
    title02: "Ride:",
    description:
      "Select a suitable trip and send a booking request to the driver. Provide any necessary information, such as your contact details.",
  },
  {
    title: "Receive Confirmation:",
    description:
      "Once the driver reviews your request, they will either accept or decline it. Upon acceptance, you will receive a confirmation with the trip details.",
  },
  {
    title: "Connect and Travel:",
    description:
      "Connect with the driver and fellow passengers for a shared journey. Enjoy the cost-saving benefits, contribute to reducing traffic congestion, and make new connections along the way.",
  },
];

const ForPassengers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderTitle = (index) => {
    if ((index === 0 || index === 1) && window.innerWidth > 640) {
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
          PASSENGERS
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

export default ForPassengers;
