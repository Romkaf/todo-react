import React, { PureComponent } from 'react';
import Header from '../Header';
import TodoList from '../Todo-list';
import Footer from '../Footer';
import styles from './App.module.scss';
import { locStorKey } from '../../constants';
import '../../scss/scaffolding.scss';

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
			allCompleted: false,
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
				allCompleted: false,
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

		this.handleAllCompletedChange();
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

	handleAllTodosSelect = () => {
		const { todosArray, allCompleted } = this.state;
		this.setState({
			todosArray: todosArray.map((it) => ({ ...it, completed: !allCompleted })),
			allCompleted: !allCompleted,
		});
	};

	handleAllCompletedChange = () => {
		this.setState(({ todosArray }) => {
			return {
				allCompleted: todosArray.every((it) => it.completed),
			};
		});
	};

	setLocalStorage = (state, key) => {
		localStorage.setItem(key, JSON.stringify(state));
	};

	loadLocalStorage = () => {
		const { todosArray, filter, allCompleted } = JSON.parse(
			localStorage.getItem('state'),
		);

		this.setState({
			todosArray: todosArray || [],
			filter: filter || 'all',
			allCompleted,
		});
	};

	componentDidMount() {
		if (JSON.parse(localStorage.getItem('state'))) {
			this.loadLocalStorage();
		}
	}

	componentDidUpdate(prevState) {
		const { todosArray } = this.state;

		this.setLocalStorage(this.state, locStorKey);
		this.id =
			todosArray.length === 0 ? 1 : todosArray[todosArray.length - 1].id + 1;
	}

	render() {
		const { todosArray, filter, allCompleted } = this.state;
		const activeTodoCount = todosArray.filter((it) => it.completed === false)
			.length;
		const completedTodoCount = todosArray.length - activeTodoCount;
		const visibleTodos = this.filterTodos(todosArray, filter);

		return (
			<div className={styles.app}>
				<Header
					onTodoAdd={this.handleTodoAdd}
					todosArray={todosArray}
					onAllTodoSelect={this.handleAllTodosSelect}
					marker={allCompleted}
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
