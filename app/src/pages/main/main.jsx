import React from 'react';
import About from "../../components/about/about";
import Articles from "../../components/articles/Articles";
import logo from "../../images/logo.png";
import search from "../../images/search.svg";
import user from "../../images/user.svg";
import "./index.scss";
import RightHeader from "../../components/rightHeader/rightHeader";

const Main = () => {
  return (
    <div className="main">
      <About/>
      <div className="main__wrapper">
      <RightHeader/>
      <Articles/>
      </div>
    </div>
  );
};

export default Main;