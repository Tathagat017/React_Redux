import {Routes,Route} from "react-router-dom"

import React from 'react'
import Todo from "../components/Todo"
import TodoItem from "../components/Pages/TodoItem"
import TODOEDIT from "../components/Pages/TODOEDIT"
import Loginpage from "../components/Pages/Loginpage"
import Homepage from "../components/Pages/Homepage"
import Privateroute from "./Privateroute"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
        <Route path="/todo"  element={<Privateroute><Todo/></Privateroute>}></Route>
        <Route path="/todo/:id"  element={<TodoItem/>}></Route>
        <Route path="/todo/:id/edit" element={<TODOEDIT/>}></Route>
        <Route path="/login" element={<Loginpage/>} ></Route>
    </Routes>
  )
}

export default AllRoutes
