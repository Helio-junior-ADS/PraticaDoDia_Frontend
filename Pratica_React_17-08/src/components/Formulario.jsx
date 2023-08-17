import { React, useState } from "react";

const Formulario = () => {
  const [inf,setInf] = useState();
  const handleValue = (value) => {
    return setInf((previusValue)=>({
      ...previusValue,
      [value.target.name]:value.target.value
    }))
  }
  const red = () => {
    return alert(`Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`);
  };
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <div>
          <label>First Name: </label>
          <input onChange={handleValue} name="firstName" type="text" placeholder="Insira seu nome" />
        </div>
        <div>
          <label>Last Name: </label>
          <input onChange={handleValue} name="lastName" type="text" placeholder="Insira seu sobrenome" />
        </div>
        <div>
          <label>Age: </label>
          <input onChange={handleValue} name="age" type="text" placeholder="Insira sua idade" />
        </div>
        <br />
        <button onClick={red}> SEND</button>
      </div>
    </div>
  );
};

export default Formulario;
