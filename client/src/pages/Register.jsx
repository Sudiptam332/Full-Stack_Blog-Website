import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
  const [err,setError] = useState(null)
  const navigate = useNavigate()

const handelChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

const handelSubmit = async e =>{
  e.preventDefault()

  try{
    await axios.post("/auth/register", inputs)
    navigate("/login")
  }catch(err){
    setError(err.response.data)
  }
}

  return (
    <div className='auth'>
      <form>
        <h2>Register</h2>
        <input required type="text"  placeholder='Username' name='username' onChange={handelChange}/>
        <input required type="email"  placeholder='Email-ID' name='email' onChange={handelChange}/>
        <input required type="password" placeholder='Password' name='password' onChange={handelChange}/>
        <button onClick={handelSubmit}>Register</button>
        {err && <p>{err}</p> }
        <span>Do You Have an Account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register