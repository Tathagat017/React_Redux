import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginsuccesaction } from '../../redux/login/action'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
const Loginpage = () => {
const dispatch=useDispatch()
const [email,setemail]=useState("eve.holt@reqres.in")
const [password,setpassword]=useState("")

const navigate=useNavigate()
const token=useSelector((state)=>state.login.token)
console.log(token)
const handleclick=()=>{
let ob={
    email,password
}
    axios.post(`https://reqres.in/api/login`,ob)
    .then((res)=>{
        console.log(res.data.token)
        dispatch(loginsuccesaction(res.data.token))
    })
}

  return (
    <div>
    <div>
      <input type="text" value={email} placeholder='enter email' onChange={(e)=>setemail(e.target.value)} />
      <input type="text" value={password} placeholder='enter password' onChange={(e)=>setpassword(e.target.value)} />
      <button onClick={handleclick}>LOGIN</button>
</div>
<br/>
<br/>
      <h1>Token:{token}</h1>
      <button onClick={()=>navigate("/todo")} >TOdo page</button>
    </div>
  )
}

export default Loginpage
