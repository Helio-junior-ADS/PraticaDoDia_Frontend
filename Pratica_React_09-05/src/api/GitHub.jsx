import { React, useState } from "react";
import axios from 'axios';

const GitHub = () => {
  const [user, setUser] = useState([])
  const [inf, setInf] = useState([])
  const [repos, setRepos] = useState([])

  const URL_user = `https://api.github.com/users/${user}`
  const URL_repos = `https://api.github.com/users/${user}/repos`  

  const handleInfo = async () => {
    try {
      const res = await axios.get(URL_user);
      setInf(res.data)
      const res2 = await axios.get(URL_repos);
      setRepos(res2.data)
      
    }catch{(err)=>{
      console.log("Erro", err)
    }}finally{
      console.log("Promisse Finalizada")
    }
  }
  return (
    <div>
      <h1>GitHub</h1>
      <div>
        <label>User: </label>
        <input onChange={e => setUser(e.target.value)} type="text" placeholder="Insira seu User"/>
        <button onClick={handleInfo}>SEARCH</button>
        <div>
          <p>{inf.name}</p>
          <p>{inf.html_url}</p>
          <img src={inf.avatar_url} alt="" />
        </div>
        <div>
          <ul>
            {repos.map((item)=>{
              return (
                <div>
                  <ul>
                    <p>{item.name}</p>
                    <a href={item.html_url} target="_blank">Saiba - mais</a>
                  </ul>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
