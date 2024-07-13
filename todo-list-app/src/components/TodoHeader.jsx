import React, { useState } from "react";

const TodoHeader = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <>
      <header>
        <h1>TODO-LIST</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add todo..." value={todoInput} onChange={handleChange} />
          <input type="submit" value="Submit" className="addBtn" />
        </form>
      </header>
    </>
  );
};

export default TodoHeader;
