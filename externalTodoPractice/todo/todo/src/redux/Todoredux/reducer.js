import {  GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCSESS } from "./actiontypes"

const initstate={
  
    Todos:[],
    isLoading:false,
    isError:false,

}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
      
        case GET_TODO_REQUEST:{
            console.log("i am invoked request")
            return {...state,isLoading:true}
        }
        case GET_TODO_SUCCESS:{
            console.log("i am invoked success")
            return {...state,isLoading:false,Todos:[...payload]}
        }
        case GET_TODO_FAILURE:{
            return {...state,isLoading:false,isError:true}
        }
     case POST_TODO_REQUEST:{
        return {...state,isLoading:true}
     }
     case POST_TODO_SUCSESS:{
        return {...state,isLoading:false,Todos:[...state.Todos,payload]}
     }
     case POST_TODO_FAILURE:{
        return {...state,isLoading:false,isError:true}
     }
        default:{
            return state
        }
    }
}