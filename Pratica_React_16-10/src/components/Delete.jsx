import {useEffect,useState,React} from "react";
import axios from 'axios';
import { Link,useParams } from "react-router-dom";

const Delete = () => {
  const {id} = useParams();
  const [message, setMessage] = useState('');

  const deleteUser = async () => {
   
    await axios.delete(`http://localhost:3333/users/${id}`).then((response) => {
      setMessage(response.data.msg);      
     
    }).catch((err) => {
     
    });
  };
  useEffect(() => {
    deleteUser();
  },[id])

  return (
    <div>
      <h1>Delete</h1>
      <Link to={'/listar'}><button type="button">Voltar</button></Link><br /><br />
      {message ? <h2>{message}</h2> : ''}
    </div>
  );
};

export default Delete;
