import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <p>
            <Link to={"/home"}>Home</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/contact"}>Contact</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/contador"}>Contador</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/formulario"}>Formulário</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/github"}>GitHub</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/theme"}>Theme</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to={"/login"}>Login</Link>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
