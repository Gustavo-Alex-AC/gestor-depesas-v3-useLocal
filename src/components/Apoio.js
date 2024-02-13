import React, { useState } from 'react';
import Sidebar from './Sidebar';
import style from "./Apoio.module.css"
import { useData } from "../contexts/DataContext";
import HamburgerIcon from './HamburgerIcon';

const Apoio = () => {
  const {isTablet} = useData();
  const [message, setMessage] = useState('');
  const handleOpenWhatsApp = () => {
    const phoneNumber = 922520825; // Replace with your actual WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

    setMessage("");
  };

  return (
    <div className="main-section">
   { isTablet ? <HamburgerIcon /> : <Sidebar  />}
    <div className="mainbar">
   
    <div className={style.supportContainer}>
      <h1>Contacta-me via WhatsApp</h1>
      <form className={style.formContainer}>
        <label className={style.label}>
          Mensagem:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={style.textarea}
            placeholder="Escreva sua mensagem aqui..."
          />
        </label>
        <button type="button" onClick={handleOpenWhatsApp} className={style.button}>
           Abrir WhatsApp
        </button>
      </form>
    </div>
        
</div>
</div>
  );
};

export default Apoio;
