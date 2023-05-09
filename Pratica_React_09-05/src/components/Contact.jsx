import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul><p><Link to={'/contact/1'}>Contato - 1</Link></p></ul>
      <ul><p><Link to={'/contact/2'}>Contato - 2</Link></p></ul>
      <ul><p><Link to={'/contact/3'}>Contato - 3</Link></p></ul>
      <ul><p><Link to={'/contact/4'}>Contato - 4</Link></p></ul>
      <ul><p><Link to={'/contact/5'}>Contato - 5</Link></p></ul>
    </div>
  );
};

export default Contact;
