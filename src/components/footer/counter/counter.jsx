import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.scss';

const Counter = ({ activeTodosAmount }) => {
	return (
		<span className={styles.counter}>
			Осталось заданий:<b>{activeTodosAmount}</b>
		</span>
	);
};

export default memo(Counter);

Counter.propTypes = {
	activeTodosAmount: PropTypes.number,
};
