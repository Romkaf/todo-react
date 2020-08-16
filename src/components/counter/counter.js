import React from "react";
import "./counter.scss";

const Counter = ({ activeTodosAmount }) => {
  return (
    <span className="counter">
      Осталось заданий:<b>{activeTodosAmount}</b>
    </span>
  );
};

export default Counter;
