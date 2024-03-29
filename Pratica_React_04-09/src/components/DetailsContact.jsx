import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailsContact = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const red = () => {
    return navigate('/contact');
  }
  return (
    <div>
      <h1>Informações do Contato {id}</h1>
      <button onClick={red}>SEND</button>
    </div>
  );
};

export default DetailsContact;
