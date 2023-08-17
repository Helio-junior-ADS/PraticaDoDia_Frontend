import "./App.css";
import { Outlet } from "react-router-dom";
import NabBar from "./navBar/NabBar";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App: ${theme === 'Light' ? 'light-theme': ''}`}>
      <NabBar />
      <h1>Prática React</h1>
      <Outlet />
    </div>
  );
}

export default App;
