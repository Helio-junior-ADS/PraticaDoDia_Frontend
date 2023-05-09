import { React, useState } from "react";

const Formulario = () => {
  const [inf, setInf] = useState();
  const handlevalue = (value) => {
    return setInf((previusValue) => ({
      ...previusValue,
      [value.target.name]: value.target.value,
    }));
  };
  const show = () => {
    return alert(`Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\n Age: ${inf.age}`)
  }
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input onChange={handlevalue} name="firstName" type="text" placeholder="Primeiro nome" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input onChange={handlevalue} name="lastName" type="text" placeholder="Sobrenome" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input onChange={handlevalue} name="age" type="text" placeholder="Idade" />
      </div>
      <br />
      <button onClick={show}>SEND</button>
    </div>
  );
};

export default Formulario;
