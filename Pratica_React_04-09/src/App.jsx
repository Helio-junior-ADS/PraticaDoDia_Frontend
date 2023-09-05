import "./App.css";
import NavBar from "./navBar/NavBar";
import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App: ${theme === 'Light' ? 'light-theme': ''}`}>
      <NavBar />
      <h1>Prática React</h1>
      <Outlet />
    </div>
  );
}

export default App;
