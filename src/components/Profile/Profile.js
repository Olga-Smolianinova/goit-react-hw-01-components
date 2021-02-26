import React from 'react';

import PropTypes from 'prop-types';

import s from './Profile.module.css'; //підключення стилей

import defaultImg from './default.jpg'; //картинка для default

const Profile = ({
  name,
  tag,
  location,
  avatar,
  // stats,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="section">
      <div className={s.description}>
        <img src={avatar} alt={name} width="150" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>

        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>

        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

// для описания свойств по default
// console.dir(Profile);
Profile.defaultProps = {
  avatar: defaultImg,
};

// для описания propTypes, для каждого компонента где есть props. Описание всех props, которые указали в параметрах или шаблоне
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // stats: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
