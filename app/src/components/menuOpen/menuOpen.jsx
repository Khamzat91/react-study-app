import React from 'react';
import menuOpen from "../../images/menuOpen.svg";
import {Link} from "react-router-dom";
import "./index.scss";


const MenuOpen = ({handleClickMenu, handleClickContentToggle}) => {
  const [activeId, setActiveId] = React.useState(null);

  const handleChangeActive = (pathname) => {
    handleClickContentToggle(pathname)
    setActiveId(pathname)
  }

  const addClassNameOpen = (pathname) => {
    return "menu-open__page " + (activeId === pathname ? "active" : "")
  }

  return (
    <div className="menu-open">
      <div className="menu-open__inner">
        <div className="menu-open__inner-title">Вася Пупкин</div>
        <div className="menu-open__inner-date">
          Дата регистрации: 12 августа 2019 в 08:06
        </div>

      </div>
      <div className="menu-open__pages">
        <Link to="/" onClick={() => handleChangeActive('about')}
              className={addClassNameOpen('about')}>Главная</Link>
        <Link to="profile" onClick={() => handleChangeActive('profile')}
              className={addClassNameOpen('profile')}>Мой профиль</Link>
        <Link to="/" onClick={() => handleChangeActive('createArticle')}
              className={addClassNameOpen('createArticle')}>Создать запись</Link>
        <div className="menu-open__page">Выйти</div>
      </div>
      <div className="menu-open__footer">
        <img onClick={handleClickMenu} src={menuOpen} alt=""/>
        <div className="menu-open__footer-menu">МЕНЮ</div>
      </div>
    </div>
  );
};

export default MenuOpen;