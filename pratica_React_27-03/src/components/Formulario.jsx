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
  return alert(`Primeiro nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`);
 }
  return (
    <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label htmlFor="firstName">FirstName: </label>
          <input
            onChange={handleValue}
            name="firstName"
            type="text"
            placeholder="Primeiro Nome"
          />
        </div>
        <div>
          <label htmlFor="lastName">LastName: </label>
          <input
            onChange={handleValue}
            name="lastName"
            type="text"
            placeholder="Sobrenome"
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={handleValue}
            name="age"
            type="text"
            placeholder="Idade"
          />
        </div>
        <br />
        <button onClick={show}>SEND</button>
      
      </form>
    </div>
  );
};

export default Formulario;
