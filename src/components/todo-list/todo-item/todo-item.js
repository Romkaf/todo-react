import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./todo-item.scss";
import { keyCode } from "../../../constatnts";
import classNames from "classnames";

export default class TodoItem extends PureComponent {
  state = {
    visibilityElement: "visible",
    isEditing: false,
    value: "",
  };

  onTaskDblClick = (evt) => {
    this.setState({
      visibilityElement: "hidden",
      isEditing: true,
      value: evt.target.textContent,
    });

    evt.target.parentNode.classList.add("todo-item--editing");
  };

  finishTodoEditing = (evt) => {
    if (
      evt.keyCode === keyCode.ENTER ||
      evt.type === "blur" ||
      evt.keyCode === keyCode.ESC
    ) {
      const input = evt.target;
      if (!this.state.isEditing) return;
      const insertText =
        evt.keyCode === keyCode.ESC
          ? this.props.title
          : input.value.trim().replace(/\s+/g, " ");

      if (this.deleteEmptyTask(evt, insertText)) return;
      this.props.editTodo(insertText);
      input.parentNode.classList.remove("todo-item--editing");
      this.setState({ visibilityElement: "visible", isEditing: false });
    }
  };

  deleteEmptyTask = (evt, insertText) => {
    if (!insertText) {
      try {
        evt.target.parentNode.remove();
        this.props.deleteTodo();
        return "return";
      } catch (error) {
        return;
      }
    }
  };

  onChangeHandler = (evt) => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { title, completed, selectTodo, deleteTodo } = this.props;
    const itemClass = classNames({
      "todo-item": true,
      "todo-item--completed": completed === true,
    });

    const hiddenClass =
      this.state.visibilityElement === "hidden" ? "hidden" : "";
    const checked = completed === true ? true : false;

    return (
      <div className={itemClass}>
        <input
          className={`todo-item__choice ${hiddenClass}`}
          type="checkbox"
          onClick={selectTodo}
          checked={checked}
          readOnly
        />
        <label className={hiddenClass}>&#10003;</label>
        {this.state.isEditing ? (
          <input
            className="todo-item__task"
            onKeyDown={this.finishTodoEditing}
            onBlur={this.finishTodoEditing}
            value={this.state.value}
            onChange={this.onChangeHandler}
            autoFocus
          />
        ) : (
          <span className="todo-item__task" onDoubleClick={this.onTaskDblClick}>
            {title}
          </span>
        )}
        {/* eslint-disable-next-line */}
        <button
          className={`todo-item__delete ${hiddenClass}`}
          onClick={deleteTodo}
        >
          &#10060;
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  selectAll: PropTypes.func,
};