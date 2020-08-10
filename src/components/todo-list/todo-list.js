import React from "react";
import TodoItem from "../todo-item/todo-item";
import "./todo-list.css";

const TodoList = ({ todosArray, selectTodo, deleteTodo }) => {
  const todos = todosArray.map((it) => {
    return (
      <li key={it.id}>
        <TodoItem
          title={it.title}
          completed={it.completed}
          selectTodo={() => selectTodo(it.id)}
          deleteTodo={() => deleteTodo(it.id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{todos}</ul>;
};

export default TodoList;
