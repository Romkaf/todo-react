import React, { PureComponent } from 'react';
import Header from '../header/header.jsx';
import TodoList from '../todo-list/todo-list.jsx';
import Footer from '../footer/footer.jsx';
import styles from './app.module.scss';

export default class App extends PureComponent {
	state = {
		todosArray: [],
		filter: 'all',
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
			case 'all':
				return todos;
			case 'active':
				return todos.filter((it) => !it.completed);
			case 'completed':
				return todos.filter((it) => it.completed);
			default:
				return todos;
		}
	};

	addTodo = (text) => {
		const newTodo = this.createTodo(text);
		this.setState(({ todosArray }) => {
			return {
				todosArray: [...todosArray, newTodo],
			};
		});
	};

	deleteTodo = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !(it.id === id)),
			};
		});
	};

	deleteCompletedTodo = () => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !it.completed),
			};
		});
	};

	selectTodo = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.map((it) => {
					if (it.id === id) {
						it.completed = !it.completed;
					}
					return it;
				}),
			};
		});
	};

	editTodo = (id, text) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.map((it) => {
					if (it.id === id) {
						it.title = text;
					}
					return it;
				}),
			};
		});
	};

	selectAllTodo = () => {
		this.setState(({ todosArray }) => {
			let newArray;
			if (todosArray.every((it) => it.completed === true)) {
				newArray = todosArray.map((it) =>
					Object.assign(it, { completed: false }),
				);
			} else {
				newArray = todosArray.map((it) =>
					Object.assign(it, { completed: true }),
				);
			}
			return {
				todosArray: newArray,
			};
		});
	};

	setLocalStorage = (stateName) => {
		localStorage.setItem('todos', JSON.stringify(stateName));
	};

	loadLocalStorage = () => {
		this.setState({
			todosArray: JSON.parse(localStorage.getItem('todos')) || [],
		});
	};

	componentDidMount() {
		this.loadLocalStorage();
	}

	componentDidUpdate() {
		const { todosArray } = this.state;
		this.setLocalStorage(todosArray);
		this.id =
			todosArray.length === 0 ? 1 : todosArray[todosArray.length - 1].id + 1;
	}

	render() {
		const { todosArray, filter } = this.state;
		const activeTodoCount = todosArray.filter((it) => it.completed === false)
			.length;
		const completedTodoCount = todosArray.length - activeTodoCount;
		const visibleTodos = this.filterTodos(todosArray, filter);

		return (
			<div className={styles.app}>
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
				{todosArray.length > 0 && (
					<Footer
						className={styles.hidden}
						activeTodosAmount={activeTodoCount}
						completedTodosAmount={completedTodoCount}
						changeFilter={this.changeFilter}
						filter={filter}
						deleteCompleted={this.deleteCompletedTodo}
					/>
				)}
			</div>
		);
	}
}
