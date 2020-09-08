import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './btn-clear-completed.module.scss';
import classNames from 'classnames';

export default class BtnClearCompleted extends Component {
	shouldComponentUpdate(nextProps) {
		return (
			(this.props.completedTodosAmount === 0 &&
				nextProps.completedTodosAmount > 0) ||
			(this.props.completedTodosAmount > 0 &&
				nextProps.completedTodosAmount === 0)
		);
	}

	render() {
		const { completedTodosAmount, deleteCompleted } = this.props;
		const btnClass = classNames(styles.btn, {
			hidden: completedTodosAmount === 0,
		});
		console.log('render BTN!!!');
		return (
			<button className={btnClass} onClick={deleteCompleted}>
				Удалить завершенные
			</button>
		);
	}
}

BtnClearCompleted.propTypes = {
	completedTodosAmount: PropTypes.number,
	deleteCompleted: PropTypes.func,
};
