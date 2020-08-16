import React, { PureComponent } from "react";
import "./todo-item.scss";

export default class TodoItem extends PureComponent {
  state = {
    visibilityElement: "visible",
  };

  onTaskDblClick = (evt) => {
    evt.target.classList.add("hidden");
    this.setState({ visibilityElement: "hidden" });
    evt.target.insertAdjacentHTML(
      "beforebegin",
      '<input class="todo-item__task" type="text">'
    );
    const input = evt.target.previousElementSibling;
    input.value = evt.target.textContent;
    input.focus();
    input.parentNode.classList.add("todo-item--editing");
    input.addEventListener("blur", this.finishTodoEditing);
    input.addEventListener("keydown", this.finishTodoEditing);
  };

  finishTodoEditing = (evt) => {
    if (evt.keyCode === 13 || evt.type === "blur" || evt.keyCode === 27) {
      const input = evt.target;
      if (this.state.visibilityElement === "visible") return;
      const insertText =
        evt.keyCode === 27
          ? this.props.title
          : input.value.trim().replace(/\s+/g, " ");
      this.setState({ visibilityElement: "visible" });
      if (this.deleteEmptyTask(evt, insertText)) return;
      this.props.editTodo(insertText);
      input.parentNode.classList.remove("todo-item--editing");
      input.nextElementSibling.classList.remove("hidden");
      input.remove();
    }
  };

  deleteEmptyTask = (evt, insertText) => {
    if (!insertText) {
      evt.target.parentNode.remove();
      this.props.deleteTodo();
      return "return";
    }
  };

  render() {
    const { title, completed, selectTodo, deleteTodo } = this.props;
    const klass = completed === true ? "todo-item--completed" : "";
    const checked = completed === true ? true : false;
    const visibility = { visibility: this.state.visibilityElement };

    return (
      <div className={`todo-item ${klass}`}>
        <input
          className="todo-item__choice"
          type="checkbox"
          style={visibility}
          onClick={selectTodo}
          checked={checked}
          readOnly
        />
        <label style={visibility}>&#10003;</label>
        <span className="todo-item__task" onDoubleClick={this.onTaskDblClick}>
          {title}
        </span>
        {/* eslint-disable-next-line */}
        <button
          className="todo-item__delete"
          style={visibility}
          onClick={deleteTodo}
        >
          &#10060;
        </button>
      </div>
    );
  }
}
