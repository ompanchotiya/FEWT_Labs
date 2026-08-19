import React from 'react'
import Navbar1 from './Navbar1'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout1() {
  return (
    <div>
      <Navbar1 />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout1
