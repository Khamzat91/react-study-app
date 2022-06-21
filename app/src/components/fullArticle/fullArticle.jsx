import React from 'react';
import "./index.scss"
import views from "../../images/content/views.svg";
import fullArticle from "../../images/content/fullArticle.png";
import Comments from "../comments/comments";
import {useDispatch, useSelector} from "react-redux";
import {showArticle} from "../../redux/actions/articles";
import {useParams} from "react-router-dom";

const FullArticle = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  React.useEffect(() => {
    dispatch(showArticle(id))
  }, [])


  return (
    <div className="full-article">
      <div className="full-article__images">
        <img src={fullArticle} alt=""/>
        <div className="main__right-box">
          <div className="main__right-data">
            <div className="main__right-date">
              12 августа 2019 в 08:06
            </div>
            <div className="main__right-views">
              <img src={views} alt=""/>
              <span>55</span>
            </div>
          </div>
          <div className="full-article__images-title">
            Какой-то очень интересный заголовок
          </div>
          <div className="full-article__images-text">
            Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз то начинают, то забрасывают изучение
            технологий.
          </div>
        </div>
      </div>
      <div className="full-article__wrapper">
        <div className="full-article__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque
          diam arcu risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc
          suscipit. Mattis <span>scelerisque leo</span> curabitur faucibus. Nec, sed porta ac enim. Mattis quam accumsan
          ipsum commodo
          sed purus mi. Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
          laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.
        </div>
        <h1 className="full-article__list">Заголовок H1</h1>
        <h2 className="full-article__list">Заголовок H2</h2>
        <h3 className="full-article__list">Заголовок H3</h3>
        <h4 className="full-article__list">Заголовок H4</h4>
        <h5 className="full-article__list">Заголовок H5</h5>
        <div className="full-article__subtitle active">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu risus. Imperdiet dolor,
          porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis scelerisque leo
          curabitur
        </div>
        <Comments/>
      </div>
    </div>
  );
};

export default FullArticle;