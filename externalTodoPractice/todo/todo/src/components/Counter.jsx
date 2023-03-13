import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addAction, Reduceaction } from '../redux/counter/action'
const Counter = () => { 

    const {counter}=useSelector((state)=>(state.counter))
  

const dispatch=useDispatch()

    const handleadd=()=>{
dispatch(addAction(1))
    }
    const handlereduce=()=>{
        dispatch(Reduceaction(1))
    }

  return (
    <div>
    <h1>Counter:{counter}</h1>
      <button onClick={handleadd}>ADD</button>
      <button onClick={handlereduce}>Reduce</button>
    </div>
  )
}

export default Counter
