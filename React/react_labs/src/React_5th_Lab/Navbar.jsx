import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <button><Link to="/Home">Home</Link></button>
      <button><Link to="/About">About</Link></button>
      <button><Link to="/Contect">Contect</Link></button>
      <button><Link to="/Galary">Galary</Link></button>
      <button><Link to="/Login">Login</Link></button>
      <button><Link to="/A01">A01</Link></button>
      <button><Link to="/A02">A02</Link></button>
      <button><Link to="/A03">A03</Link></button>
      <button><Link to="/A04">A04</Link></button>
      <button><Link to="/A05">A05</Link></button>
      <button><Link to="/A06">A06</Link></button>
      <button><Link to="/A07">A07</Link></button>
      <button><Link to="/A08">A08</Link></button>
      <button><Link to="/A09">A09</Link></button>
      <button><Link to="/A10">A10</Link></button>
    </div>
  )
}

export default Navbar
