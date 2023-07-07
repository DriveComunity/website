import React, { useContext } from "react";
import { Context } from "../context/Context";
import "./PopUp.css";

const PopUp = () => {
  const { isOpen, closePopup } = useContext(Context);

  return (
    <>
      {isOpen && (
        <div className='modal-overlay'>
          <div className='popup-container'>
            <h3>We are almost there!</h3>
            <p>
              We're excited to announce that we're diligently working on developing an amazing app for you. We're
              pouring our time, effort, and creativity into crafting an exceptional user experience. The wait is almost
              over, so hang in there for a seamless and thrilling journey ahead. We appreciate your patience and can't
              wait to unveil it to you. Stay tuned for the big reveal!
            </p>
            <button className='close-button' onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
