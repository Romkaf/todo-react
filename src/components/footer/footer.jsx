import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';
import Counter from './counter/counter.jsx';
import Filter from './filter/filter.jsx';
import BtnClearCompleted from './btn-clear-completed/btn-clear-completed.jsx';

const Footer = (props) => {
	const {
		activeTodosAmount,
		completedTodosAmount,
		onFilterChange,
		filter,
		onCompletedTodoDelete,
	} = props;

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
