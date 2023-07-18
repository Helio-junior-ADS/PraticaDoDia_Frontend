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
    return alert(`Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`)
  }
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <div>
          <label>First Name: </label>
          <input
            onChange={handleValue}
            name="firstName"
            type="text"
            placeholder="Primeiro Nome"
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            onChange={handleValue}
            name="lastName"
            type="text"
            placeholder="Sobrenome"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            onChange={handleValue}
            name="age"
            type="text"
            placeholder="Idade"
          />
        </div>
        <br />
        <button onClick={show}>SEND</button>
      </div>
    </div>
  );
};

export default Formulario;
