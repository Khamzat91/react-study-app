import React from 'react';
import "./index.scss";
import logo from "../../images/logo.png";
import search from "../../images/search.svg";
import user from "../../images/user.svg";
import edit from "../../images/edit.svg";
import logout from "../../images/logout.svg";

const RightHeader = ({handleClickToggle}) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const handleClickIsAuth = () => {
    
  }

  return (
    <div className="header">
      <a href="#"><img src={logo} alt="logo"/></a>
      <div className="header-icons">
        <img onClick={handleClickToggle} className="header-icon" src={search} alt=""/>
        {isAuth ? <img className="header-icon" src={user} alt=""/> :
          <>
          <img className="header-icon" src={edit} alt=""/>
          <img className="header-icon" src={logout} alt=""/>
        </> }
      </div>
    </div>
  );
};

export default RightHeader;