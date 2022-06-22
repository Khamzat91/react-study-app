import React from 'react';
import "./index.scss"


const Comments = () => {
  return (
    <div className="comment">
      <div className="comment__title">Комментарии (3)</div>
      <div className="comment__items">
        <div className="comment__item">
          <div className="comment__item-head">
            <div className="comment__item-name">Vasya Pupkin</div>
            <div className="main__right-data">
              <div className="main__right-date">
                12 августа 2019 в 08:06
              </div>
            </div>
          </div>
          <div className="comment__item-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.
          </div>
        </div>
      </div>
      <div className="comment__form">
        <div className="comment__form-title">Добавить комментарий</div>
        <textarea/>
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default Comments;