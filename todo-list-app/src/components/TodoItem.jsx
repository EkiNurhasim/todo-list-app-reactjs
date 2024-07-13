import React from "react";
import { GrClose } from "react-icons/gr";

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const handleEdit = () => {
    editTodo(todo);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? "checked" : ""}`}>
      <div className="todo-text" onClick={handleEdit}>
        {todo.text}
      </div>
      <div className="todo-delete">
        <GrClose onClick={handleDelete} />
      </div>
    </li>
  );
};

export default TodoItem;
