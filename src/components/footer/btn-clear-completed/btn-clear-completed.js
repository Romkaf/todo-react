import React from "react";
import PropTypes from "prop-types";
import "./btn-clear-completed.scss";
import classNames from "classnames";

const BtnClearCompleted = ({ completedTodosAmount, deleteCompleted }) => {
  // const classNames = require("classnames");

  const btnClass = classNames({
    "btn-clear-completed": true,
    hidden: completedTodosAmount === 0,
  });

  return (
    <button className={btnClass} onClick={deleteCompleted}>
      Удалить завершенные
    </button>
  );
};

export default BtnClearCompleted;

BtnClearCompleted.propTypes = {
  completedTodosAmount: PropTypes.number,
  deleteCompleted: PropTypes.func,
};
