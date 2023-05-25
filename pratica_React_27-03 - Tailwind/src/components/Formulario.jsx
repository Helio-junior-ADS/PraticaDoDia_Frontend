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
    return alert(
      `Primeiro nome: ${inf.firstName}\nSobrenome: ${inf.lastName}\nAge: ${inf.age}`
    );
  };
  return (
    <div
      className={`
      flex justify-center      
    `}
    >
      <form
        className={`        
          w-96 m-auto
      `}
      >
        <h1 className="text-center py-2 text-2xl">Formulário</h1>
        <div>
          <label className="ml-2" htmlFor="firstName">First Name: </label>
        </div>
        <input
          className={`
            w-full            
            rounded                       
            bg-gray-200 focus:bg-indigo-200
            px-3                     
          `}
          onChange={handleValue}
          name="firstName"
          type="text"          
        />

        <div>
          <label className="ml-2" htmlFor="lastName">Last Name: </label>
        </div>
        <input
          className={`
          w-full            
          rounded                       
          bg-gray-200 focus:bg-indigo-200
          px-3                     
        `}
          onChange={handleValue}
          name="lastName"
          type="text"          
        />

        <div>
          <label className="ml-2" htmlFor="age">Age: </label>
        </div>
        <input
           className={`
           w-full            
           rounded                       
           bg-gray-200 focus:bg-indigo-200
           px-3                     
         `}
          onChange={handleValue}
          name="age"
          type="text"         
        />             
        <button
          className={`
          my-5
          bg-indigo-500 hover:bg-indigo-400
          rounded font-bold
          w-full 
        `}
          onClick={show}
        >
          SEND
        </button>        
      </form>

    </div>
  );
};

export default Formulario;
