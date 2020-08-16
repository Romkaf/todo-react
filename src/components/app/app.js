import React, { PureComponent } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import Footer from "../footer/footer";
import "./app.scss";

export default class App extends PureComponent {
  state = {
    todosArray: [],
    filter: "all",
  };

  id = 1;

  createTodo(title) {
    return {
      title,
      id: this.id++,
      completed: false,
    };
  }

  changeFilter = (filter) => {
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

  changePropertyTodo = (array, id, property, text) => {
    const index = array.findIndex((it) => it.id === id);
    const oldItem = array[index];
    const propertyValue = property === "completed" ? !oldItem[property] : text;
    const newItem = { ...oldItem, [property]: propertyValue };
    return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
  };

  selectTodo = (id) => {
    this.setState(({ todosArray }) => {
      return {
        todosArray: this.changePropertyTodo(todosArray, id, "completed"),
      };
    });
  };

  editTodo = (id, text) => {
    this.setState(({ todosArray }) => {
      return {
        todosArray: this.changePropertyTodo(todosArray, id, "title", text),
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

  setLocalStorage = (stateName) => {
    const todos = JSON.stringify(stateName);
    localStorage.setItem("todos", todos);
  };

  loadLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    this.setState({
      todosArray: todos,
    });
  };

  componentDidMount() {
    this.loadLocalStorage();
  }

  componentDidUpdate() {
    const todos = this.state.todosArray;
    this.setLocalStorage(todos);
    this.id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  }

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
          activeTodosAmount={activeTodoCount}
          completedTodosAmount={completedTodoCount}
          allTodosAmount={todosArray.length}
          changeFilter={this.changeFilter}
          filter={filter}
          deleteCompleted={this.deleteCompletedTodo}
        />
      </div>
    );
  }
}
