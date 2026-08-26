import React from 'react'
import { useState } from 'react';

function LoginPage({handleLogin}) {
  const [user , setUser] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user == 'om' && password == '12345'){
      handleLogin(user);
      alert("login sucessfully ");
    }
    else{
      alert("invalid user or password");
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="">UserName</label>
        <input type="text" value={user} onChange={(e) => {setUser(e.target.value)}}/>Name
        <br />

        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>Password
        <br />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage

