import React, { PureComponent } from "react";
import "./header.scss";

export default class Header extends PureComponent {
  state = {
    value: "",
  };

  keyEnter = 13;

  onInputChange = (evt) => {
    const newValue = evt.target.value;
    this.setState({
      value: newValue,
    });
  };

  onInputEnter = (evt) => {
    if (
      (evt.keyCode === this.keyEnter || evt.type === "blur") &&
      evt.target.value
    ) {
      this.props.addTodo(this.state.value);
      this.setState({
        value: "",
      });
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
          value={this.state.value}
          onChange={this.onInputChange}
          onBlur={this.onInputEnter}
          onKeyDown={this.onInputEnter}
        />
      </header>
    );
  }
}
