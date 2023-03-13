import React, { useEffect } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import {
  todoErrorAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/action";
const url = "http://localhost:8080/todos";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(todoSuccessAction(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(todoErrorAction());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TodoInput />
      {todos?.map((el, i) => {
        return (
          <div key={i}>
            <h3>
              {el.title}-{el.status ? "completed" : "pending"}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
//http://localhost:8080/todos
