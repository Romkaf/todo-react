import React from "react";
import "./todo-item.scss";

const TodoItem = ({ title, completed, selectTodo, deleteTodo }) => {
  const klass = completed === true ? "todo-item--completed" : "";
  return (
    <div className={`todo-item ${klass}`}>
      <input
        className="todo-item__choice"
        type="checkbox"
        onClick={selectTodo}
      />
      <label>&#10003;</label>
      <span className="todo-item__task"> {title}</span>
      <button className="todo-item__delete" onClick={deleteTodo}>
        &#10060;
      </button>
    </div>
  );
};

export default TodoItem;
