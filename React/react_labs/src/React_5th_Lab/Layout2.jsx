import React from 'react'
import Navbar2 from './Navbar2'
import { Outlet } from 'react-router-dom'
import Myfooter from './Myfooter'

function Layout2() {
  return (
    <div>
      <Navbar2 />
      <br />
      <br />
      <hr />
      <Outlet />
      <br />
      <br />
      <hr />
      <Myfooter />
    </div>
  )
}

export default Layout2
