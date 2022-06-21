import React from 'react';
import menuOpen from "../../images/menuOpen.svg";
import {Link, useNavigate} from "react-router-dom";
import "./index.scss";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth} from "../../redux/actions/user";

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

const MenuOpen = ({handleClickMenu, handleClickContentToggle}) => {
  const [activeId, setActiveId] = React.useState(null);
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  const handleChangeActive = (pathname) => {
    handleClickContentToggle(pathname)
    setActiveId(pathname)
    handleClickMenu()
  }

  const addClassNameOpen = (pathname) => {
    return "menu-open__page " + (activeId === pathname ? "active" : "")
  }

  const handleRemoveUser = () => {
    localStorage.removeItem('user')
    dispatch(setIsAuth(!isAuth))
    navigate('/')
  }

  const user = JSON.parse(localStorage.getItem('user'))
  const date = new Date(user?.createAt)


  return (
    <div className="menu-open">
      <div className="menu-open__inner">
        {isAuth && <>
          <div className="menu-open__inner-title">{user?.fullName}</div>
          <div className="menu-open__inner-date">
            Дата регистрации: {date.toLocaleDateString("ru-RU", options)}
          </div>
        </>}

      </div>
      <div className="menu-open__pages">
        <Link to="/" onClick={() => handleChangeActive('about')}
              className={addClassNameOpen('about')}>Главная</Link>
        {isAuth && <><Link to="profile" onClick={() => handleChangeActive('profile')}
                           className={addClassNameOpen('profile')}>Мой профиль</Link>
          <Link to="/createArticle" onClick={() => handleChangeActive('createArticle')}
                className={addClassNameOpen('createArticle')}>Создать запись</Link>
          <div onClick={handleRemoveUser} className="menu-open__page">Выйти</div>
        </>}
      </div>
      <div className="menu-open__footer">
        <img onClick={handleClickMenu} src={menuOpen} alt=""/>
        <div className="menu-open__footer-menu">МЕНЮ</div>
      </div>
    </div>
  );
};

export default MenuOpen;