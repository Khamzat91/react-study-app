import React from 'react';
import view from "../images/content/views.svg";
import article from "../images/content/article.png";
import "./index.scss";
import {useNavigate, useParams} from "react-router-dom";

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}
const Article = ({id, title, text, createdAt, views}) => {
  const param = useParams()
  const navigate = useNavigate()
  const date = new Date(createdAt)

  const handleClick = () => {
    navigate(`/fullArticle/${id}`)
  }

  return (
    <div onClick={handleClick} className={`main__right-article ${param.id === id && "active"}`}>
      <div className="main__right-article__wrapper">
        <div className="main__right-title">
          {title}
        </div>
        <div className="main__right-text">
          {text}
        </div>
        <div className="main__right-views">
          {date.toLocaleDateString("ru-RU", options)}
          <img src={view} alt=""/>
          <span>{views}</span>
        </div>
      </div>
      <div className="main__right-images">
        <img src={article} alt=""/>
      </div>
    </div>
  );
};

export default Article;