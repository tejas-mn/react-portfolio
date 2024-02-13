import React, { useEffect, createContext, useState, useContext } from "react";
import { useLocalStorage } from "./customHooks";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [localTheme, setLocalTheme] = useLocalStorage("theme", ()=> "dark-theme");
  const [theme, setTheme] = useState(localTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
