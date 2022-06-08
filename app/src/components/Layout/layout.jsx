import React from 'react';
import btn from "../../images/btn.svg";
import "./index.scss";

const Layout = ({children}) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;