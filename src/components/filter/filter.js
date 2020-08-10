import React, { Component } from "react";
import "./filter.scss";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <button type="button" className="filter__btn filter__btn--active">
          Все
        </button>
        <button type="button" className="filter__btn">
          Активные
        </button>
        <button type="button" className="filter__btn">
          Завершенные
        </button>
      </div>
    );
  }
}
