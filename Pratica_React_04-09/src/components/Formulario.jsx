import { React, useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [dados, setDados] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const [message, setMessage] = useState("");
  const [get, setGet] = useState([]);

  const handleValue = (e) => {
    return setDados((dados) => ({
      ...dados,
      [e.target.name]: e.target.value,
    }));
  };

  const showMsg = async (e) => {
    e.preventDefault();

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("http://localhost:3000/message", dados, headers)
      .then((response) => {
        return setMessage(response.data.message);
      })
      .catch((err) => {
        console.log("Error", err);
      });

      setDados({
        name: "",
        email: "",
        subject: "",
        content: "",
      });
  };

  const getAll = async () => {
   
    await axios.get('http://localhost:3000/message').then((response)=>{
      setGet(response.data);      
    }).catch((err)=>{
      console.log('Error',err);
    })
  }

  return (
    <div>
      <h1>Formulário</h1>
      {message ? <p>{message}</p> : ""}
      <form onSubmit={showMsg}>
        <label>Nome: </label>
        <input
          type="text"
          value={dados.name}
          name="name"
          placeholder="Insira seu nome"
          onChange={handleValue}
        />
        <br />
        <br />

        <label>E-mail: </label>
        <input
          type="text"
          value={dados.email}
          name="email"
          placeholder="Insira seu email"
          onChange={handleValue}
        />
        <br />
        <br />

        <label>Subject: </label>
        <input
          type="text"
          value={dados.subject}
          name="subject"
          placeholder="Insira o assunto"
          onChange={handleValue}
        />
        <br />
        <br />

        <textarea
          name="content"
          value={dados.content}
          id=""
          cols="30"
          rows="10"
          onChange={handleValue}
        ></textarea>
        <br />
        <br />

        <button type="submit">ENVIAR</button>
      </form><br /><br />
      <div>
        <button onClick={getAll}>BUSCAR</button>
      <ul>{get.map((item)=>{
          return (
            <div>
              <h2>id: {item.id}</h2>
              <p>Nome: {item.name}</p>
              <p>E-mail: {item.email}</p>
              <p>Subject: {item.subject}</p>
              <p>Content: {item.content}</p>
            </div>
          )
        })}</ul>
      </div>
    </div>
  );
};

export default Formulario;
