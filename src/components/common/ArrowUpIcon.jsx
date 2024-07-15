import React from 'react';

const ArrowUpIcon = ({ width = 16, height = 15, stroke = "#919EAB", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 15" fill="none" {...props}>
      <path 
        d="M11.9341 5.98125L8.1578 2.1875L4.38147 5.98125" 
        stroke={stroke} 
        strokeWidth="1.3" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.15784 12.8125V2.2937" 
        stroke={stroke} 
        strokeWidth="1.3" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowUpIcon;
