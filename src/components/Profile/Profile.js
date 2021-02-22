import React from "react";

import PropTypes from "prop-types";

import s from "./Profile.module.css"; //підключення стилей

import defaultImg from "../default.jpg"; //картинка для default

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
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt={name} width="320" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>

        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>

        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
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
