import React from 'react';

import PropTypes from 'prop-types';

import s from './Statistics.module.css'; //підключення стилей

const Statistics = ({ title, stats }) => (
  <section className="section">
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage, color }) => (
        <li key={id} className={s.item} style={{ backgroundColor: color }}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}> {percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
