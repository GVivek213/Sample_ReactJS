import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

const Login = () => {
    const [user , setUser] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () =>{
        auth.Login(user)
        navigate('/')
    }
  return (
    <div>
      <label>
        userName : <input type = "text" onChange={(e) => setUser(e.target.value)}/>
      </label>
      <button onClick={handleLogin}></button>
    </div>
  )
}

export default Login
