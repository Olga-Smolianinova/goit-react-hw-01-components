import React from 'react';

import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css'; //підключення стилей

const TransactionHistory = ({ items }) => (
  <table className="section">
    <thead>
      <tr className={s.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={s.item} key={id}>
          <td>{type}</td>
          <td> {amount}</td>
          <td> {currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
