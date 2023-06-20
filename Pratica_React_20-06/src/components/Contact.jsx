import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p><Link to={'/contact/1'}>Contact - 1</Link></p>
      <p><Link to={'/contact/2'}>Contact - 2</Link></p>
      <p><Link to={'/contact/3'}>Contact - 3</Link></p>
      <p><Link to={'/contact/4'}>Contact - 4</Link></p>
      <p><Link to={'/contact/5'}>Contact - 5</Link></p>
    </div>
  );
};

export default Contact;
