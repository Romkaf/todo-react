import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './todo-item.module.scss';
import '../../../scss/scaffolding.scss';
import { keyCode } from '../../../constants';
import classNames from 'classnames';

export default class TodoItem extends PureComponent {
	state = {
		visibilityElement: 'visible',
		isEditing: false,
		value: '',
	};

	onTaskDblClick = (evt) => {
		this.setState({
			visibilityElement: 'hidden',
			isEditing: true,
			value: evt.target.textContent,
		});

		evt.target.parentNode.classList.add(styles.item_editing);
	};

	finishTodoEditing = (evt) => {
		if (
			evt.keyCode === keyCode.ENTER ||
			evt.type === 'blur' ||
			evt.keyCode === keyCode.ESC
		) {
			const input = evt.target;
			if (!this.state.isEditing) return;
			const insertText =
				evt.keyCode === keyCode.ESC
					? this.props.title
					: input.value.trim().replace(/\s+/g, ' ');

			if (this.deleteEmptyTask(evt, insertText)) return;
			this.props.editTodo(insertText);
			input.parentNode.classList.remove(styles.item_editing);
			this.setState({ visibilityElement: 'visible', isEditing: false });
		}
	};

	deleteEmptyTask = (evt, insertText) => {
		if (!insertText) {
			try {
				evt.target.parentNode.remove();
				this.props.deleteTodo();
				return 'return';
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
		const {
			item,
			item_completed,
			item__choice,
			item__task,
			item__delete,
		} = styles;

		const itemClass = classNames(item, {
			[item_completed]: completed === true,
		});

		const hiddenClass =
			this.state.visibilityElement === 'hidden' ? 'hidden' : '';

		const checked = completed === true ? true : false;

		return (
			<div className={itemClass}>
				<input
					className={`${item__choice}  ${hiddenClass}`}
					type="checkbox"
					onClick={selectTodo}
					checked={checked}
					readOnly
				/>
				<label className={hiddenClass}>&#10003;</label>
				{this.state.isEditing ? (
					<input
						className={item__task}
						onKeyDown={this.finishTodoEditing}
						onBlur={this.finishTodoEditing}
						value={this.state.value}
						onChange={this.onChangeHandler}
						autoFocus
					/>
				) : (
					<span className={item__task} onDoubleClick={this.onTaskDblClick}>
						{title}
					</span>
				)}
				{/* eslint-disable-next-line */}
				<button
					className={`${item__delete} ${hiddenClass}`}
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
