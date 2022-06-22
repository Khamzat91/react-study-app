import React from 'react';
import load from "../../images/load.svg";
import "./index.scss";
import {createArticle} from "../../redux/actions/articles";
import {useDispatch} from "react-redux";

const CreateArticle = () => {
  const [data, setData] = React.useState({
    file: '',
    title: '',
    text: '',
    description: ''
  });
  const [loadImage, setLoadImage] = React.useState(false);
  const dispatch = useDispatch();

  // const handleChangeFile = async (e) => {
  //   e.preventDefault()
  //   setData({...data, e.target.files[0]})
  // }

  const handleChangeField = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const onSubmit = async () => {
    try {
      await dispatch(createArticle(data))
      setLoadImage(true)
      setData({
        file: '',
        title: '',
        text: '',
        description: ''
      })
    } catch (e) {
      console.error(e)
      setLoadImage(false)
    }
  }

  return (
    <div className="create-article">
      <div className="create-article__title">
        <input name="title" value={data.title} onChange={(e) => handleChangeField(e)} type="text"
               placeholder="Введите заголовок..."/>
      </div>
      <div className="create-article__items">
        <div className="create-article__item top">
          <div className="create-article__subtitle">
            Короткое описание
          </div>
          <textarea name="text" value={data.text} onChange={(e) => handleChangeField(e)}/>
        </div>
        <div className="create-article__item">
          <div className="create-article__subtitle">
            Ссылка на изображение:
          </div>
          <div className="input__wrapper">
            <input value={data.file} name="file" type="file" id="input__file" onChange={(e) => handleChangeField(e)}
                   className="input input__file"/>
            <span>{data.file}</span>
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
          <textarea name="description" value={data.description} onChange={(e) => handleChangeField(e)}/>
          <div onClick={onSubmit} className="create-article__btn yellow">
            Опубликовать
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;