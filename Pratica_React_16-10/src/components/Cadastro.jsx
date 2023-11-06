import { useState, React } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [dados,setDados] = useState({
    nome:'',
    email:'',
    content:'',
    subject:''
  });
  const [message,setMessage] = useState('');

  const handleValue = (e) => {setDados((previusValue) => ({...previusValue,[e.target.name]:e.target.value}))}
  const postUser = async (e) => {
    e.preventDefault()
    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }
    await axios.post(`http://localhost:3333/users`,dados,headers).then((response) => {
      setMessage(response.data.message);
    }).catch((err) => {
      if (err.response) {
        setMessage(err.response.data.message)
      } else {
        setMessage("Erro: Tente novamente mais tarde");
      }
    });

    setDados({
      nome:'',
      email:'',
      content:'',
      subject:''
    })
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <Link to={'/listar'}><button type="button">Listar</button></Link>
      <h2>{message ? <p>{message}</p> : ''}</h2>
      <form onSubmit={postUser}>
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

export default Cadastro;
