import React from 'react';
import views from "../../images/content/views.svg";
import article from "../../images/content/article.png";
import "./index.scss"
import Pagination from "../pagination/pagination";
import RightHeader from "../rightHeader/rightHeader";
import Search from "../search/search";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../redux/actions/articles";
import Article from "../../article/article";


const Articles = ({isProfile}) => {
  const [toggle, setToggle] = React.useState(true);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.data);
  const handleClickToggle = () => {
    setToggle(!toggle);
  }
  console.log(articles)
  React.useEffect(() => {
    dispatch(getArticles())
  }, [])


  return (
    <>
      {isProfile ? null : toggle ? <RightHeader handleClickToggle={handleClickToggle}/> :
        <Search handleClickToggle={handleClickToggle}/>}
      <div className="main__inner-right">
        <div className="main__right-articles">
          {articles?.map((obj) => <Article key={obj._id}
                                           title={obj.title}
                                           text={obj.text}
                                           description={obj.description}
                                           views={obj.views}
                                           createdAt={obj.createdAt}

          />)}

        </div>
        {!isProfile && <Pagination/>}
      </div>
    </>
  );
};

export default Articles;