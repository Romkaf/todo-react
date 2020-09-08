import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.scss';

const Counter = ({ activeTodosAmount }) => {
	return (
		<span className={styles.counter}>
			Осталось заданий:<b>{activeTodosAmount}</b>
		</span>
	);
};

export default Counter;

Counter.propTypes = {
	activeTodosAmount: PropTypes.number,
};
