import axios from 'axios';

 const Api = axios.create({
  baseURL : "https://api.github.com/users"
});

/* export const Api_repos = axios.create({
  baseURL: "https://api.github.com/users"
}) */

export default Api