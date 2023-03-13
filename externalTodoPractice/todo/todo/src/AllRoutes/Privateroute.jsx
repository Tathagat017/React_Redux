import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Privateroute = ({children}) => {


    const auth=useSelector((state)=>state.login.Auth)
   if(!auth){
    return <Navigate to="/login"/>
   }
  return children
}

export default Privateroute
