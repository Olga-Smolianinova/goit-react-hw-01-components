import React from 'react';

import PropTypes from 'prop-types';

import defaultImg from './default.jpg'; //картинка для default

import s from './FriendListItem.module.css'; //підключення стилей

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </>
);

// для описания свойств по default
FriendListItem.defaultProps = {
  avatar: defaultImg,
};

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
