import React from "react";
import { Link } from "react-router-dom";

const NabBar = () => {
  return (
    <nav>
      <ul>
        <p>
          <Link to={"/home"}>Home</Link>
        </p>
        <p>
          <Link to={"/contact"}>Contact</Link>
        </p>
        <p>
          <Link to={"/contador"}>Contador</Link>
        </p>
        <p>
          <Link to={"/formulario"}>Formulário</Link>
        </p>
        <p>
          <Link to={"/github"}>GitHub</Link>
        </p>
        <p>
          <Link to={"/theme"}>Theme</Link>
        </p>
      </ul>
    </nav>
  );
};

export default NabBar;
