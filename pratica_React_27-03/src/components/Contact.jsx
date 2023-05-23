import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      className={`
      flex flex-col items-center 
      w-full    
    `}
    >
      <div className={`
        text-center
        bg-red-800
        w-96 rounded-lg
      `}>
        <h1
          className={`          
          text-4xl text-white
          my-10
          `}
        >
          Contact
        </h1>
        <p
          className={`
          my-5          
          `}
        >
          <Link
            className={`
            px-3 py-1 rounded-full 
            bg-black text-white
          `}
            to={"/contact/1"}
          >
            Contato - 1
          </Link>
        </p>
        <p
          className={`
          my-5
        `}
        >
          <Link
            className={`
            px-3 py-1
            p-1 rounded-full 
            bg-black text-white
        `}
            to={"/contact/2"}
          >
            Contato - 2
          </Link>
        </p>
        <p
          className={`
          my-5
        `}
        >
          <Link
            className={`
            px-3 py-1
            p-1 rounded-full 
            bg-black text-white
        `}
            to={"/contact/3"}
          >
            Contato - 3
          </Link>
        </p>
        <p
          className={`
          my-5
        `}
        >
          <Link
            className={`
              px-3 py-1
              p-1 rounded-full 
              bg-black text-white
            `}
            to={"/contact/4"}
          >
            Contato - 4
          </Link>
        </p>
        <p
          className={`
          my-5          
        `}
        >
          <Link
            className={`
              px-3 py-1
              p-1 rounded-full 
              bg-black text-white
              
          `}
            to={"/contact/5"}
          >
            Contato - 5
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
