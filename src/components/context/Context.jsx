import { createContext, useState } from "react";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const openContactForm = () => {
    setShowContactForm(true);
  };
  const closeContactForm = () => {
    setShowContactForm(false);
  };
  return (
    <Context.Provider value={{ isOpen, openPopup, closePopup, showContactForm, openContactForm, closeContactForm }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
