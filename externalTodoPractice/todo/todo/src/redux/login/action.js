import { LOGIN_TODO_FAILURE, LOGIN_TODO_REQUEST, LOGIN_TODO_SUCCESS } from "./actiontypes"

export const loginrequestaction=()=>{
    return {type:LOGIN_TODO_REQUEST}
}

export const loginsuccesaction=(payload)=>{
    return {type:LOGIN_TODO_SUCCESS,payload}
}

export const loginfailaction=()=>{
    return {type:LOGIN_TODO_FAILURE}
}