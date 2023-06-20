import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <ul>
      <Link to={'/home'}><p>Home</p></Link>
      <Link to={'/Contact'}><p>Contact</p></Link>
      <Link to={'/contador'}><p>Contador</p></Link>
      <Link to={'/formulario'}><p>Formulário</p></Link>
      <Link to={'/github'}><p>GitHub</p></Link>
      <Link to={'/theme'}><p>Theme</p></Link>
    </ul>
  )
}

export default NavBar