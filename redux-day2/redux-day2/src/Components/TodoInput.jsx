import { useState } from "react";

const TodoInput = ({ AddTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    AddTodo(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAddTodo()}>Add</button>
    </div>
  );
};

export default TodoInput;
