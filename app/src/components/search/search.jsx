import React from 'react';
import "./index.scss"
import btn from "../../images/btn.svg";
import {useDispatch} from "react-redux";
import {searchArticles} from "../../redux/actions/articles";

const Search = ({handleClickToggle}) => {
  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch()

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
    dispatch(searchArticles(e.target.value))
  }

  return (
    <label className="search">
        <input value={search} onChange={handleChangeSearch} placeholder="Поиск статьи по заголовку или тексту..."/>
        <div className="search__close">
          <img onClick={handleClickToggle} src={btn} alt=""/>
        </div>
    </label>
  );
};

export default Search;