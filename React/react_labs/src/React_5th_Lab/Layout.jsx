import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <Navbar />
      <hr />
      <br />
      <br />
      <Outlet />
      <br />
      <br />
      <hr />
      <Footer />
      <hr />
    </div>
  )
}

export default Layout
