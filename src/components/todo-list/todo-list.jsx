import React from 'react';
import TodoItem from './Todo-item';
import PropTypes from 'prop-types';

const TodoList = ({ todosArray, onTodoSelect, onTodoDelete, onTodoEdit }) => {
	const todos = todosArray.map((it) => {
		return (
			<li key={it.id}>
				<TodoItem
					title={it.title}
					completed={it.completed}
					onTodoSelect={() => onTodoSelect(it.id)}
					onTodoDelete={() => onTodoDelete(it.id)}
					onTodoEdit={(text) => onTodoEdit(it.id, text)}
				/>
			</li>
		);
	});

	return <ul className="todo-list">{todos}</ul>;
};

export default TodoList;

TodoList.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	onTodoDelete: PropTypes.func,
	onTodoEdit: PropTypes.func,
	onTodoSelect: PropTypes.func,
};
