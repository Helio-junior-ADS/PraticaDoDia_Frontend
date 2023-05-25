import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailsContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const red = () => {
    return navigate("/contact");
  };
  return (
    <div className={`
              
       
       
      `}>
      <div className={`
        flex flex-col items-center
        bg-red-900 text-white
        
      `}>
        <h1 className={`my-3 text-2xl`}>Informações do Contato {id}</h1>
        <button  className={`
          bg-black
          px-5 py-1 mb-3
          rounded-lg
         
        `} onClick={red}>SEND</button>
      </div>
    </div>
  );
};

export default DetailsContact;
