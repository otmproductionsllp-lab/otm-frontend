import React from 'react';

const Logo = ({ size = 45 }) => {
  // Aspect ratio is approx 2.1:1
  const width = size * 2.2;
  const height = size;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 380 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* O */}
      <circle cx="80" cy="65" r="38" stroke="currentColor" strokeWidth="14" />
      
      {/* Play button */}
      <polygon 
        points="68,48 95,65 68,82" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinejoin="round" 
      />

      {/* T */}
      <path 
        d="M 150 20 L 220 20 M 185 20 L 185 110" 
        stroke="currentColor" 
        strokeWidth="14" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* M */}
      <path 
        d="M 255 110 L 255 20 L 302 65 L 349 20 L 349 110" 
        stroke="currentColor" 
        strokeWidth="14" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* PRODUCTIONS */}
      <text 
        x="195" 
        y="160" 
        fill="currentColor" 
        fontSize="32" 
        fontFamily="'Arial Rounded MT Bold', 'Nunito', 'Quicksand', 'Varela Round', sans-serif" 
        fontWeight="bold" 
        letterSpacing="8.5" 
        textAnchor="middle"
      >
        PRODUCTIONS
      </text>
    </svg>
  );
};

export default Logo;
