import { ADD, REDUCE } from "./actiontypes"


export const addAction =(payload)=>{
    return {type:ADD,payload}
}
export const Reduceaction =(payload)=>{
    return {type:REDUCE,payload}
}
