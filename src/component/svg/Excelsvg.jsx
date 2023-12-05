import React from 'react';
import { useTheme } from '../../ThemeContext';

const Excelsvg = () => {
  const { theme } = useTheme();

  return (
    <div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0835 18.75L4.3335 13L10.0835 7.25L10.8502 8.01667L6.40851 12.4583H21.6668V13.5417H6.40851L10.8502 17.9833L10.0835 18.75Z"
          fill={theme.svgColor}
        />
      </svg>
    </div>
  );
};

export default Excelsvg;
