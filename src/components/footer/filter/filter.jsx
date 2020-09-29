import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import classNames from 'classnames';

const Filter = ({ onFilterChange, filter }) => {
	const { filter: classFilter, filter__btn, filter__btn_active } = styles;

	const buttons = [
		{ title: 'Все', filter: 'all' },
		{ title: 'Активные', filter: 'active' },
		{ title: 'Завершенные', filter: 'completed' },
	];

	const handleButtonClick = (evt) => {
		onFilterChange(evt.target.dataset.filter);
	};

	const buttonsArray = buttons.map((it) => {
		const className = classNames(filter__btn, {
			[filter__btn_active]: it.filter === filter,
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

	return <div className={classFilter}>{buttonsArray}</div>;
};

export default memo(Filter);

Filter.propTypes = {
	onFilterChange: PropTypes.func,
	filter: PropTypes.string,
};
