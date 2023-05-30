import { React, useState } from "react";

const Formulario = () => {
  const [inf, setInf] = useState();
  const handleValue = (value) => {
    return setInf((previusValue) => ({
      ...previusValue,
      [value.target.name]: value.target.value,
    }));
  };
  const show = () => {
    return alert(`Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nIdade: ${inf.age}`);
  }
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input onChange={handleValue} name="firstName" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input onChange={handleValue} name="lastName" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input onChange={handleValue} name="age" type="text" />
      </div>
      <br />
      <div>
        <button onClick={show}>SEND</button>
      </div>
    </div>
  );
};

export default Formulario;
