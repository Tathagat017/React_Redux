import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionType";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      return { ...state, counter: state.counter + payload };
    }
    case "REDUCE": {
      return { ...state, counter: state.counter - payload };
    }
    case GET_TODO_REQUEST: {
      return { ...state, isLoading: true, isLoading: false };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoading: false,
        todos: [...payload],
      };
    }
    case GET_TODO_FAILURE: {
      return { ...state, isLoading: false, isLoading: true };
    }
    default: {
      return state;
    }
  }
};
