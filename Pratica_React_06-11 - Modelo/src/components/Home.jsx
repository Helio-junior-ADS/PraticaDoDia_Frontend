import { useState, React } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    subject: "",
    content: "",
  });
  const [message, setMessage] = useState("");

  const handleValue = (value) =>
    setDados((previusValues) => ({
      ...previusValues,
      [value.target.name]: value.target.value,
    }));

  const CreateUser = async (e) => {
    e.preventDefault();
    const headers = {
      hearder: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("http://localhost:3333/users", dados, headers)
      .then((response) => {
        setMessage(response.data.message);

        setDados({
          nome: "",
          email: "",
          subject: "",
          content: "",
        });
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>Home</h1>

      <h2>Formulário</h2>

      {message ? <p>{message}</p> : ""}

      <form onSubmit={CreateUser}>
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

    <Link to={'/lista'}><button type="button">Lista</button></Link>
    </div>
  );
};

export default Home;
