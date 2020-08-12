import React, { PureComponent } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import Footer from "../footer/footer";
import "./app.scss";

export default class App extends PureComponent {
  id = 1;

  state = {
    todosArray: [],
    filter: "all",
  };

  createTodo(title) {
    return {
      title,
      id: this.id++,
      completed: false,
    };
  }

  chengeFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  filterTodos = (todos, filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((it) => !it.completed);
      case "completed":
        return todos.filter((it) => it.completed);
      default:
        return todos;
    }
  };

  addTodo = (text) => {
    const newTodo = this.createTodo(text);
    this.setState(({ todosArray }) => {
      const newArray = [...todosArray, newTodo];
      return {
        todosArray: newArray,
      };
    });
  };

  deleteTodo = (id) => {
    this.setState(({ todosArray }) => {
      const index = todosArray.findIndex((it) => it.id === id);
      const newArray = [
        ...todosArray.slice(0, index),
        ...todosArray.slice(index + 1),
      ];
      return {
        todosArray: newArray,
      };
    });
  };

  deleteCompletedTodo = () => {
    this.setState(({ todosArray }) => {
      const newArray = todosArray.filter((it) => it.completed === false);
      return {
        todosArray: newArray,
      };
    });
  };

  selectTodo = (id) => {
    this.setState(({ todosArray }) => {
      const index = todosArray.findIndex((it) => it.id === id);
      const oldItem = todosArray[index];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      const newArray = [
        ...todosArray.slice(0, index),
        newItem,
        ...todosArray.slice(index + 1),
      ];
      return {
        todosArray: newArray,
      };
    });
  };

  editTodo = (id, text) => {
    this.setState(({ todosArray }) => {
      const index = todosArray.findIndex((it) => it.id === id);
      const oldItem = todosArray[index];
      const newItem = { ...oldItem, title: text };
      const newArray = [
        ...todosArray.slice(0, index),
        newItem,
        ...todosArray.slice(index + 1),
      ];
      return {
        todosArray: newArray,
      };
    });
  };

  selectAllTodo = () => {
    this.setState(({ todosArray }) => {
      let newArray;
      if (todosArray.every((it) => it.completed === true)) {
        newArray = todosArray.map((it) =>
          Object.assign(it, { completed: false })
        );
      } else {
        newArray = todosArray.map((it) =>
          Object.assign(it, { completed: true })
        );
      }
      return {
        todosArray: newArray,
      };
    });
  };

  render() {
    const { todosArray, filter } = this.state;
    const activeTodoCount = todosArray.filter((it) => it.completed === false)
      .length;
    const completedTodoCount = todosArray.length - activeTodoCount;
    const visibleTodos = this.filterTodos(todosArray, filter);
    return (
      <div className="todo-app">
        <Header
          addTodo={this.addTodo}
          todosArray={todosArray}
          selectAll={this.selectAllTodo}
        />
        <main>
          <TodoList
            todosArray={visibleTodos}
            selectTodo={this.selectTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
          />
        </main>
        <Footer
          active={activeTodoCount}
          completed={completedTodoCount}
          allTodos={todosArray.length}
          changeFilter={this.chengeFilter}
          filter={filter}
          deleteCompleted={this.deleteCompletedTodo}
        />
      </div>
    );
  }
}
