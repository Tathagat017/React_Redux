import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
const naviagte=useNavigate()

  return (
    <div>

    <h1>Welcome To The Homepage</h1>
      <button onClick={()=>naviagte("/login")}>Loginpage</button>
      <button onClick={()=>naviagte("/todo")}>TodoPage</button>
    </div>
  )
}

export default Homepage
