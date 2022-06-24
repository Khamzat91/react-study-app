import React from 'react';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

const Comment = ({text, fullName, createdAt}) => {
  const date = new Date(createdAt)

  return (
    <div className="comment__item">
      <div className="comment__item-head">
        <div className="comment__item-name">{fullName}</div>
        <div className="main__right-data">
          <div className="main__right-date">
            {date.toLocaleDateString("ru-RU", options)}
          </div>
        </div>
      </div>
      <div className="comment__item-text">
        {text}
      </div>
      <div className="comment__item-box">
        <div className="comment__item-edit">
          Редактировать
        </div>
        <div className="comment__item-delete">
          Удалить
        </div>
      </div>
    </div>
  );
};

export default Comment;