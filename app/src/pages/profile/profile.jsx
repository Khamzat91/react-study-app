import React from 'react';
import logo from "../../images/logo.png";
import "./index.scss";
import {useDispatch, useSelector} from "react-redux";
import {getProfileArticles} from "../../redux/actions/user";
import Article from "../../article/article";
import Comment from "../../components/comments/comment";

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("articles");
  const userArticles = useSelector(state => state.user.articles)
  const userComments = useSelector(state => state.user.comments)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))
  const userId = JSON.parse(localStorage.getItem('user'))._id
  const date = new Date(user?.createAt)

  const onClickArticleId = () => {
    setActiveTab("articles")
  }

  const onClickCommentId = () => {
    setActiveTab("comments")
  }

  React.useEffect(() => {
    dispatch(getProfileArticles(userId))
  }, [])

  const addClassNameArticle = () => {
    return "profile__inner-article " + (activeTab === "articles" ? "active" : '')
  }

  const addClassNameComment = () => {
    return "profile__inner-comment " + (activeTab === "comments" ? "active" : '')
  }

  return (
    <div className="profile">
      <div className="profile__logo">
        <a href="#"><img src={logo} alt="logo"/></a>
      </div>
      <div className="profile__inner">
        <div className="profile__inner-title">{user?.fullName}</div>
        <div className="profile__inner-date">
          Дата регистрации: <span>{date.toLocaleDateString("ru-RU", options)}</span>
        </div>
        <div className="profile__inner-items">
          <div onClick={onClickArticleId} className={addClassNameArticle()}>Статьи</div>
          <div onClick={onClickCommentId} className={addClassNameComment()}>Комментарии</div>
        </div>
        {activeTab === "articles" && userArticles.map((obj) => <Article key={obj._id}
                                                                        id={obj._id}
                                                                        title={obj.title}
                                                                        text={obj.text}
                                                                        description={obj.description}
                                                                        views={obj.views}
                                                                        createdAt={obj.createdAt}

        />)}
        {activeTab === "comments" && userComments.map((obj) => <Comment key={obj._id}
                                                                    idComment={obj._id}
                                                                    userId={obj.user._id}
                                                                    text={obj.text}
                                                                    fullName={obj.user.fullName}
                                                                    createdAt={obj.createdAt}
        />)}
      </div>
    </div>
  );
};

export default Profile;