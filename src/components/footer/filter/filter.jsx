import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.scss';
import classNames from 'classnames';

export default class Filter extends PureComponent {
	buttons = [
		{ title: 'Все', filter: 'all' },
		{ title: 'Активные', filter: 'active' },
		{ title: 'Завершенные', filter: 'completed' },
	];

	render() {
		const { onFilterChange, filter } = this.props;
		const buttons = this.buttons.map((it) => {
			const className = classNames(styles.filter__btn, {
				[styles.filter__btn_active]: it.filter === filter,
			});

			return (
				<button
					className={className}
					type="button"
					key={it.filter}
					onClick={() => onFilterChange(it.filter)}
				>
					{it.title}
				</button>
			);
		});

		return <div className="filter">{buttons}</div>;
	}
}

Filter.propTypes = {
	onFilterChange: PropTypes.func,
	filter: PropTypes.string,
};
