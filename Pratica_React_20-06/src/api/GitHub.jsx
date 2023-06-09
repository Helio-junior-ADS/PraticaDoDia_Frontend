import { React, useState } from "react";
import axios from "axios";

const GitHub = () => {
  const [user,setUser] = useState([]);
  const [inf,setInf] = useState([]);
  const [repos,setRepos] = useState([]);

  const URL_user = `https://api.github.com/users/${user}`;
  const URL_repos = `https://api.github.com/users/${user}/repos`;
  
  const handleValue = async () => {
    const res = await axios.get(URL_user);
    setInf(res.data);

    const res2 = await axios.get(URL_repos);
    setRepos(res2.data)      
  }
  return (
    <div>
      <h1>GitHub</h1>
      <div>
        <label>User: </label>
        <input onChange={(e)=> setUser(e.target.value)} type="text" target='blank_' placeholder="Insira seu usuário" />
        <button onClick={handleValue}>SEARCH</button>
      </div>
      <div>
        <p>{inf.login}</p>
        <p>{inf.html_url}</p>
        <img src={inf.avatar_url}/>
      </div>
      <div>
        <ul>{repos.map((item)=>{
          return (
            <div>
              <li>{item.name}</li>
              <p><a href={item.html_url} target="blank_">SAIBA-MAIS</a></p>
            </div>
          )
        })}</ul>
      </div>
    </div>
  );
};

export default GitHub;
