import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import style from "./Icon.module.css"

const IconIncome = () => {


  return (
    <div className={`${style.container}`}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      <p>Sair</p>
    </div>
  );
};

export default IconIncome;