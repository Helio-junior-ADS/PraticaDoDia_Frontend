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
      setRepos(res2.data);
    } catch {
      (err) => {
        console.error("Error", err);
      };
    } finally {
      console.log("Promisse Finalizada com Sucesso !!!!");
    }
  };
  return (
    <div className="">
      <div className={`
        flex flex-col items-center 
        w-3/4 m-auto md:w-1/3 
        bg-gray-200 shadow-lg shadow-black
        rounded-lg
        
        `}>
        <h1 className={`
          text-center mt-5 text-4xl font-bold md:my-5
        `}>GitHub</h1>
        <div className={`          
          text-center
          bg-gray-200 md:bg-gray-300
          md:border-2 border-white
          rounded-lg       

        `}>
          <label className={`
            font-semibold            
            collapse md:visible                       
          `}>User: </label>
          <input
            className={`
              md:bg-gray-200 focus:bg-indigo-200
              border-double border-2 border-indigo-500 md:border-none 
              w-full md:w-1/2              
              rounded
              text-center             
            `}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuário"
            type="text"            
          />
          <button className={`
              bg-indigo-500
              px-2 rounded 
              font-semibold
              my-2 mx-1
            `} onClick={handleValue}>SEARCH</button>
        </div>
        <div className={`
          text-center
          
        `}>
          <p className="mb-2 font-light text-lg">{inf.name}</p>          
          <img className={`
            w-3/4 m-auto md:w-5/6 mt-10           
            rounded-xl
            bg-gray-200 shadow-lg shadow-black
                       
          `}
           src={inf.avatar_url} />
        </div>
        <ul className={`
          my-10
          text-center
        `}>
          {repos.map((item) => {
            return (
              <div>
                <li>
                  <p>{item.name}</p>
                  <a href={item.html_url}>SAIBA - MAIS</a>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GitHub;
