import React, { useEffect, useState } from "react";
import Themes from "../../themes.json";
import config from "../../config.json";

const ThemeContext = React.createContext(null);

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(Themes[0]);

  const setTheme = (name) => {
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === name.toLowerCase()
    );

    if (index === -1) {
      return `Theme '${name}' not found. Try 'theme ls' to see the list of available themes.`;
    }

    setThemeState(Themes[index]);
    localStorage.setItem("theme", name);

    return `Theme ${Themes[index].name} set successfully!`;
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || config.theme;
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === savedTheme.toLowerCase()
    );

    if (index !== -1) {
      setThemeState(Themes[index]); 
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
