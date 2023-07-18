import { React, useState } from "react";
import axios from "axios";

const GitHub = () => {
  const [user, setUser] = useState([]);
  const [inf, setInf] = useState([]);
  const [repos, setRepos] = useState([]);

  const URL_user = `https://api.github.com/users/${user}`
  const URL_repos = `https://api.github.com/users/${user}/repos`

  const handleValue = async () => {
    try {
      const res = await axios.get(URL_user);
      setInf(res.data)     

      const res2 = await axios.get(URL_repos);
      setRepos(res2.data)
      console.log(res2.data)

    }catch{(err)=> {
      console.log('Erro',err)
    }}finally {
      console.log('PROMISSE FINALIZADA !!!')
    }
  }

  return (
    <div>
      <h1>GitHub</h1>
      <div>
        <label>Usuário: </label>
        <input onChange={ e => setUser(e.target.value)} type="text" placeholder="Entre com Usuário" required/>
        <button onClick={handleValue}>SEARCH</button>
      </div>
      <div>
        <p>{inf.name}</p>
        <p>{inf.html_url}</p>
        <img src={inf.avatar_url}/>
      </div>      
      <div>
      <ul>
          {repos.map((item)=>{
            return (
              <div>
                <li>
                  <p>{item.name}</p>
                  <a href={item.html_url} target="_blank">Saiba - Mais</a>
                </li>
              </div>
            )
          })}
         </ul>  
      </div>
    </div>
  );
};

export default GitHub;
