import { React, useState, useEffect } from "react";
import axios from "axios";

const GitHub = () => {
  const [users,setUsers] = useState([]);
  const [inf,setInf] = useState({});
  const [repos,setRepos] = useState([]);

  const URL_user = `https://api.github.com/users/${users}`
  const URL_repos = `https://api.github.com/users/${users}/repos`
   
  const handleValue = async () => {
    const res = await axios.get(URL_user);
    setInf(res.data)

    const res2 = await axios.get(URL_repos);
    setRepos(res2.data)   
  } 


   
  return (
    <div>
      <h1>GitHub</h1>
      <div>
        <label>User: </label>
        <input type="text" onChange={(e)=>{setUsers(e.target.value)}} placeholder="Insira seu usuário" /><br /><br />
        <button onClick={handleValue}>SEARCH</button><br /><br />
        <p>{inf.name}</p>
        <p>{inf.html_url}</p>
        <img src={inf.avatar_url} alt="" />
        <div>
          <ul>{repos.map((item)=>{
            return (
              <div>
                <li>{item.name}</li>
                <a href={item.html_url} target="_blank">SAIBA - MAIS</a>
              </div>
            )
          })}</ul>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
