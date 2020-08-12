import React, { PureComponent } from "react";
import "./header.scss";

export default class Header extends PureComponent {
  keyEnter = 13;

  todoInputHandler = (evt) => {
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
    const { todosArray, selectAll } = this.props;
    const visibility = todosArray.length > 0 ? "visible" : "hidden";
    const opacity = todosArray.every((it) => it.completed === true) ? 1 : 0.2;
    const checked = todosArray.every((it) => it.completed === true)
      ? "ckecked"
      : "";
    return (
      <header className="todo-header">
        <h1 className="todo-header__title">Todo</h1>
        <input
          className="todo-header__choice-all"
          id="choice-all"
          type="checkbox"
          onClick={selectAll}
          checked={checked}
          readOnly
        />
        <label
          style={{ opacity: opacity, visibility: visibility }}
          htmlFor="choice-all"
        >
          &#8249;
        </label>
        <input
          className="todo-header__input"
          type="text"
          placeholder="Что вы хотите сделать?"
          onBlur={this.todoInputHandler}
          onKeyDown={this.todoInputHandler}
        />
      </header>
    );
  }
}
