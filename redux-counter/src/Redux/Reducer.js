import { ADD, SUB } from "./action";

export const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ADD: {
      return { ...state, counter: state.counter + payload };
    }
    case SUB: {
      return { ...state, counter: state.counter - payload };
    }
    default: {
      return state;
    }
  }
};
