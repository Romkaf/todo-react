import React from "react";
import "./btn-clear-completed.scss";

const BtnClearCompleted = ({ completedTodosAmount, deleteCompleted }) => {
  const visibility = completedTodosAmount > 0 ? "visible" : "hidden";
  return (
    <button
      className="btn-clear-completed"
      style={{ visibility: visibility }}
      onClick={deleteCompleted}
    >
      Удалить завершенные
    </button>
  );
};

export default BtnClearCompleted;
