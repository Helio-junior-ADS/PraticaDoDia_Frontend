import { React, useState } from "react";

const Contador = () => {
  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>Contador {count}</h1>
      <button onClick={()=> {setCount(count + 1)}}>+</button>
      <button onClick={()=> {setCount(count - 1)}}>-</button>
      <button onClick={()=> {setCount(count === 1)}}>zero</button>     
    </div>
  );
};

export default Contador;
