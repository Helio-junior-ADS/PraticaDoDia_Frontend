import { React, useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import axios from 'axios';

const Atualizar = () => {
  const {id} = useParams()

  const [dados, setDados] = useState({
    nome: "",
    email: "",
    subject: "",
    content: "",
  });
  
 
  const [message, setMessage] = useState(); 


 
    const getUser = async () => {
      await axios.get(`http://localhost:3333/users/${id}`).then((response)=> {
       
        setDados(response.data.user);
      }).catch((err)=> {
        setMessage(err.response.data.message)
      })
    }
    useEffect(()=>{
      getUser();
    },[id]);

    const handleValue = (value) =>
    setDados((previusValues) => ({
      ...previusValues,
      [value.target.name]: value.target.value,
    }));



    const updateUser = async (e) => {
      e.preventDefault();
      const headers = {
        hearder: {
          "Content-Type": "application/json",
        },
      };
      await axios.put('http://localhost:3333/users',dados,headers).then((response)=> {

        console.log(response.data)
        setMessage(response.data.message)
      }).catch((err)=> {

        setMessage(err.response.data.message)
      })
    }
  return (
    <div>
      <h1>Atualizar</h1>

      <Link to={'/lista'}><button>Voltar</button></Link><br /><br />

           
      {message ? <p>{message}</p> : ""}

      <form onSubmit={updateUser}>
        <label>Nome: </label>
        <input
          value={dados.nome}
          name="nome"
          type="text"
          placeholder="Insira seu nome"
          onChange={handleValue}
        />
        <br />
        <br />

        <label>Email: </label>
        <input
          value={dados.email}
          name="email"
          type="text"
          placeholder="Insira seu e-mail"
          onChange={handleValue}
        />
        <br />
        <br />

        <label>Subject: </label>
        <input
          value={dados.subject}
          name="subject"
          type="text"
          placeholder="Insira seu título"
          onChange={handleValue}
        />
        <br />
        <br />

        <label>Content: </label>
        <textarea
          value={dados.content}
          name="content"
          cols="30"
          rows="10"
          onChange={handleValue}
        ></textarea>
        <br />
        <br />

        <button type="submit">SEND</button><br /><br />
      </form>
    </div>
  );
};

export default Atualizar;
