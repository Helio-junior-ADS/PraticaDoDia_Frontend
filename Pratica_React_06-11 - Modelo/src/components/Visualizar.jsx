import axios from "axios";
import {useEffect,React, useState} from "react";
import {useParams, Link} from 'react-router-dom'

const Visualizar = () => {
  const {id} = useParams();
  const [user,setUser] = useState({});
  const [message,setMessage] = useState('');

  const getUser = async () => {
    await axios.get(`http://localhost:3333/users/${id}`).then((response)=> {
      
      setUser(response.data.user);

    }).catch((err)=> {

      setMessage(err.response.data.message)
    })
  }
  useEffect(()=>{
    getUser();
  },[id])
  return (
    <div>
      <h1>Visualizar</h1>

      {message ? <p>{message}</p> : ''}

      <h2>ID:{id}</h2><br />

      <span>Nome: {user.nome}</span><br />
      <span>E-mail: {user.email}</span><br />
      <span>Subject:{user.subject}</span><br />
      <span>Content: {user.content}</span><br /><br />

      <hr /><br />
      <Link to={'/lista'}><button type="button">Voltar</button></Link>{' '}
      <Link to={`/atualizar/${user.id}`}><button>Atualizar</button></Link>{' '}
      <Link to={`/apagar/${user.id}`}><button>Apagar</button></Link><br />
      

    </div>
  );
};

export default Visualizar;
