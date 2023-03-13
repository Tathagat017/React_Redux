import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
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
        isError: false,
        todos: [...payload],
      };
    }
    case GET_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case POST_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case POST_TODO_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case POST_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: [...state.todos, payload],
      };
    }
    default: {
      return state;
    }
  }
};
