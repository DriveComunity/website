import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './ForUsers.css';

let contentArray = [
  [
    'Search for Rides:',
    'Enter your desired origin, destination, and travel date to find available rides matching your criteria. Browse through the list of options.'
  ],
  [
    'Book a Ride:',
    'Select a suitable trip and send a booking request to the driver. Provide any necessary information, such as your contact details.'
  ],
  [
    'Receive Confirmation:', 
    'Once the driver reviews your request, they will either accept or decline it. Upon acceptance, you will receive a confirmation with the trip details.'],
  [
    'Connect and Travel:',
    'Connect with the driver and fellow passengers for a shared journey. Enjoy the cost-saving benefits, contribute to reducing traffic congestion, and make new connections along the way.'
  ]
];


const ForPassengers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="cards-parent-container">
        <Navbar/>
        <div className="banner">
          <h2 className="title-banner">FOR<br/>PASSENGERS</h2>
        </div>
        <div className="cards-container">
          {contentArray.map((e, index) => (
            <Card key={index} title={e[0]} par={e[1]} number={index + 1 + ' |'}/>
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default ForPassengers