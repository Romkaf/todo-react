import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./footer.module.scss";
import Counter from "./counter/counter.jsx";
import Filter from "./filter/filter.jsx";
import BtnClearCompleted from "./btn-clear-completed/btn-clear-completed.jsx";

export default class Footer extends PureComponent {
  render() {
    const {
      activeTodosAmount,
      completedTodosAmount,
      changeFilter,
      filter,
      deleteCompleted,
    } = this.props;

    return (
      <footer className={styles.footer}>
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

Footer.propTypes = {
  completedTodosAmount: PropTypes.number,
  activeTodosAmount: PropTypes.number,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
  deleteCompleted: PropTypes.func,
};
