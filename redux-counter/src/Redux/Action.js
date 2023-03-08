import { ADD, SUB } from "./actionType";

export const AddAction = () => {
  return { type: ADD, payload: 1 };
};

export const SubAction = () => {
  return { type: SUB, payload: 1 };
};
