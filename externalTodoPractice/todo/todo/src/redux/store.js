import { legacy_createStore } from "redux";
import { reducer as counter} from "../redux/counter/reducer";
import {reducer as todo} from "../redux/Todoredux/reducer"
import {reducer as login} from "../redux/login/reducer"
import {combineReducers} from "redux"
    const rootReducer = combineReducers({
        todos: todo,
        counter: counter,
        login:login
      })


export const store =legacy_createStore(rootReducer)