import React, { PureComponent } from "react";
import "./header.scss";

export default class Header extends PureComponent {
  keyEnter = 13;

  onInputEnter = (evt) => {
    const validateValue = evt.target.value.trim().replace(/\s+/g, " ");
    if (
      (evt.keyCode === this.keyEnter || evt.type === "blur") &&
      validateValue
    ) {
      this.props.addTodo(validateValue);
      evt.target.value = "";
    }
  };

  render() {
    return (
      <header className="todo-header">
        <h1 className="todo-header__title">Todo</h1>
        <input
          className="todo-header__choice-all"
          id="choice-all"
          type="checkbox"
        />
        <label htmlFor="choice-all">&#8249;</label>
        <input
          className="todo-header__input"
          type="text"
          placeholder="Что вы хотите сделать?"
          onBlur={this.onInputEnter}
          onKeyDown={this.onInputEnter}
        />
      </header>
    );
  }
}
