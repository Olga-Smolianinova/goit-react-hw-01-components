import React from "react";

import PropTypes from "prop-types";

const Statistics = ({ stats }) => (
  // console.log(stats);
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
