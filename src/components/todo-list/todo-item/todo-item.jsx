import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Todo-item.module.scss';
import { keyCode } from '../../../constants';
import classNames from 'classnames';

export default class TodoItem extends Component {
	state = {
		visibilityElement: 'visible',
		isEditing: false,
		value: '',
	};

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.completed !== nextProps.completed ||
			this.state.isEditing !== nextState.isEditing ||
			this.state.value !== nextState.value
		);
	}

	handleTaskDblClick = (evt) => {
		this.setState({
			visibilityElement: 'hidden',
			isEditing: true,
			value: evt.target.textContent,
		});
	};

	handleTodoEditingComplete = (evt) => {
		const input = evt.target;
		const insertText =
			evt.keyCode === keyCode.ESC
				? this.props.title
				: input.value.trim().replace(/\s+/g, ' ');

		if (!insertText) {
			this.props.onTodoDelete();
		} else {
			this.props.onTodoEdit(insertText);
		}

		this.setState({ visibilityElement: 'visible', isEditing: false });
	};

	handleInputBlur = (evt) => {
		if (evt.type === 'blur') {
			this.handleTodoEditingComplete(evt);
		}
	};

	handleInputKeyDown = (evt) => {
		if (evt.keyCode === keyCode.ENTER || evt.keyCode === keyCode.ESC) {
			this.handleTodoEditingComplete(evt);
		}
	};

	handleInputChange = (evt) => {
		this.setState({ value: evt.target.value });
	};

	render() {
		const { title, completed, onTodoSelect, onTodoDelete } = this.props;
		const { visibilityElement, isEditing, value } = this.state;
		const {
			item,
			item_completed,
			item_editing,
			item__choice,
			item__task,
			item__delete,
		} = styles;

		const itemClass = classNames(item, {
			[item_completed]: completed,
			[item_editing]: isEditing,
		});

		const hiddenClass = { hidden: visibilityElement === 'hidden' };

		const checkboxClass = classNames(item__choice, hiddenClass);
		const crossClass = classNames(item__delete, hiddenClass);
		const labelClass = classNames(hiddenClass);

		return (
			<div className={itemClass}>
				<input
					className={checkboxClass}
					type="checkbox"
					onClick={onTodoSelect}
					checked={completed}
					readOnly
				/>
				<label className={labelClass}>&#10003;</label>
				{isEditing ? (
					<input
						className={item__task}
						onKeyDown={this.handleInputKeyDown}
						onBlur={this.handleInputBlur}
						value={value}
						onChange={this.handleInputChange}
						autoFocus
					/>
				) : (
					<span className={item__task} onDoubleClick={this.handleTaskDblClick}>
						{title}
					</span>
				)}

				<button className={crossClass} onClick={onTodoDelete}>
					<span role="img" aria-label="cross">
						&#10060;
					</span>
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	title: PropTypes.string,
	completed: PropTypes.bool,
	onTodoDelete: PropTypes.func,
	onTodoEdit: PropTypes.func,
	onTodoSelect: PropTypes.func,
};
