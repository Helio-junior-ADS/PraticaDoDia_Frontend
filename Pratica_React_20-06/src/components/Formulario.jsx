import { React, useState } from "react";

const Formulario = () => {
  const [inf,setInf] = useState();
  const handleValue = (value) => {
    return setInf((previusValue) => ({
      ...previusValue,
      [value.target.name]:value.target.value
    }));
  }
  const show = () => {
    return alert(`Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`);
  }
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <label>First Name: </label>
        <input onChange={handleValue} type="text" name="firstName"/>
      </div>
      <div>
        <label>Last Name: </label>
        <input onChange={handleValue} type="text" name="lastName"/>
      </div>
      <div>
        <label>Age: </label>
        <input onChange={handleValue} type="text" name="age"/>
      </div>
      <br />
      <button onClick={show}>SEND</button>
    </div>
  );
};

export default Formulario;
