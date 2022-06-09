import React from 'react';
import Layout from "../Layout/layout";
import btn from "../../images/btn.svg";
import password from "../../images/password.svg";
import "./index.scss"

const Registration = () => {
  return (
    <Layout>
      <div className="registration">
        <div className="registration__inner">
          <div className="registration__head">
            <div className="registration__head-title">Регистрация</div>
            <img src={btn} alt=""/>
          </div>
          <form onSubmit>
            <label className="form__email">
              <span>Имя и фамилия</span>
              <input type="text" placeholder="Имя и фамилия"/>
            </label>
            <label className="form__email">
              <span>Email</span>
              <input type="text" placeholder="Email..."/>
            </label>
            <label className="form__password">
              <span>Пороль</span>
              <input type="password" placeholder="password..."/>
              <img src={password} alt=""/>
            </label>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;