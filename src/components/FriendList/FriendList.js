import React from 'react';

import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import s from './FriendList.module.css'; //підключення стилей

const FriendList = ({ friendsData }) => (
  <section className="section">
    <h2 className={s.title}>Friends</h2>
    <ul className={s.friends__list}>
      {friendsData.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  </section>
);

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
