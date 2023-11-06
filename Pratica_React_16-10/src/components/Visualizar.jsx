import axios from "axios";
import {useEffect,useState,React} from "react";
import { useParams,Link } from "react-router-dom";

const Visualizar = () => {
  const {id} = useParams();
  const [dados,setDados] = useState({});
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
  return (
    <div>
      <h1>Informações do usuário {dados.id}</h1>
      {message ? <p>{message}</p> : ''}
      <Link to={'/listar'}><button type="button">Voltar</button></Link><br /><br />
      <span>Id: {dados.id}</span><br />
      <span>Nome: {dados.nome}</span><br />
      <span>E-mail: {dados.email}</span><br />
      <span>Subject: {dados.subject}</span><br />
      <span>Content: {dados.content}</span><br />
      <hr />
    </div>
  );
};

export default Visualizar;
