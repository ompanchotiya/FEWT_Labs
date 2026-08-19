import React from 'react'
import Navbar2 from './Navbar2'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout2() {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout2