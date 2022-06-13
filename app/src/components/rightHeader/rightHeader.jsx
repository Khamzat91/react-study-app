import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setIsAuth} from "../../redux/actions/user";
import logo from "../../images/logo.png";
import search from "../../images/search.svg";
import user from "../../images/user.svg";
import edit from "../../images/edit.svg";
import logout from "../../images/logout.svg";
import "./index.scss";


const RightHeader = ({handleClickToggle}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);

  const handleClickIsAuth = () => {
    dispatch(setIsAuth(!isAuth))
  }

  return (
    <div className="header">
      <a href="#"><img src={logo} alt="logo"/></a>
      <div className="header-icons">
        <img onClick={handleClickToggle} className="header-icon" src={search} alt=""/>
        {isAuth ? <>
            <img className="header-icon" src={edit} alt=""/>
            <img onClick={handleClickIsAuth} className="header-icon" src={logout} alt=""/>
          </> :
          <Link to="/login"><img className="header-icon" src={user} alt=""/></Link>}
      </div>
    </div>
  );
};

export default RightHeader;