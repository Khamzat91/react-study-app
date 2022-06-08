import React from 'react';
import load from "../../images/load.svg";
import "./index.scss";

const CreateArticle = () => {
  const loadImage = false;
  const editHold = false;
  return (
    <div className="create-article">
      <div className="create-article__title">
        Введите заголовок...
      </div>
      <div className="create-article__items">
        <div className="create-article__item top">
          <div className="create-article__subtitle">
            Короткое описание
          </div>
          <textarea/>
        </div>
        <div className="create-article__item">
          <div className="create-article__subtitle">
            Ссылка на изображение:
          </div>
          <div className="create-article__box">
            <textarea/>
            {loadImage ? <div className="create-article__btn grey">Загрузка...</div> :
              <div className="create-article__btn green">
                <img src={load} alt=""/>
                Загрузить
              </div>}
          </div>
        </div>
        <div className="create-article__item area">
          <div className="create-article__subtitle">
            Полное описание
          </div>
          <textarea/>
          {
            editHold ?
              <div className="create-article__bottom">
                <button>Удалить</button>
                <div className="create-article__btn delete">
                  Сохранить
                </div>
              </div>
              :
              <div className="create-article__btn yellow">
                Опубликовать
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;