import { React, useState } from "react";
import axios from "axios";

const GitHub = () => {
  const [user, setUser] = useState([]);
  const [inf, setInf] = useState([]);
  const [repos, setRepos] = useState([]);

  const URL_user = `https://api.github.com/users/${user}`;
  const URL_repos = `https://api.github.com/users/${user}/repos`;

  const handleValue = async () => {
    try {
      const res = await axios.get(URL_user);
      setInf(res.data);

      const res2 = await axios.get(URL_repos);
      console.log(res2.data);
      setRepos(res2.data);
    } catch {
      (err) => {
        console.error("Erro", err);
      };
    } finally {
      console.log("PROMISSE FONALIZADA");
    }
  };
  return (
    <div>
      <h1>GitHub</h1>
      <div>
        <label>User: </label>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          type="text"
          placeholder="Usuario"
          required
        />
      </div>
      <br />
      <button onClick={handleValue}>SEARCH</button>
      <div>
        <p>{inf.name}</p>
        <p>{inf.html_url}</p>
        <img src={inf.avatar_url}></img>
      </div>
      <div>
        {repos.map((item) => {
          return (
            <ul>
              <li>
                <p>{item.name}</p>
                <a href={item.html_url} target="_black">Saiba mais</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default GitHub;