import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import style from "./Icon.module.css"
import { useLocation } from 'react-router-dom/dist';

const IconIncome = () => {
const location = useLocation();


  return (
    <div className={`${style.container} ${location.pathname === "/receitas" ? style.activeLink : ""}`}>
      <FontAwesomeIcon icon={faMoneyCheckAlt} />
      <p>Receitas</p>
    </div>
  );
};

export default IconIncome;
