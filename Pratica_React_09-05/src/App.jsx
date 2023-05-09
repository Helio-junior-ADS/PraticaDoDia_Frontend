import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'

import { useContext } from 'react'
import {ThemeContext} from './components/ThemeContext/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <div className={`App: ${theme === 'Light'?'theme-light': ''}`}>
        <NavBar/>
        <h1>Prática React</h1>
        <Outlet/>
      </div>       
    </>
  )
}

export default App
