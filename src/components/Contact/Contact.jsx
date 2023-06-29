import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./Contact.css";

const Contact = () => {
  const { showContactForm, closeContactForm } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for handling the form submission here
    // You can send the form data to your server or perform any other actions

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {showContactForm && (
        <div className='modal-overlay'>
          <div className='popup-container popupcontact'>
            <button className='close-button' onClick={closeContactForm}>
              <span className='close-icon'>x</span>
            </button>
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  placeholder='Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required></textarea>
              </div>
              <button className='submit-button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
