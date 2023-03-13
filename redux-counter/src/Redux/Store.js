import { legacy_createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  counter: 1,
};

export const store = legacy_createStore(reducer, initialState);
