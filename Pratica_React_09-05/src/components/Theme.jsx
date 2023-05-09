import { React, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Theme Atual {theme}</div>
      <br />
      <button onClick={toggleTheme}>Trocar</button>
    </div>
    
  )
};

export default Theme;
