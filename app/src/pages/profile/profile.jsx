import React from 'react';
import logo from "../../images/logo.png";
import Articles from "../../components/articles/Articles";
import "./index.scss";

const Profile = () => {
  const loginData = JSON.parse(localStorage.getItem('loginData'))
  const registerData = JSON.parse(localStorage.getItem('registerData'))
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  let date = new Date(registerData.data.createdAt)
  return (
    <div className="profile">
      <div className="profile__logo">
        <a href="#"><img src={logo} alt="logo"/></a>
      </div>
      <div className="profile__inner">
        <div className="profile__inner-title">{loginData.data.fullName}</div>
        <div className="profile__inner-date">
          Дата регистрации: <span>{date.toLocaleDateString("ru-RU", options)}</span>
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