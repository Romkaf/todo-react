import React from "react";
import "./counter.scss";

const Counter = ({ active }) => {
  return (
    <span className="counter">
      Осталось заданий:<b>{active}</b>
    </span>
  );
};

export default Counter;
