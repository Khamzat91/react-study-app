import React from 'react';
import load from "../../images/load.svg";
import "./index.scss";

const CreateArticle = () => {
  const [file, setFile] = React.useState();
  const loadImage = false;
  const editHold = false;
  return (
    <div className="create-article">
      <div className="create-article__title">
        <input type="text" placeholder="Введите заголовок..."/>
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
          <div className="input__wrapper">
            <input name="file" type="file" id="input__file" onChange={}
                   className="input input__file"/>
            <label htmlFor="input__file" className="input__file-button">
              {loadImage ? <div className="create-article__btn grey">Загрузка...</div> :
                <span className="input__file-button-text">
                    <img className="input__file-icon" src={load} alt="Выбрать файл" width="25"/>
                    Загрузить
                  </span>}
            </label>
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