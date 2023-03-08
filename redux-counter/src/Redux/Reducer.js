import { AddAction, SubAction } from "./action";

export const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case AddAction: {
      return { ...state, counter: state.counter + payload };
    }
    case SubAction: {
      return { ...state, counter: state.counter - payload };
    }
    default: {
      return state;
    }
  }
};
