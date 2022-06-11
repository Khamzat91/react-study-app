import React from 'react';
import menuOpen from "../../images/menuOpen.svg";
import "./index.scss";

const a = [
  {id: 1, title: 'Главная', isAuth: true}
]

const MenuOpen = () => {
  return (
    <div className="menu-open">
      <div className="menu-open__inner">
        <div className="menu-open__inner-title">Вася Пупкин</div>
        <div className="menu-open__inner-date">
          Дата регистрации: 12 августа 2019 в 08:06
        </div>

      </div>
      <div className="menu-open__pages">
        <div className="menu-open__page active">Главная</div>
        <div className="menu-open__page">Мой профиль</div>
        <div className="menu-open__page">Создать запись</div>
        <div className="menu-open__page">Выйти</div>
      </div>
      <div className="menu-open__footer">
        <img src={menuOpen} alt=""/>
        <div className="menu-open__footer-menu">МЕНЮ</div>
      </div>
    </div>
  );
};

export default MenuOpen;