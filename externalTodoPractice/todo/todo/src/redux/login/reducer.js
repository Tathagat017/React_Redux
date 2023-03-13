import { LOGIN_TODO_FAILURE, LOGIN_TODO_REQUEST, LOGIN_TODO_SUCCESS } from "./actiontypes";

const initstate={
    isLoading:false,
    isError:false,
    token:"",
    Auth:false
}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case LOGIN_TODO_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case LOGIN_TODO_SUCCESS:{
            return {
                ...state,isLoading:false,token:payload,Auth:true
            }
        }
        case LOGIN_TODO_FAILURE:{
            return {
                ...state,isLoading:false,Auth:false,isError:false
            }
        }
        default:{
            return state
        }
    }
}