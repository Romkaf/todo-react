import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import { keyCode } from '../../constants';
import classNames from 'classnames';

export default class Header extends PureComponent {
	state = {
		value: '',
	};

	handleValidateValue = (evt) => {
		const validateValue = evt.target.value.trim().replace(/\s+/g, ' ');
		if (validateValue) this.props.onTodoAdd(validateValue);
		this.setState({ value: '' });
	};

	handleInputBlur = (evt) => {
		if (evt.type === 'blur') {
			this.handleValidateValue(evt);
		}
	};

	handleInputEnter = (evt) => {
		if (evt.keyCode === keyCode.ENTER) {
			this.handleValidateValue(evt);
		}
	};

	handleInputChange = (evt) => this.setState({ value: evt.target.value });

	render() {
		const {
			header,
			header__title,
			header__choiceAll,
			header__choiceAll_selected,
			header__input,
		} = styles;
		const { todosArray, onAllTodoSelect } = this.props;
		const className = classNames(header__choiceAll, {
			hidden: todosArray.length === 0,
			[header__choiceAll_selected]: todosArray.every((it) => it.completed),
		});

		return (
			<header className={header}>
				<h1 className={header__title}>ToDo</h1>
				<span className={className} onClick={onAllTodoSelect}>
					&#8249;
				</span>
				<input
					className={header__input}
					type="text"
					placeholder="Что надо сделать?"
					onChange={this.handleInputChange}
					value={this.state.value}
					onBlur={this.handleInputBlur}
					onKeyDown={this.handleInputEnter}
				/>
			</header>
		);
	}
}

Header.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	onTodoAdd: PropTypes.func,
	onAllTodoSelect: PropTypes.func,
};
