import "./Footer.css";
import React, { useContext } from "react";
import { Context } from "../context/Context";

const Footer = () => {
  const { openPopup } = useContext(Context);
  const handleOpenPopup = () => {
    openPopup();
  };
  return (
    <footer className='footer'>
      <h2 className='title'>Be part of our Comunity</h2>
      <button className='register-button'>Get the App</button>
      <div className='footer-sections'>
        <button className='section'>Contact Us</button>
        <span className='separator'>|</span>
        <button className='section' onClick={handleOpenPopup}>
          Get the App
        </button>
      </div>
      <p className='rights'>All rights reserved DriveComunity</p>
    </footer>
  );
};

export default Footer;
