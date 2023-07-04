import "./Footer.css";
import { useContext } from "react";
import Contact from "../Contact/Contact";
import PopUp from "../PopUp/PopUp";
import { Context } from "../context/Context";

const Footer = () => {
  const { openPopup, openContactForm, showContactForm } = useContext(Context);
  const handleOpenPopup = () => {
    openPopup();
  };
  const handleOpenContactForm = () => {
    openContactForm();
  };
  return (
    <footer className='footer'>
      <h2 className='title'>Be part of our Comunity</h2>
      <button className='register-button' onClick={handleOpenPopup}>
        Get the App
      </button>
      <div className='footer-sections'>
        <button className='section' onClick={handleOpenContactForm}>
          Contact Us
        </button>
        <span className='separator'>|</span>
        <button className='section' onClick={handleOpenPopup}>
          Get the App
        </button>
      </div>
      <p className='rights'>All rights reserved DriveComunity</p>
      {showContactForm && <Contact />}
      {openPopup && <PopUp />}
    </footer>
  );
};

export default Footer;
