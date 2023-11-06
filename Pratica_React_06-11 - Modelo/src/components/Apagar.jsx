import axios from "axios";
import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Apagar = () => {
  const {id} = useParams();
 
  const [message, setMessage] = useState();

  const deleteUser = async () => {

    await axios.delete(`http://localhost:3333/users/${id}`).then((response)=> {
      setMessage(response.data.message);      
    }).catch((err)=> {
      setMessage(err.response.data.message);
    });
  }

  return (
    <div>
      <h1>Apagar</h1>
     
      {message ? <h2>{message}</h2> : <h2>Tem certeza que deseja apagar usuário {id} ?</h2>}

      {message ? <Link to={'/lista'}><button type="button">Voltar</button></Link> : ''}{' '}

      {message ? <button onClick={deleteUser}hidden>Sim</button>:<button onClick={deleteUser} >Sim</button> }{' '}

      {message ? <Link to={'/lista'}><button type="button" hidden>Não</button></Link> : <Link to={'/lista'}><button type="button">Não</button></Link>}

    </div>
  );
};

export default Apagar;
