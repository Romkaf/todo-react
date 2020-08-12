import React from "react";
import TodoItem from "../todo-item/todo-item";
import "./todo-list.scss";

const TodoList = ({ todosArray, selectTodo, deleteTodo, editTodo }) => {
  const todos = todosArray.map((it) => {
    return (
      <li key={it.id}>
        <TodoItem
          title={it.title}
          completed={it.completed}
          selectTodo={() => selectTodo(it.id)}
          deleteTodo={() => deleteTodo(it.id)}
          editTodo={(text) => editTodo(it.id, text)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{todos}</ul>;
};

export default TodoList;
