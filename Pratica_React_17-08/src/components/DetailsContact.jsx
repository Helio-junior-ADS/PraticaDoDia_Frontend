import React from "react";
import {useParams, useNavigate} from 'react-router-dom'

const DetailsContact = () => {
  const {id} = useParams();
  const nav = useNavigate();
  const red = () => {
    return nav('/contact');
  }

  return (
    <div>
      <h1>Informações do contato {id}</h1>
      <button onClick={red}>SEND</button>
    </div>
  );
};

export default DetailsContact;
