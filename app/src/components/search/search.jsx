import React from 'react';
import "./index.scss"
import btn from "../../images/btn.svg";

const Search = () => {
  return (
    <label className="search">
        <input type="text" placeholder="Поиск статьи по заголовку или тексту..."/>
        <div className="search__close">
          <img src={btn} alt=""/>
        </div>
    </label>
  );
};

export default Search;