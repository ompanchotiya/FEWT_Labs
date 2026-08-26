import React from 'react'
import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'
import Myfooter from './Myfooter'

function Layout1() {
  return (
    <div>
      <Navbar1 />
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

export default Layout1
