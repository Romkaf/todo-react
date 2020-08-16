import React, { PureComponent } from "react";
import "./filter.scss";

export default class Filter extends PureComponent {
  buttons = [
    { title: "Все", filter: "all" },
    { title: "Активные", filter: "active" },
    { title: "Завершенные", filter: "completed" },
  ];

  render() {
    const { changeFilter, filter } = this.props;
    const buttons = this.buttons.map((it) => {
      const klass = it.filter === filter ? "filter__btn--active" : "";
      return (
        <button
          className={`filter__btn ${klass}`}
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
