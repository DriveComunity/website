/* eslint-disable react/prop-types */
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-number'>
        <p>{props.number}</p>
      </div>
      <div className='card-content'>
        <h2>{props.title}</h2>
        <p>{props.par}</p>
      </div>
    </div>
  );
};

export default Card;
