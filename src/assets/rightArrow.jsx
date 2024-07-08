import React from 'react';
import PropTypes from 'prop-types';

const RightArrowIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8.43 1.92993L14.5 7.99993L8.43 14.0699M1 7.99993H14.33" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

RightArrowIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default RightArrowIcon;
