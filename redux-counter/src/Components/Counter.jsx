import { useState } from "react";
import { store } from "../Redux/store";
import { Add, Reduce } from "./../Redux/action";

const Counter = () => {
  const { getState, dispatch, subscribe } = store;
  const [update, setUpdate] = useState(getState().counter);
  subscribe(() => {
    console.log("state here", getState());
    setUpdate(getState().counter);
  });
  console.log(getState().counter);
  const handleAdd = () => {
    dispatch(Add());
  };
  const handleReduce = () => {
    dispatch(Reduce());
  };
  return (
    <div>
      <div>counter</div>
      <h1>{getState().counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReduce}>-</button>
    </div>
  );
};

export default Counter;
