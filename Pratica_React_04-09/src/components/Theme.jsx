import React from "react";

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme Atual : {theme}</h1>
      <button onClick={toggleTheme}>{theme === `Light` ? 'Dark' : 'Light' }</button>
    </div>
  );
};

export default Theme;
