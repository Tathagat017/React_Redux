import { ADD, REDUCE } from "./actiontypes"


const initstate={
    counter:0,
   

}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case ADD:{
            return {counter:state.counter+payload}
        }
        case REDUCE:{
            return {counter:state.counter-payload}
        }
       
        default:{
            return state
        }
    }
}