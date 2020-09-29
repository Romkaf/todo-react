import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Btn-clear-completed.module.scss';
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
		const { completedTodosAmount, onCompletedDelete } = this.props;
		const btnClass = classNames(styles.btn, {
			hidden: completedTodosAmount === 0,
		});

		return (
			<button className={btnClass} onClick={onCompletedDelete}>
				Удалить завершенные
			</button>
		);
	}
}

BtnClearCompleted.propTypes = {
	completedTodosAmount: PropTypes.number,
	onCompletedDelete: PropTypes.func,
};
