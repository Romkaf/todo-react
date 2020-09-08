import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import { keyCode } from '../../constants';

export default class Header extends PureComponent {
	todoInputHandler = (evt) => {
		if (evt.keyCode === keyCode.ENTER || evt.type === 'blur') {
			const validateValue = evt.target.value.trim().replace(/\s+/g, ' ');
			if (validateValue) this.props.addTodo(validateValue);
			evt.target.value = '';
		}
	};

	render() {
		const { todosArray, selectAll } = this.props;
		const visibility = todosArray.length > 0 ? 'visible' : 'hidden';
		const opacity = todosArray.every((it) => it.completed) ? 1 : 0.2;
		const checked = todosArray.every((it) => it.completed) ? 'ckecked' : '';

		return (
			<header className={styles.header}>
				<h1 className={styles.header__title}>ToDo</h1>
				<input
					className={styles.header__choiceAll}
					id="choice-all"
					type="checkbox"
					onClick={selectAll}
					checked={checked}
					readOnly
				/>
				<label
					style={{ opacity: opacity, visibility: visibility }}
					htmlFor="choice-all"
				>
					&#8249;
				</label>
				<input
					className={styles.header__input}
					type="text"
					placeholder="Что надо сделать?"
					onBlur={this.todoInputHandler}
					onKeyDown={this.todoInputHandler}
				/>
			</header>
		);
	}
}

Header.propTypes = {
	todosArray: PropTypes.arrayOf(PropTypes.object),
	addTodo: PropTypes.func,
	selectAll: PropTypes.func,
};
