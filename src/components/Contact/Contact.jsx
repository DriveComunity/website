import React, { useContext, useState, useRef } from "react";
import { Context } from "../context/Context";
// import emailjs from "@emailjs/browser";
// import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from "../../config.js";
import "./Contact.css";

const Contact = () => {
  const { showContactForm, closeContactForm } = useContext(Context);
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_USER_ID).then(
    //   (result) => {
    //     console.log(result.text);
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
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
            <form ref={form} onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  placeholder='Message'
                  name='message'
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
