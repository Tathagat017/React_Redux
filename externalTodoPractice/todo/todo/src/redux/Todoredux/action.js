import {  GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCSESS } from "./actiontypes"




export const todoactionRequest=()=>{
    return {type:GET_TODO_REQUEST}
}

export const todoactionSuccess=(payload)=>{
    return {type:GET_TODO_SUCCESS,payload:payload}
}
export const todoactionFailure=()=>{
    return {type:GET_TODO_FAILURE}
}

export const posttodorequest=()=>{
    return {type:POST_TODO_REQUEST}
}

export const posttodosuccess=(payload)=>{
    return {type:POST_TODO_SUCSESS,payload:payload}
}
export const posttodoerror=()=>{
    return {type:POST_TODO_FAILURE}}