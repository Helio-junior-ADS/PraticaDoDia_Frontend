import { React, useState } from "react";

const Loguin = () => {
  const [modo, setModo] = useState("Login" || "Cadastro");
  return (
    <div>
      <h1>
        {modo === 'Login' ? (
         <p>Entre com seu Login</p>
        ) : (
          <p> Cadastra - se</p>
        )}
      </h1>
      <button onClick={() => setModo(modo === 'Login' ? 'Cadastro':'Login')}>Trocar</button>
    </div>
  );
};

export default Loguin;
