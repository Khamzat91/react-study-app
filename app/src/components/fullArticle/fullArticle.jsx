import React from 'react';
import "./index.scss"
import view from "../../images/content/views.svg";
import fullArticle from "../../images/content/fullArticle.png";
import Comments from "../comments/comments";
import {useDispatch, useSelector} from "react-redux";
import {showArticle} from "../../redux/actions/articles";
import {useParams} from "react-router-dom";

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

const FullArticle = () => {
  const {id} = useParams()
  const article = useSelector(state => state.articles.article)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showArticle(id))
  }, [id])

  const date = new Date(article?.createdAt)


  return (
    <div className="full-article">
      <div className="full-article__images">
        <img src={fullArticle} alt=""/>
        <div className="main__right-box">
          <div className="main__right-data">
            <div className="main__right-date">
              {date.toLocaleDateString("ru-RU", options)}
            </div>
            <div className="main__right-views">
              <img src={view} alt=""/>
              <span>{article?.views}</span>
            </div>
          </div>
          <div className="full-article__images-title">
            {article?.title}
          </div>
          <div className="full-article__images-text">
            {article?.text}
          </div>
        </div>
      </div>
      <div className="full-article__wrapper">
        <div className="full-article__text">
          {article?.description}
        </div>
        <Comments/>
      </div>
    </div>
  );
};

export default FullArticle;