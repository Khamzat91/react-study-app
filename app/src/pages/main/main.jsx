import React from 'react';
import Articles from "../../components/articles/Articles";
import "./index.scss";
import CreateArticle from "../../components/createArticle/createArticle";
import About from "../../components/about/about";
import FullArticle from "../../components/fullArticle/fullArticle";

const Main = () => {
  return (
    <div className="main">
      <About/>
      <div className="main__wrapper">
      <Articles/>
      </div>
    </div>
  );
};

export default Main;