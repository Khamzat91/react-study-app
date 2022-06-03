import React from 'react';
import Container from "../Container";
import vasya from "../../images/content/vasya.png";
import logo from "../../images/logo.png";
import article from "../../images/content/article.png";
import views from "../../images/content/views.svg";

import './index.scss';


const Main = () => {
  return (
    <div className="main">
      <Container>
        <div className="main__inner">
          <div className="main__inner-left">
            <h2 className="main__left-title">Vasya Pupkin</h2>
            <h4 className="main__left-subtitle">Блог фронтенд-разработчика</h4>
            <div className="main__left-images">
              <img src={vasya} alt="vasya"/>
            </div>
            <div className="main__inner-about">
              <div className="about__title">Обо мне</div>
              <div className="about__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu risus.
                Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit.
                Mattis scelerisque leo curabitur faucibus. Nec, sed porta ac enim.
                Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
                nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet amet,
                llaoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.
              </div>
            </div>
          </div>
          <div className="main__inner-right">
            <div className="main__inner-logo">
              <a href="#"><img src={logo} alt="logo"/></a>
            </div>
            <div className="main__right-articles">
             <div className="main__right-article">
               <div className="main__right-images">
                 <img src={article} alt=""/>
               </div>
               <div className="main__right-title">
                 JavaScript: Как с помощью Dada определить город по IP?
               </div>
               <div className="main__right-text">
                 На работе потребовалось запилить задачу для автоматического определения города при совершении заказа.
                 Было решено сделать это на фронте, ибо бек был занят.
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

            </div>

          </div>
        </div>
      </Container>
      <div className="menu">
        <div className="menu__title">menu</div>
        <div className="menu__btn"></div>
      </div>
    </div>
  );
};

export default Main;