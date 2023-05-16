import { React, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme Atual {theme}</h1>
      <button onClick={toggleTheme}>Trocar</button>
    </div>
  );
};

export default Theme;
