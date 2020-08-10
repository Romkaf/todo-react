import React, { PureComponent } from "react";
import Header from "../header/header";
import TodoList from "../todo-list/todo-list";
import Footer from "../footer/footer";
import "./app.scss";

export default class App extends PureComponent {
  id = 1;

  state = {
    todosArray: [
      this.createTodo("Play in footbal"),
      this.createTodo("Lay"),
      this.createTodo("Stay at home"),
    ],
  };

  createTodo(title) {
    return {
      title,
      id: this.id++,
      completed: false,
    };
  }

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

  addTodo = (text) => {
    const newTodo = this.createTodo(text);
    this.setState(({ todosArray }) => {
      const newArray = [...todosArray, newTodo];
      return {
        todosArray: newArray,
      };
    });
  };

  render() {
    const { todosArray } = this.state;
    const activeTodoCount = todosArray.filter((it) => it.completed === false)
      .length;
    return (
      <div className="todo-app">
        <Header addTodo={this.addTodo} />
        <main>
          <TodoList
            todosArray={todosArray}
            selectTodo={this.selectTodo}
            deleteTodo={this.deleteTodo}
          />
        </main>
        <Footer active={activeTodoCount} allTodos={todosArray.length} />
      </div>
    );
  }
}
