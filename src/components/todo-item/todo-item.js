import React from "react";
import "./todo-item.scss";

const TodoItem = ({ title, completed, selectTodo, deleteTodo }) => {
  const klass = completed === true ? "todo-item--completed" : "";
  const checked = completed === true ? true : false;
  return (
    <div className={`todo-item ${klass}`}>
      <input
        className="todo-item__choice"
        type="checkbox"
        onClick={selectTodo}
        defaultChecked={checked}
      />
      <label>&#10003;</label>
      <span className="todo-item__task"> {title}</span>
      {/* eslint-disable-next-line */}
      <button className="todo-item__delete" onClick={deleteTodo}>
        &#10060;
      </button>
    </div>
  );
};

export default TodoItem;
