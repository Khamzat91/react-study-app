import React from 'react';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

const Comment = ({id, userId, text, fullName, createdAt, setSelectEditComment, setText}) => {
  const date = new Date(createdAt)
  const authUserId = JSON.parse(localStorage.getItem('user'))._id

  const handleClickEditComment = () => {
    setText(text)
    setSelectEditComment(id)
  }


  const userEditComment = () => {
    return "comment__item-edit " + (userId === authUserId ? 'active' : '')
  }

  const userDeleteComment = () => {
    return "comment__item-delete " + (userId === authUserId ? 'active' : '')
  }

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
        <div onClick={handleClickEditComment} className={userEditComment()}>
          Редактировать
        </div>
        <div className={userDeleteComment()}>
          Удалить
        </div>
      </div>
    </div>
  );
};

export default Comment;