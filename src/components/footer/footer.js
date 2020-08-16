import React, { PureComponent } from "react";
import "./footer.scss";
import Counter from "../counter/counter";
import Filter from "../filter/filter";
import BtnClearCompleted from "../btn-clear-completed/btn-clear-completed";

export default class Footer extends PureComponent {
  render() {
    const {
      activeTodosAmount,
      completedTodosAmount,
      allTodosAmount,
      changeFilter,
      filter,
      deleteCompleted,
    } = this.props;
    const klass = allTodosAmount > 0 ? "" : "hidden";
    return (
      <footer className={`todo-footer ${klass}`}>
        <Counter activeTodosAmount={activeTodosAmount} />
        <Filter changeFilter={changeFilter} filter={filter} />
        <BtnClearCompleted
          completedTodosAmount={completedTodosAmount}
          deleteCompleted={deleteCompleted}
        />
      </footer>
    );
  }
}
