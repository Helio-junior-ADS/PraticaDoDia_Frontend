import axios from "axios";
import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";

const Listar = () => {
  const [dados,setDados] = useState([]);
  const [message,setMessage] = useState('');
  const [page,setPage] = useState();
  const [lastPage,setLastPage] = useState();

  const getUser = async (page) => {
    if(page === undefined) {
      page = 1;
    }
    setPage(page);

    await axios.get(`http://localhost:3333/users?page=${page}`).then((response) => {
      setDados(response.data.users);
      setLastPage(response.data.pagination.lastPage);
    }).catch((err) => {
      if(err.response){
        setMessage(err.response.data.message);
      } else {
        setMessage("Erro:: Tente novamente mais tarde");
      };
    });
  };

  useEffect(() => {
    getUser();
  },[]);
  
  return (
    <div>
      <h1>Listar</h1>

      <h2>{message ? <p>{message}</p> : ''}</h2>
      <Link to={'/cadastro'}><button type="button">Cadastro</button></Link><br /><br />
      {dados.map( item => (
        <div key={item.id}>
          <span>Id: {item.id}</span><br />
          <span>Nome: {item.nome}</span><br />
          <span>E-mail: {item.email}</span><br />
          <span>Subject: {item.subject}</span><br />
          <span>Content: {item.content}</span><br /><br />
          <Link to={`/visualizar/${item.id}`}><button type="button">Visualizar</button></Link>{' '}
          <Link to={`/editar/${item.id}`}><button type="button">Editar</button></Link>{' '}
          <Link to={`/delete/${item.id}`}><button type="button">Apagar</button></Link>{' '}
          <hr />
          <br />
        </div>
      ))}
      {page !== 1 ? <button onClick={() => getUser(1)} type="button">Primeira</button> : <button type="button" disabled>Primeira</button>}
      {" "}
      {page !== 1 ? <button onClick={() => getUser(page - 1)} type="button">{page - 1}</button> : ''}
      {" "}
      <button type="button" disabled>{page}</button>
      {" "}
      {page + 1 <= lastPage ? <button onClick={() => getUser(page + 1)} type="button">{page + 1}</button> : ''}
      {page !== lastPage ? <button onClick={() => getUser(lastPage)} type="button">Ùltima</button> : <button type="button" disabled>Ùltima</button>}
      {" "}
    </div>
  );
};

export default Listar;
