import React from "react";
import PropTypes from "prop-types";
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

BtnClearCompleted.propTypes = {
  completedTodosAmount: PropTypes.number,
  deleteCompleted: PropTypes.func,
};
