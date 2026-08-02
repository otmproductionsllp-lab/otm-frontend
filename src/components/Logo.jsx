import React from 'react';

const Logo = ({ size = 45 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {/* Round White Background */}
      <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
      
      {/* ONE */}
      {/* O with Play Button */}
      <circle cx="35" cy="38" r="9" stroke="#000000" strokeWidth="2.8" fill="none" />
      <polygon points="33,34.5 39,38 33,41.5" fill="#000000" />
      
      {/* N */}
      <path d="M49,47 L49,29 L59,47 L59,29" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* E */}
      <path d="M65,47 L65,29 L74,29 M65,38 L72,38 M65,47 L74,47" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* TAKE MEDIA */}
      {/* T */}
      <path d="M10,63 L20,63 M15,63 L15,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      
      {/* A */}
      <path d="M22,77 L26,63 L30,77 M23.5,71.5 L28.5,71.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* K */}
      <path d="M33,63 L33,77 M33,70 L38.5,63 M33,70 L38.5,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* E */}
      <path d="M42,77 L42,63 L47.5,63 M42,70 L46.5,70 M42,77 L47.5,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* M */}
      <path d="M51,77 L51,63 L55.5,68.5 L60,63 L60,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* E */}
      <path d="M63,77 L63,63 L68.5,63 M63,70 L67.5,70 M63,77 L68.5,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* D */}
      <path d="M71.5,63 L71.5,77 M71.5,63 C75.5,63 77.5,66 77.5,70 C77.5,74 75.5,77 71.5,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      
      {/* I */}
      <path d="M80.5,63 L80.5,77" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      
      {/* A */}
      <path d="M83.5,77 L87.5,63 L91.5,77 M85,71.5 L90,71.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export default Logo;
