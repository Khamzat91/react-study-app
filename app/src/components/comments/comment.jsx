import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteComment} from "../../redux/actions/comments";
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

const Comment = ({idComment, userId, text, fullName, createdAt, setSelectEditComment, setText}) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const date = new Date(createdAt)
  const authUserId = JSON.parse(localStorage.getItem('user'))._id

  const handleClickEditComment = () => {
    setText(text)
    setSelectEditComment(idComment)
  }


  const handleClickDeleteComment = () => {
    dispatch(deleteComment(idComment, id))
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
        <div onClick={handleClickDeleteComment} className={userDeleteComment()}>
          Удалить
        </div>
      </div>
    </div>
  );
};

export default Comment;