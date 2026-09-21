import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Login from './pages/Login'
import Deshboard from './pages/Deshboard'
import './App.css'

function App() {
  const [user, setUser] = useState(() => localStorage.getItem('user') || '')
  const [password, setPassword] = useState(() => localStorage.getItem('password') || '')

  const handleLogin = (u, p) => {
    setUser(u)
    setPassword(p)
    localStorage.setItem('user', u)
    localStorage.setItem('password', p)
  }

  const handleLogout = () => {
    setUser('')
    setPassword('')
    localStorage.removeItem('user')
    localStorage.removeItem('password')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout user={user} handleLogout={handleLogout} />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/deshboard" element={<Deshboard user={user} password={password} handleLogout={handleLogout} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App