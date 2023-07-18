import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";

import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App: ${theme === 'Light' ? 'light-theme' : ''}`}>
      <NavBar />
      <h1>Pratica React</h1>
      <Outlet />
    </div>
  );
}

export default App;
