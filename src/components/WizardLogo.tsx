import React from 'react';

interface WizardLogoProps {
  className?: string;
  size?: number;
  showCardBackground?: boolean;
}

export const WizardLogo: React.FC<WizardLogoProps> = ({
  className = '',
  size = 40,
  showCardBackground = false,
}) => {
  if (showCardBackground) {
    return (
      <div
        className={`relative flex items-center justify-center rounded-2xl p-8 shadow-[0_0_50px_rgba(255,230,66,0.25)] border border-[#F2CF7E]/30 bg-gradient-to-b from-[#FF7900] to-[#E66B00] overflow-hidden ${className}`}
        style={{ width: size, height: size }}
      >
        {/* Glowing background aura */}
        <div className="absolute inset-0 bg-[#FFE642]/20 blur-2xl rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(255,230,66,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Star Burst / Sparks */}
          <path
            d="M100 20 L106 42 L128 48 L106 54 L100 76 L94 54 L72 48 L94 42 Z"
            fill="#FFE642"
          />
          {/* Radiating Rays */}
          <line
            x1="70"
            y1="30"
            x2="80"
            y2="38"
            stroke="#F2CF7E"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="130"
            y1="30"
            x2="120"
            y2="38"
            stroke="#F2CF7E"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="65"
            y1="62"
            x2="76"
            y2="56"
            stroke="#F2CF7E"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <line
            x1="135"
            y1="62"
            x2="124"
            y2="56"
            stroke="#F2CF7E"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Wand Shaft */}
          <rect
            x="94"
            y="65"
            width="12"
            height="115"
            rx="6"
            fill="#FFBF00"
            stroke="#FFE642"
            strokeWidth="2"
          />
          {/* Wand Tip Highlight */}
          <rect
            x="94"
            y="65"
            width="12"
            height="20"
            rx="4"
            fill="#FFE642"
          />
        </svg>
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`inline-block ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="22" fill="#FF7900" />
      {/* Starburst Tip */}
      <path
        d="M50 14 L53 25 L64 28 L53 31 L50 42 L47 31 L36 28 L47 25 Z"
        fill="#FFE642"
      />
      {/* Rays */}
      <line x1="36" y1="20" x2="41" y2="23" stroke="#F2CF7E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="20" x2="59" y2="23" stroke="#F2CF7E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="35" y1="36" x2="40" y2="34" stroke="#F2CF7E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="65" y1="36" x2="60" y2="34" stroke="#F2CF7E" strokeWidth="2.5" strokeLinecap="round" />
      {/* Wand Shaft */}
      <rect x="47" y="38" width="6" height="48" rx="3" fill="#FFBF00" stroke="#FFE642" strokeWidth="1" />
      {/* Tip Accent */}
      <path d="M47 38 L53 38 L53 46 L47 46 Z" fill="#FFE642" />
    </svg>
  );
};
