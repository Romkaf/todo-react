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

	handleTaskDblClick = (evt) => {
		this.setState({
			visibilityElement: 'hidden',
			isEditing: true,
			value: evt.target.textContent,
		});
	};

	finishTodoEditing = (evt) => {
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
		if (evt.type === 'blur') this.finishTodoEditing(evt);
	};

	handleInputKeyDown = (evt) => {
		if (evt.keyCode === keyCode.ENTER || evt.keyCode === keyCode.ESC) {
			this.finishTodoEditing(evt);
		}
	};

	handleInputChange = (evt) => {
		this.setState({ value: evt.target.value });
	};

	render() {
		const { title, completed, onTodoSelect, onTodoDelete } = this.props;
		const {
			item,
			item_completed,
			item_editing,
			item__choice,
			item__task,
			item__delete,
		} = styles;

		const itemClass = classNames(item, {
			[item_completed]: completed === true,
			[item_editing]: this.state.isEditing === true,
		});

		const hiddenClass =
			this.state.visibilityElement === 'hidden' ? 'hidden' : '';

		const checked = completed === true ? true : false;

		return (
			<div className={itemClass}>
				<input
					className={`${item__choice}  ${hiddenClass}`}
					type="checkbox"
					onClick={onTodoSelect}
					checked={checked}
					readOnly
				/>
				<label className={hiddenClass}>&#10003;</label>
				{this.state.isEditing ? (
					<input
						className={item__task}
						onKeyDown={this.handleInputKeyDown}
						onBlur={this.handleInputBlur}
						value={this.state.value}
						onChange={this.handleInputChange}
						autoFocus
					/>
				) : (
					<span className={item__task} onDoubleClick={this.handleTaskDblClick}>
						{title}
					</span>
				)}

				<button
					className={`${item__delete} ${hiddenClass}`}
					onClick={onTodoDelete}
				>
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
