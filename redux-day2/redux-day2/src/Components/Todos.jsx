import React, { useEffect } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  todoErrorAction,
  todoRequestAction,
  todoSuccessAction,
  postErrorAction,
  postRequestAction,
  postSuccessAction,
} from "../redux/action";
const url = "http://localhost:8080/todos";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos, shallowEqual);
  const isLoading = useSelector((state) => state.loading);
  console.log("todos re render");
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

  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      status: false,
    };

    //post request
    dispatch(postRequestAction());
    axios
      .post(url, newTodo)
      .then((response) => {
        console.log(response);
        dispatch(postSuccessAction(response.data));
        //getDatat call to update
        getData();
      })
      .catch((error) => {
        console.log(error);
        dispatch(postErrorAction());
      });
  };

  return (
    <div>
      <TodoInput AddTodo={handleAddTodo} />
      {isLoading && <h1>Loading..</h1>}
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
