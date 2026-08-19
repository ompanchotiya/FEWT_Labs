import React from 'react'
import { Link } from 'react-router-dom'


function Navbar1() {
  return (
    <div>
      <button><Link to="/Home">Home</Link></button>
      <button><Link to="/About">About</Link></button>
      <button><Link to="/Contect">Contect</Link></button>
      <button><Link to="/Galary">Galary</Link></button>
      <button><Link to="/Login">Login</Link></button>
      
    </div>
  )
}

export default Navbar1
