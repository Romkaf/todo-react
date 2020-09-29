import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import Counter from './Counter';
import Filter from './Filter';
import BtnClearCompleted from './Btn-clear-completed';

const Footer = ({
	activeTodosAmount,
	completedTodosAmount,
	onFilterChange,
	filter,
	onCompletedTodoDelete,
}) => {
	return (
		<footer className={styles.footer}>
			<Counter activeTodosAmount={activeTodosAmount} />
			<Filter onFilterChange={onFilterChange} filter={filter} />
			<BtnClearCompleted
				completedTodosAmount={completedTodosAmount}
				onCompletedDelete={onCompletedTodoDelete}
			/>
		</footer>
	);
};

export default Footer;

Footer.propTypes = {
	completedTodosAmount: PropTypes.number,
	activeTodosAmount: PropTypes.number,
	onFilterChange: PropTypes.func,
	filter: PropTypes.string,
	onCompletedTodoDelete: PropTypes.func,
};
