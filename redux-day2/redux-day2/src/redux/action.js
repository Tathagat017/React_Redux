import {
  ADD,
  REDUCE,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionType";

export const addAction = (payload) => {
  return { type: ADD, payload };
};
export const reduceAction = (payload) => {
  return { type: REDUCE, payload };
};

export const todoRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};

export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const todoErrorAction = () => {
  return { type: GET_TODO_FAILURE };
};
