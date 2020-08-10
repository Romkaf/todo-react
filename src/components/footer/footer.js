import React, { Component } from "react";
import "./footer.scss";
import Counter from "../counter/counter";
import Filter from "../filter/filter";
import BtnClearCompleted from "../btn-clear-completed/btn-clear-completed";

export default class Footer extends Component {
  state = {
    visibility: false,
  };

  setFooterVisibility = (todos) => {
    if (todos > 0) {
      this.setState(({ visibility }) => {
        const newState = this.state.visibility;
        return {
          visibility: !newState,
        };
      });
    }
  };

  render() {
    const { active, allTodos } = this.props;
    const klass = allTodos > 0 ? "" : "hidden";
    return (
      <footer className={`todo-footer ${klass}`}>
        <Counter active={active} />
        <Filter />
        <BtnClearCompleted />
      </footer>
    );
  }
}
