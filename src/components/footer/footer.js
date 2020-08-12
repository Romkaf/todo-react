import React, { PureComponent } from "react";
import "./footer.scss";
import Counter from "../counter/counter";
import Filter from "../filter/filter";
import BtnClearCompleted from "../btn-clear-completed/btn-clear-completed";

export default class Footer extends PureComponent {
  render() {
    const {
      active,
      completed,
      allTodos,
      changeFilter,
      filter,
      deleteCompleted,
    } = this.props;
    const klass = allTodos > 0 ? "" : "hidden";
    return (
      <footer className={`todo-footer ${klass}`}>
        <Counter active={active} />
        <Filter changeFilter={changeFilter} filter={filter} />
        <BtnClearCompleted
          completed={completed}
          deleteCompleted={deleteCompleted}
        />
      </footer>
    );
  }
}
