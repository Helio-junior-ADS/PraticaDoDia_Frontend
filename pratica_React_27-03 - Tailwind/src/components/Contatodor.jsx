import { React, useState } from "react";

const Contatodor = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        className={`
        flex flex-col items-center
        w-96 m-auto rounded-lg      
        bg-red-900  text-white              
      `}
      >
        <h1 className="my-2 text-2xl">Contador {count}</h1>
        <div className="my-2">
          <button className={`
            bg-black
            px-3 mx-2
            rounded
          `} onClick={() => setCount(count + 1)}>+</button>
          <button className={`
            bg-black
            px-3 mx-2
            rounded
          `} onClick={() => setCount(count - 1)}>-</button>
          <button className={`
            bg-black
            px-3 mx-2
            rounded
          `} onClick={() => setCount(count === 1)}>zero</button>
        </div>
      </div>
    </div>
  );
};

export default Contatodor;
