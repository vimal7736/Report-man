import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = {
    isDarkTheme,  
    backgroundColor: isDarkTheme ? '#141414' : '#ffffff',
    backgroundColorreverse: isDarkTheme ? '#fffff' : '#141414',
    textReverse: isDarkTheme ? '#fffff' : '#141414',
    textColor: isDarkTheme ? '#ffffff' : '#000000',
    borderColor: isDarkTheme ? '#555555' : '#dddddd',
    tableColorFirstLayer: isDarkTheme ? '#ccc' : '#ffff',
    tableColorSecondLayer: isDarkTheme ? '#' : '#F7F7F7',
    shadow: isDarkTheme ? '0px 0px 15px 0px rgba(255, 255, 255, 0.08)' : '0px 0px 20px 0px rgba(0, 0, 0, 0.08)',
    hoverTextColor: isDarkTheme ? 'black' : 'white', 
    hoverBgColor: isDarkTheme ? 'white' : 'black', 
    tableBackgroundColor: isDarkTheme ? '#333333' : '#f2f2f2',
    tableRowLight: isDarkTheme ? '#252525' : '#ffffff',
    tableRowDark: isDarkTheme ? '#3C3C3C' : '#EDECEC',
    svgColor: isDarkTheme ? '#FFFFFF' : '#000000',
    TextDarkColor: isDarkTheme ? '#000000' : '#ffffff',
    evenRowBackgroundColor: isDarkTheme ? '#3C3C3C' : '#f2f2f2',
    oddRowBackgroundColor: isDarkTheme ? '#252525' : '#ffffff',
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
