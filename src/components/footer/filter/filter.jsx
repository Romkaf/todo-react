import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.scss';
import classNames from 'classnames';

const Filter = (props) => {
	const { onFilterChange, filter } = props;
	const buttons = [
		{ title: 'Все', filter: 'all' },
		{ title: 'Активные', filter: 'active' },
		{ title: 'Завершенные', filter: 'completed' },
	];

	const handleButtonClick = (evt) => {
		onFilterChange(evt.target.dataset.filter);
	};

	const buttonsArray = buttons.map((it) => {
		const className = classNames(styles.filter__btn, {
			[styles.filter__btn_active]: it.filter === filter,
		});

		return (
			<button
				className={className}
				type="button"
				key={it.filter}
				data-filter={it.filter}
				onClick={handleButtonClick}
			>
				{it.title}
			</button>
		);
	});

	return <div className="filter">{buttonsArray}</div>;
};

export default Filter;

Filter.propTypes = {
	onFilterChange: PropTypes.func,
	filter: PropTypes.string,
};
