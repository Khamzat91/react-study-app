import React from 'react';
import logo from "../../images/logo.png";
import Articles from "../../components/articles/Articles";
import "./index.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__logo">
        <a href="#"><img src={logo} alt="logo"/></a>
      </div>
      <div className="profile__inner">
        <div className="profile__inner-title">Вася Пупкин</div>
        <div className="profile__inner-date">
           Дата регистрации: <span>12 августа 2019 в 08:06</span>
        </div>
        <div className="profile__inner-items">
          <div className="profile__inner-article active">Статьи</div>
          <div className="profile__inner-comment">Комментарии</div>
        </div>
        <Articles isProfile={true}/>
      </div>
    </div>
  );
};

export default Profile;