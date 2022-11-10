import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  const [err,setError] = useState(null)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext);

const handelChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

const handelSubmit = async e =>{
  e.preventDefault()

  try{
    await login(inputs);
    await axios.post("/auth/login", inputs)
    navigate("/")
  }catch(err){
    setError(err.response.data)
  }
}
  return (
    <div className='auth'>
      <form>
        <h2>Login</h2>
        <input required type="text"  placeholder='Username' name='username' onChange={handelChange}/>
        <input required type="password" placeholder='Password' name='password' onChange={handelChange}/>
        <button onClick={handelSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't Have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
