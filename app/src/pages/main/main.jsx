import React from 'react';
import Articles from "../../components/articles/Articles";
import "./index.scss";
import CreateArticle from "../../components/createArticle/createArticle";
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "../../components/about/about";
import FullArticle from "../../components/fullArticle/fullArticle";
import EditArticle from "../../components/editArticle/editArticle";

const Main = () => {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/createArticle" element={<CreateArticle/>}/>
        <Route path="/editArticle" element={<EditArticle/>}/>
        <Route path="/fullArticle/:id" element={<FullArticle/>}/>
      </Routes>
      <div className="main__wrapper">
        <Articles/>
      </div>
    </div>
  );
};

export default Main;