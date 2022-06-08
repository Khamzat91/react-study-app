import React from 'react';
import btn from "../../images/btn.svg";
import password from "../../images/password.svg";
import "./index.scss";
import Layout from "../Layout/layout";

const Login = () => {
  return (
    <Layout>
      <div className="login">
      <div className="login__inner">
        <div className="login__head">
          <div className="login__head-title">Вход в аккаунт</div>
          <img src={btn} alt=""/>
        </div>
        <form onSubmit>
        <label className="form__email">
        <span>Email</span>
          <input type="text" placeholder="Email..."/>
        </label>
          <label className="form__password">
            <span>Пороль</span>
            <input type="password" placeholder="password..."/>
            <img src={password} alt=""/>
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;