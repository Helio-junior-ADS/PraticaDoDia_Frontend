import { React, useState } from "react";

const Formulario = () => {
  const [inf,setInf] = useState();
  const handleValue = (value) => {
    return (
      setInf((previusValue)=>({
        ...previusValue,
        [value.target.name]:value.target.value
      }))
    )
  }
  const show = () => {
    return alert(`Primeiro Nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`)
  }
  return (
    <div>
      <h1>Formulário</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input onChange={handleValue} type="text" name="firstName" placeholder="Primeiro Nome" />        
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input  onChange={handleValue} type="text" name="lastName" placeholder="Sobrenome" />        
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input  onChange={handleValue} type="text" name="age" placeholder="Idade" />        
      </div>
      <br />
      <button onClick={show}>SEND</button>
    </div>
  );
};

export default Formulario;
