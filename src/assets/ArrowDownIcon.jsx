import React from 'react';

const ArrowDownIcon = ({ width = 16, height = 15, stroke = "#919EAB", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 15" fill="none" {...props}>
      <path 
        d="M4.38147 9.01875L8.1578 12.8125L11.9341 9.01875" 
        stroke={stroke} 
        strokeWidth="1.3" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.15784 2.1875V12.7063" 
        stroke={stroke} 
        strokeWidth="1.3" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDownIcon;
