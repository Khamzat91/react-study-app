import React from 'react';
import "./index.scss";
import {ReactComponent as Prev} from "../../images/prev.svg";
import {ReactComponent as Next} from "../../images/next.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <div className="pagination__inner-images">
          <Prev className="pagination__inner-prev"/>
          <Next className="pagination__inner-next"/>
        </div>
          <div className="pagination__inner-text">
            Страница 1 из 10
          </div>
      </div>
    </div>
  );
};

export default Pagination;