//{type,payload}
import { ADD } from "./actionType";
import { REDUCE } from "./actionType";
export const Add = (payload = 1) => {
  return { type: ADD, payload: payload };
};
export const Reduce = (payload = 1) => {
  return { type: REDUCE, payload: payload };
};
