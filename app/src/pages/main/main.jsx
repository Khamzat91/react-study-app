import React from 'react';
import Articles from "../../components/articles/Articles";
import "./index.scss";
import RightHeader from "../../components/rightHeader/rightHeader";
import CreateArticle from "../../components/createArticle/createArticle";

const Main = () => {
  return (
    <div className="main">
      <CreateArticle/>
      <div className="main__wrapper">
      <RightHeader/>
      <Articles/>
      </div>
    </div>
  );
};

export default Main;