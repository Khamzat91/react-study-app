import React from 'react';
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";
import Comment from "./comment";
import {createComment} from "../../redux/actions/comments";
import {useParams} from "react-router-dom";


const Comments = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments)
  const [text, setText] = React.useState('');

  console.log(comments)

  const handleChangeComment = (e) => {
    setText(e.target.value)
  }

  const handleClickComment = async () => {
   await dispatch(createComment({text: text, postId: id}))
    setText('')
  }

  return (
    <div className="comment">
      <div className="comment__title">Комментарии {comments.length}</div>
      <div className="comment__items">
        {comments.map((obj) => <Comment key={obj._id}
                                        text={obj.text}
                                        fullName={obj.user.fullName}
                                        createdAt={obj.createdAt}
        />)}
      </div>
      <div className="comment__form">
        <div className="comment__form-title">Добавить комментарий</div>
        <textarea value={text} onChange={handleChangeComment}/>
        <button onClick={handleClickComment}>Отправить</button>
      </div>
    </div>
  );
};

export default Comments;