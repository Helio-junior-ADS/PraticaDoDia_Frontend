import {useEffect,useState,React} from "react";
import axios from 'axios';
import { Link,useParams } from "react-router-dom";

const Editar = () => {
  const {id} = useParams();
  const [dados,setDados] = useState({
    id:'',
    nome:'',
    email:'',
    content:'',
    subject:''
  });
  const [message,setMessage] = useState();

  const getUser = async () => {
    
      await axios.get(`http://localhost:3333/users/${id}`).then((response) => {        
         
        setDados(response.data.user);
       
      }).catch((err) => {
        if(err.response){
          setMessage(err.response.data.message);
        } else {
          setMessage("Erro: Tente novamente mais tarde");
        };
      });
    ; 
  }
  useEffect(() => {
    getUser();
  },[id])
  const handleValue = (e) => {setDados((previusValue) => ({...previusValue,[e.target.name]:e.target.value}))}

  const putUSer = async (e) => {
    e.preventDefault();
    const headers = {
      'headers' : {
        'Content-Type':'application/json'
      }
    }
    await axios.put(`http://localhost:3333/users`,dados,headers).then(( response ) => {
      setMessage(response.data.message);
    }).catch((err) => {
      if(err.response){
        setMessage(err.response.data.message);
      } else {
        setMessage("Erro:: Tente novamente mais tarde");
      };
    })
  } 
  
  return (
    <div>
      <h1>Editar</h1>
      <Link to={'/listar'}><button type="button">Voltar</button></Link><br /><br />
      <h2>{message ? <p>{message}</p> : ''}</h2>
      <form onSubmit={putUSer}>
        <input value={dados.id} name="id" type="hidden"/><br /><br />

        <label>Nome: </label>
        <input value={dados.nome} name="nome" type="text" placeholder="Insira seu nome" onChange={handleValue} /><br /><br />

        <label>E-mail: </label>
        <input value={dados.email} name="email" type="text" placeholder="Insira seu nome" onChange={handleValue} /><br /><br />

        <label>Subject: </label>
        <input value={dados.subject} name="subject" type="text" placeholder="Insira seu nome" onChange={handleValue}/><br /><br />

        <label>Content: </label>
        <textarea value={dados.content} name="content" cols="30" rows="10" placeholder="Insira seu conteúdo" onChange={handleValue}></textarea><br /><br />

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default Editar;
