import React from 'react';
import views from "../../images/content/views.svg";
import article from "../../images/content/article.png";
import "./index.scss"
import Pagination from "../pagination/pagination";
import RightHeader from "../rightHeader/rightHeader";
import Search from "../search/search";


const Articles = ({isProfile}) => {
  const [toggle, setToggle] = React.useState(true);
  const handleClickToggle = () => {
    setToggle(!toggle);
  }


  return (
    <>
      {isProfile ? null : toggle ? <RightHeader handleClickToggle={handleClickToggle}/> : <Search handleClickToggle={handleClickToggle}/>}
      <div className="main__inner-right">
        <div className="main__right-articles">
          <div className="main__right-article">
            <div className="main__right-title">
              Какой-то очень интересный заголовок
            </div>
            <div className="main__right-text">
              На работе потребовалось запилить задачу для автоматического определения города при совершении заказа.
            </div>
            <div className="main__right-data">
              <div className="main__right-date">
                12 августа 2019 в 08:06
              </div>
              <div className="main__right-views">
                <img src={views} alt=""/>
                <span>301</span>
              </div>
            </div>
          </div>
          <div className="main__right-images">
            <img src={article} alt=""/>
          </div>
        </div>
        {!isProfile && <Pagination/>}
      </div>
    </>
  );
};

export default Articles;