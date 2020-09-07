import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./filter.scss";
import classNames from "classnames";

export default class Filter extends PureComponent {
  // classNames = require("classnames");

  buttons = [
    { title: "Все", filter: "all" },
    { title: "Активные", filter: "active" },
    { title: "Завершенные", filter: "completed" },
  ];

  render() {
    const { changeFilter, filter } = this.props;
    const buttons = this.buttons.map((it) => {
      const filterBtnClass = classNames({
        filter__btn: true,
        "filter__btn--active": it.filter === filter,
      });

      return (
        <button
          className={filterBtnClass}
          type="button"
          key={it.filter}
          onClick={() => changeFilter(it.filter)}
        >
          {it.title}
        </button>
      );
    });

    return <div className="filter">{buttons}</div>;
  }
}

Filter.propTypes = {
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};
