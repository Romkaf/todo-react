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

		const setClasses = (it) => {
			switch (it) {
				case item:
					return classNames(item, {
						[item_completed]: completed,
						[item_editing]: isEditing,
					});
				default:
					return classNames(it, {
						hidden: visibilityElement === 'hidden',
					});
			}
		};

		const checked = completed ? true : false;

		return (
			<div className={setClasses(item)}>
				<input
					className={setClasses(item__choice)}
					type="checkbox"
					onClick={onTodoSelect}
					checked={checked}
					readOnly
				/>
				<label className={setClasses()}>&#10003;</label>
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

				<button className={setClasses(item__delete)} onClick={onTodoDelete}>
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
