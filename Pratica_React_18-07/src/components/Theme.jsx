import {React,useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";


const Theme = () => {
  const {Theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h1>Theme atual {Theme}</h1>
      <button onClick={toggleTheme}>Troca Theme</button>
    </div>
  );
};

export default Theme;
