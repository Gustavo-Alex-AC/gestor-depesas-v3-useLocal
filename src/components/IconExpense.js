import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import style from "./Icon.module.css"
import { useLocation } from 'react-router-dom/dist';

const IconExpense = () => {
  const location = useLocation();
  return (
    <div className={`${style.container} ${location.pathname === "/despesas" ? style.activeLink : ""}`}>
      <FontAwesomeIcon icon={faMoneyBillAlt} />
      <p>Despesas</p>
    </div>
  );
};

export default IconExpense;
