import React, { useEffect, useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import { fetchTodosApi, createTodosApi, deleteTodosApi, updateTodosApi } from "../api/toodosAPI";
const TodoPages = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetchTodosApi();
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodos = async (text) => {
    const result = { text: text, completed: false };
    const response = await createTodosApi(result);
    setTodos((current) => [...current, response.data]);
  };

  const updateTodo = async (data) => {
    const updatedTodo = { ...data, completed: !data.completed };
    const response = await updateTodosApi(updatedTodo.id, updatedTodo);
    const fixUpdate = todos.map((todo) => {
      if (todo.id == data.id) {
        return { ...todo, ...response.data };
      }
      return todo;
    });
    setTodos(fixUpdate);
  };

  const deleteTodo = async (id) => {
    await deleteTodosApi(id);
    const updatedTodos = todos.filter((data) => data.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoHeader addTodo={createTodos} />
      <TodoList todos={todos} editTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPages;
