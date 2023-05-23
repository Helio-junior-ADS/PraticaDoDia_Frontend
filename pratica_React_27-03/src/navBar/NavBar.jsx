import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={`                  
      bg-red-900
      text-white            
    `}>
      <ul className={`
        flex justify-center items-center flex-wrap      
        h-full py-3 
      `}>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/home"}>Home</Link>
          </p>
        </li>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/contact"}>Contact</Link>
          </p>
        </li>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/contador"}>Contador</Link>
          </p>
        </li>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/formulario"}>Formulário</Link>
          </p>
        </li>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/github"}>GitHub</Link>
          </p>
        </li>
        <li className={`
          mx-3
        `}>
          <p>
            <Link to={"/theme"}>Theme</Link>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
