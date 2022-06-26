import React from 'react';
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";
import Comment from "./comment";
import {createComment, editComment} from "../../redux/actions/comments";
import {useParams} from "react-router-dom";


const Comments = () => {
  const {id} = useParams()// acticle id
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.comments)
  const [text, setText] = React.useState('');
  const [selectEditComment, setSelectEditComment] = React.useState(null);



  const handleChangeComment = (e) => {
    setText(e.target.value)
  }

  const handleEditTextComment = () => {
    dispatch(editComment(selectEditComment, text, id))
    setText('')
    setSelectEditComment(null)
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
                                        idComment={obj._id}
                                        userId={obj.user._id}
                                        text={obj.text}
                                        fullName={obj.user.fullName}
                                        createdAt={obj.createdAt}
                                        setSelectEditComment={setSelectEditComment}
                                        setText={setText}
        />)}
      </div>
      <div className="comment__form">
        <div className="comment__form-title">Добавить комментарий</div>
        <textarea value={text} onChange={handleChangeComment}/>
        <button disabled={text.length < 3} onClick={selectEditComment ? handleEditTextComment : handleClickComment}>Отправить</button>
      </div>
    </div>
  );
};

export default Comments;