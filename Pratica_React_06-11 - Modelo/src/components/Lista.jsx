import { useEffect,useState,React } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Lista = () => {

  const [user, setUser] = useState([]);
  const [page, setPage] = useState('');
  const [lastPage, setLastPage] = useState('');
  const [message, setMessage] = useState('');
  
  const getUser = async (page) => {
    if(page === undefined) {
      page = 1
    }
    setPage(page)
   
    await axios.get(`http://localhost:3333/users?page=${page}`).then((response)=> {

      setUser(response.data.users);
      setLastPage(response.data.pagination.lastPage);
     
      
    }).catch((err)=> {

      setMessage(err.response.data.message)
    })
  }
  useEffect(()=> {
    getUser()
  },[])
  return (
    <div>
      <h2>Lista</h2>
      <Link to={'/home'}><button type="button">Cadastro</button></Link><br /><br />
      <hr />
        {message ? <p>{message}</p> : ''}
      {user.map(item => (
        <div key={item.id}>
          <span>Id: {item.id}</span><br />
          <span>Nome: {item.nome}</span><br />
          <span>E-mail {item.email}</span><br />
          <span>Titulo: {item.subject}</span><br />
          <span>Conteúdo: {item.content}</span><br /><br />

          <Link to={`/visualizar/${item.id}`}><button type="button">Visualizar</button></Link> {" "}

          <Link to={`/atualizar/${item.id}`}><button type="button">Atualizar</button></Link> {" "}

          <Link to={`/apagar/${item.id}`}><button type="button">Apagar</button></Link> {" "}
          <hr />
          <br />
        </div>        
      ))}
      {page !== 1 ? <button onClick={() => getUser(1)}>Primeira</button> : <button onClick={() => getUser(1)} disabled>Primeira</button>}{' '}

      {page !== 1 ? <button onClick={()=> getUser(page - 1)}>{page - 1}</button> : ""}{" "}

      <button type="button" disabled>{page}</button>{" "}

      {page + 1 <= lastPage ? <button onClick={()=> getUser(page + 1)}>{page + 1}</button> : " "}{" "}

      {page !== lastPage ? <button onClick={() => getUser(lastPage)}>Ultima</button> : <button onClick={() => getUser(lastPage)} disabled>Ultima</button> }{' '}
    </div>
  );
};

export default Lista;
