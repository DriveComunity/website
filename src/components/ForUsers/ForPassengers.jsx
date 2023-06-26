import { useEffect } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import './ForUsers.css';

let contentArray = [
  [
    'Primer titulo',
    'Habia una vez un circo que alegraba siempre el corazon'
  ],
  [
    'Segundo titulo',
    'Poco a poco, fuimos volviendonos locos'
  ],
  [
    'Tercer titulo', 
    'Muchachooos, ahora nos volvimos a ilusionar, quiero ganar la tercera, quiero ser campeon mundial'],
  [
    'Cuarto titulo',
    'Meeeeeesssiii, meeeeeessssiiiii, messssssiiiiii'
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