import React from 'react';
import vasya from "../../images/content/vasya.png";

import './index.scss';


const About = () => {
  return (
    <div className="about">
        <div className="about__inner">
          <div className="about__inner-left">
            <h2 className="about__left-title">Vasya Pupkin</h2>
            <h4 className="about__left-subtitle">Блог фронтенд-разработчика</h4>
            <div className="about__left-images">
          <img src={vasya} alt="vasya"/>
            </div>
            <div className="about__inner-about">
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
        </div>
    </div>
  );
};

export default About;