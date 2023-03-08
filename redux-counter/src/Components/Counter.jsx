import React, { useState } from "react";
import { AddAction, SubAction } from "../Redux/action";
import { store } from "../Redux/store";

export const Counter = () => {
  const { getState, dispatch, subscribe } = store;

  console.log(store);

  subscribe(() => {
    console.log("state Changed: ", getState());
  });

  console.log(getState);
  const addHandler = () => {
    dispatch(AddAction());
  };

  const subHandler = () => {
    dispatch(SubAction());
  };

  return (
    <>
      <h1>Counter</h1>
      <h1>{getState().counter}</h1>
      <button onClick={addHandler}>+</button>
      <button onClick={subHandler}>-</button>
    </>
  );
};
