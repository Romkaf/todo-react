import React, { PureComponent } from 'react';
import Header from '../header/header.jsx';
import TodoList from '../todo-list/todo-list.jsx';
import Footer from '../footer/footer.jsx';
import styles from './app.module.scss';
import { localStorageKey } from '../../constants';

export default class App extends PureComponent {
	state = {
		todosArray: [],
		filter: 'all',
		allCompleted: false,
	};

	id = 1;

	createTodo(title) {
		return {
			title,
			id: this.id++,
			completed: false,
		};
	}

	handleFilterChange = (filter) => {
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

	handleTodoAdd = (text) => {
		this.setState({
			todosArray: [...this.state.todosArray, this.createTodo(text)],
		});
	};

	handleTodoDelete = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !(it.id === id)),
			};
		});
	};

	handleCompletedTodoDelete = () => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.filter((it) => !it.completed),
			};
		});
	};

	handleTodoSelect = (id) => {
		this.setState(({ todosArray }) => {
			return {
				todosArray: todosArray.map((it) => {
					return it.id === id ? { ...it, completed: !it.completed } : it;
				}),
			};
		});
	};

	handleTodoEdit = (id, text) => {
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

	handleAllTodoSelect = () => {
		this.setState(({ todosArray, allCompleted }) => {
			const newArray = todosArray.map((it) => {
				return it.completed === allCompleted
					? { ...it, completed: !allCompleted }
					: it;
			});

			return {
				todosArray: newArray,
				allCompleted: !allCompleted,
			};
		});
	};

	handleAllCompletedChange = () => {
		const { todosArray } = this.state;
		const newAllCompletetd = todosArray.every((it) => it.completed === true)
			? true
			: false;

		this.setState({
			allCompleted: newAllCompletetd,
		});
	};

	setLocalStorage = (stateName) => {
		localStorage.setItem(localStorageKey, JSON.stringify(stateName));
	};

	loadLocalStorage = () => {
		this.setState({
			todosArray: JSON.parse(localStorage.getItem(localStorageKey)) || [],
		});
	};

	componentDidMount() {
		this.loadLocalStorage();
	}

	componentDidUpdate(prevProps, prevState) {
		const { todosArray } = this.state;

		if (prevState.todosArray !== todosArray) {
			this.setLocalStorage(todosArray);
			this.id =
				todosArray.length === 0 ? 1 : todosArray[todosArray.length - 1].id + 1;
		}
		this.handleAllCompletedChange();
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
					onTodoAdd={this.handleTodoAdd}
					todosArray={todosArray}
					onAllTodoSelect={this.handleAllTodoSelect}
				/>
				<main>
					<TodoList
						todosArray={visibleTodos}
						onTodoSelect={this.handleTodoSelect}
						onTodoDelete={this.handleTodoDelete}
						onTodoEdit={this.handleTodoEdit}
					/>
				</main>
				{todosArray.length > 0 && (
					<Footer
						className={styles.hidden}
						activeTodosAmount={activeTodoCount}
						completedTodosAmount={completedTodoCount}
						onFilterChange={this.handleFilterChange}
						filter={filter}
						onCompletedTodoDelete={this.handleCompletedTodoDelete}
					/>
				)}
			</div>
		);
	}
}
