import React from 'react';

interface IprepLogoProps extends React.SVGProps<SVGSVGElement> {
  text?: string;
  showText?: boolean;
  darkText?: boolean;
}

export const IprepLogo: React.FC<IprepLogoProps> = ({
  text = 'AccessIprepAI', // Default text (change to 'iPrep.Ai' if needed)
  showText = true,
  darkText = true,
  className = '',
  ...props
}) => {
  const width = showText ? (text.length > 8 ? 340 : 250) : 64;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} 64`}
      width={width}
      height={64}
      fill="none"
      className={className}
      {...props}
    >
      {/* Lime-Green Rounded Square Icon */}
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#B5E642" />

      {/* Three Diagonal Slashes */}
      <line
        x1="25"
        y1="22"
        x2="17"
        y2="30"
        stroke="#111111"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1="39"
        y1="21"
        x2="21"
        y2="39"
        stroke="#111111"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1="47"
        y1="29"
        x2="31"
        y2="45"
        stroke="#111111"
        strokeWidth="5.5"
        strokeLinecap="round"
      />

      {/* Brand Text */}
      {showText && (
        <text
          x="74"
          y="43"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontSize="32"
          fontWeight="700"
          fill={darkText ? '#111111' : '#FFFFFF'}
          letterSpacing="-0.5"
        >
          {text}
        </text>
      )}
    </svg>
  );
};

export default IprepLogo;
