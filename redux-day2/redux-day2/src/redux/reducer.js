export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      return { ...state, counter: state.counter + payload };
    }
    case "REDUCE": {
      return { ...state, counter: state.counter - payload };
    }
    default: {
      return state;
    }
  }
};
