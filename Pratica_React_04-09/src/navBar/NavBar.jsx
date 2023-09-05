import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
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
            <Link to={"/form"}>Formulário</Link>
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
      </ul>
    </div>
  );
};

export default NavBar;
