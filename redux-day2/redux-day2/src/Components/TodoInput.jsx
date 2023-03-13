import { useState } from "react";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    console.log(input);
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
