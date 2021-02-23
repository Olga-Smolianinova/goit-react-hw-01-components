import React from "react";

import PropTypes from "prop-types";

import defaultImg from "../default.jpg"; //картинка для default

const FriendList = ({ friendsData }) => (
  <section className="friends">
    <h2 className="title">Friends</h2>
    <ul className="fiends-list">
      {friendsData.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="item">
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  </section>
);

// для описания свойств по default
FriendList.defaultProps = {
  avatar: defaultImg,
};

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
