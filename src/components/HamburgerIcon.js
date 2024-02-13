// HamburgerIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerIcon = ({ onClick }) => {
  return (
    <div className="hamburger-icon" onClick={onClick}>
        <FontAwesomeIcon icon={faBars} color='#444444' size='lg' />
    </div>
  );
};

export default HamburgerIcon;
