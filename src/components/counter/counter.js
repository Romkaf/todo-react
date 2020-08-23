import React from "react";
import PropTypes from "prop-types";
import "./counter.scss";

const Counter = ({ activeTodosAmount }) => {
  return (
    <span className="counter">
      Осталось заданий:<b>{activeTodosAmount}</b>
    </span>
  );
};

export default Counter;

Counter.propTypes = {
  activeTodosAmount: PropTypes.number,
};
